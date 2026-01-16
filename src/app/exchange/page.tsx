'use client';

import React, { useState, useEffect } from 'react';

// Enhanced Mock Data for the chart
const CURRENCY_PAIRS = {
    'USD/PHP': {
        name: 'US Dollar / Philippine Peso',
        data: [56.12, 56.35, 56.22, 56.45, 56.80, 56.65, 57.10, 56.95, 57.25, 57.40, 57.15, 57.50],
        labels: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'],
        change: '+1.25%',
        rate: '57.50'
    },
    'EUR/USD': {
        name: 'Euro / US Dollar',
        data: [1.082, 1.084, 1.081, 1.085, 1.087, 1.086, 1.089, 1.088, 1.091, 1.090, 1.092, 1.094],
        labels: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'],
        change: '+0.45%',
        rate: '1.094'
    },
    'GBP/USD': {
        name: 'British Pound / US Dollar',
        data: [1.261, 1.264, 1.259, 1.265, 1.270, 1.268, 1.272, 1.275, 1.271, 1.274, 1.276, 1.278],
        labels: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'],
        change: '+0.88%',
        rate: '1.278'
    },
    'USD/JPY': {
        name: 'US Dollar / Japanese Yen',
        data: [148.5, 148.8, 149.1, 148.9, 149.3, 149.5, 149.2, 149.6, 149.8, 150.1, 149.9, 150.2],
        labels: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'],
        change: '+1.14%',
        rate: '150.20'
    },
    'AUD/USD': {
        name: 'Australian Dollar / US Dollar',
        data: [0.654, 0.656, 0.653, 0.657, 0.659, 0.658, 0.660, 0.662, 0.661, 0.663, 0.665, 0.667],
        labels: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'],
        change: '+0.60%',
        rate: '0.667'
    },
    'USD/CAD': {
        name: 'US Dollar / Canadian Dollar',
        data: [1.345, 1.348, 1.346, 1.349, 1.352, 1.350, 1.354, 1.353, 1.356, 1.355, 1.358, 1.360],
        labels: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'],
        change: '+0.37%',
        rate: '1.360'
    },
    'USD/CHF': {
        name: 'US Dollar / Swiss Franc',
        data: [0.875, 0.878, 0.876, 0.879, 0.882, 0.880, 0.884, 0.883, 0.886, 0.885, 0.888, 0.890],
        labels: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'],
        change: '+0.55%',
        rate: '0.890'
    },
    'USD/SGD': {
        name: 'US Dollar / Singapore Dollar',
        data: [1.334, 1.336, 1.335, 1.338, 1.340, 1.339, 1.342, 1.341, 1.344, 1.343, 1.345, 1.347],
        labels: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'],
        change: '+0.25%',
        rate: '1.347'
    },
    'USD/CNY': {
        name: 'US Dollar / Chinese Yuan',
        data: [7.185, 7.190, 7.188, 7.195, 7.200, 7.198, 7.205, 7.203, 7.208, 7.206, 7.210, 7.215],
        labels: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'],
        change: '+0.18%',
        rate: '7.215'
    },
    'NZD/USD': {
        name: 'New Zealand Dollar / US Dollar',
        data: [0.605, 0.608, 0.606, 0.610, 0.612, 0.611, 0.614, 0.613, 0.616, 0.615, 0.618, 0.620],
        labels: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'],
        change: '+0.48%',
        rate: '0.620'
    }
};

type CurrencyKey = keyof typeof CURRENCY_PAIRS;

export default function ExchangePage() {
    const [selectedPair, setSelectedPair] = useState<CurrencyKey>('USD/PHP');
    const currentData = CURRENCY_PAIRS[selectedPair];

    // Handle hash-based navigation to auto-select currency pair
    useEffect(() => {
        const handleHashChange = () => {
            const hash = decodeURIComponent(window.location.hash.substring(1)); // Remove '#' and decode
            if (hash && hash in CURRENCY_PAIRS) {
                setSelectedPair(hash as CurrencyKey);
            }
        };

        // Check on mount
        handleHashChange();

        // Listen for hash changes
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    // Simple Linear Interpolation for SVG Path
    const getPathPoints = (data: number[]) => {
        const result: string[] = [];
        const min = Math.min(...data);
        const max = Math.max(...data);
        const range = max - min || 1;

        const width = 1000;
        const height = 300;
        const padding = 20;

        data.forEach((val, index) => {
            const x = (index / (data.length - 1)) * width;
            const y = height - padding - ((val - min) / range) * (height - 2 * padding);
            result.push(`${x},${y}`);
        });

        return result.join(' L ');
    };

    const pathD = `M ${getPathPoints(currentData.data)}`;
    const areaD = `${pathD} L 1000,350 L 0,350 Z`;

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white p-4 md:p-8 pb-24">
            {/* Header */}
            <div className="max-w-7xl mx-auto mb-12 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                    Global Currency & Foreign Exchange
                </h1>
                <p className="text-slate-400 text-lg">
                    Real-time exchange rates, market insights, and secure definitions.
                </p>
            </div>

            {/* Educational Section */}
            <div className="max-w-4xl mx-auto mb-16 space-y-8 text-center">
                <div className="bg-slate-800/20 rounded-3xl p-8 border border-slate-700/30">
                    <h2 className="text-2xl font-bold text-white mb-8">
                        Understanding Currency & Exchange
                    </h2>

                    <div className="space-y-8 text-left">
                        {/* Item 1 */}
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2 text-cyan-400">What is Fiat Currency?</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Fiat currency is government-issued money that is not backed by a physical commodity like gold. Its value is derived from government stability and public trust in the country's economy. Examples include the USD, EUR, and PHP.
                            </p>
                        </div>

                        {/* Item 2 */}
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2 text-cyan-400">The Foreign Exchange (Forex)</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                The Forex market is a global decentralized marketplace for trading currencies. It defines the exchange rate for all currencies, determining how much of one currency is needed to buy another. It is the largest financial market in the world.
                            </p>
                        </div>

                        {/* Item 3 */}
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2 text-cyan-400">How Exchange Rates Work</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Exchange rates fluctuate based on supply and demand, which are influenced by interest rates, economic growth, and geopolitical stability. A "Strong" currency buys more of another currency, while a "Weak" currency buys less.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="max-w-7xl mx-auto space-y-8">

                {/* Graph Card */}
                <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 md:p-8 relative overflow-hidden">
                    {/* Header Controls */}
                    <div className="flex flex-col gap-6 mb-8">
                        <div className="flex items-center gap-4">
                            <div className="bg-blue-500/10 p-3 rounded-xl border border-blue-500/20">
                                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-white">{selectedPair}</h2>
                                <p className="text-sm text-slate-400">{currentData.name}</p>
                            </div>
                        </div>

                        {/* Scrollable Carousel Selector */}
                        <div className="w-full overflow-hidden relative">
                            {/* Fades for scroll indication */}
                            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-slate-800/50 to-transparent pointer-events-none z-10 md:hidden"></div>
                            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-slate-800/50 to-transparent pointer-events-none z-10 md:hidden"></div>

                            <div className="flex overflow-x-auto gap-2 pb-2 -mx-1 px-1 no-scrollbar scroll-smooth">
                                {(Object.keys(CURRENCY_PAIRS) as CurrencyKey[]).map((pair) => (
                                    <button
                                        key={pair}
                                        onClick={() => setSelectedPair(pair)}
                                        className={`flex-shrink-0 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all border whitespace-nowrap ${selectedPair === pair
                                            ? 'bg-blue-600 text-white border-blue-500/50 shadow-lg shadow-blue-500/20 scale-105'
                                            : 'bg-slate-900/40 text-slate-400 border-slate-700/50 hover:bg-slate-800 hover:text-white hover:border-slate-600'
                                            }`}
                                    >
                                        {pair}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Rate Display */}
                    <div className="mb-6">
                        <span className="text-4xl font-bold text-white mr-3">{currentData.rate}</span>
                        <span className={`text-lg font-medium px-2 py-1 rounded-lg ${currentData.change.startsWith('+') ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>
                            {currentData.change}
                        </span>
                    </div>

                    {/* Chart Area */}
                    <div className="relative w-full h-[350px] bg-slate-900/30 rounded-2xl border border-slate-700/30 overflow-hidden">
                        {/* Grid Lines */}
                        <div className="absolute inset-0 grid grid-rows-4 w-full h-full pointer-events-none">
                            <div className="border-b border-slate-800/50 w-full"></div>
                            <div className="border-b border-slate-800/50 w-full"></div>
                            <div className="border-b border-slate-800/50 w-full"></div>
                        </div>

                        {/* SVG Graph */}
                        <svg className="w-full h-full" viewBox="0 0 1000 300" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                            <path d={areaD} fill="url(#chartGradient)" />
                            <path d={pathD} fill="none" stroke="#3b82f6" strokeWidth="3" vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                        {/* Time Labels */}
                        <div className="absolute bottom-2 left-0 right-0 flex justify-between px-4 text-xs text-slate-500 font-mono">
                            {currentData.labels.filter((_, i) => i % 2 === 0).map((label, i) => (
                                <span key={i}>{label}</span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Market Overview Grid */}
                <div>
                    <h3 className="text-xl font-bold text-white mb-6">Global Markets</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-slate-800/40 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all group cursor-pointer">
                            <div className="flex justify-between items-start mb-4">
                                <span className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400 group-hover:scale-110 transition-transform">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" /></svg>
                                </span>
                                <span className="bg-emerald-500/10 text-emerald-400 text-xs px-2 py-1 rounded-full">+0.8%</span>
                            </div>
                            <h4 className="text-lg font-bold text-white mb-1">NYSE</h4>
                            <p className="text-sm text-slate-400">New York Stock Exchange</p>
                        </div>

                        <div className="bg-slate-800/40 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all group cursor-pointer">
                            <div className="flex justify-between items-start mb-4">
                                <span className="p-3 bg-blue-500/10 rounded-xl text-blue-400 group-hover:scale-110 transition-transform">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" /></svg>
                                </span>
                                <span className="bg-emerald-500/10 text-emerald-400 text-xs px-2 py-1 rounded-full">+1.2%</span>
                            </div>
                            <h4 className="text-lg font-bold text-white mb-1">NASDAQ</h4>
                            <p className="text-sm text-slate-400">Tech Heavy Index</p>
                        </div>

                        <div className="bg-slate-800/40 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all group cursor-pointer">
                            <div className="flex justify-between items-start mb-4">
                                <span className="p-3 bg-purple-500/10 rounded-xl text-purple-400 group-hover:scale-110 transition-transform">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M15 4v2h3v12h-3v2h5V4zM5 4v16h5v-2H7V6h3V4z" /></svg>
                                </span>
                                <span className="bg-rose-500/10 text-rose-400 text-xs px-2 py-1 rounded-full">-0.4%</span>
                            </div>
                            <h4 className="text-lg font-bold text-white mb-1">LSE</h4>
                            <p className="text-sm text-slate-400">London Stock Exchange</p>
                        </div>

                        <div className="bg-slate-800/40 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all group cursor-pointer">
                            <div className="flex justify-between items-start mb-4">
                                <span className="p-3 bg-fuchsia-500/10 rounded-xl text-fuchsia-400 group-hover:scale-110 transition-transform">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" /></svg>
                                </span>
                                <span className="bg-emerald-500/10 text-emerald-400 text-xs px-2 py-1 rounded-full">+0.1%</span>
                            </div>
                            <h4 className="text-lg font-bold text-white mb-1">FOREX</h4>
                            <p className="text-sm text-slate-400">Global Currency Market</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
