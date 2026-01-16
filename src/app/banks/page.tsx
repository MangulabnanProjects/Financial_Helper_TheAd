'use client';

import React, { useEffect } from 'react';

export default function BanksPage() {

    useEffect(() => {
        // Function to handle scrolling and highlighting
        const handleHashChange = () => {
            const hash = window.location.hash.substring(1); // Remove the '#'
            if (hash) {
                const element = document.getElementById(hash);
                if (element) {
                    // Scroll into view
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });

                    // Add highlight effect
                    element.classList.add('ring-4', 'ring-cyan-500', 'scale-[1.02]', 'transition-all', 'duration-500');

                    // Remove highlight effect after a delay
                    setTimeout(() => {
                        element.classList.remove('ring-4', 'ring-cyan-500', 'scale-[1.02]');
                    }, 2000);
                }
            }
        };

        // Check on mount (initial load)
        handleHashChange();

        // Add event listener for hash changes (if user clicks links while already on page)
        window.addEventListener('hashchange', handleHashChange);

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white p-4 md:p-12 pb-24">
            {/* Page Header */}
            <div className="max-w-7xl mx-auto mb-16 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                    Premier Banking Partners & Financial Solutions
                </h1>
                <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto">
                    We collaborate with the world's most trusted financial institutions to provide you with secure, high-yield, and accessible banking services tailored to your wealth management needs.
                </p>
            </div>

            <div className="max-w-[1400px] mx-auto space-y-16">
                {/* JPMorgan Chase */}
                <div id="jpmorgan" className="bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl shadow-2xl p-8 hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-blue-500/20 transition-all"></div>
                    <div className="flex flex-col xl:flex-row gap-8 relative z-10">
                        {/* Left Column: Image (30%) */}
                        <div className="xl:w-[30%] border-b xl:border-b-0 xl:border-r border-slate-700/50 pb-8 xl:pb-0 xl:pr-8 min-h-[250px] xl:min-h-0">
                            <a href="https://www.jpmorganchase.com" target="_blank" rel="noopener noreferrer" className="block h-full w-full rounded-2xl overflow-hidden border border-slate-700/50 hover:border-blue-400/50 transition-all relative group/img shadow-lg">
                                <div className="absolute inset-0 bg-slate-900/30 group-hover/img:bg-transparent transition-colors z-10 duration-500"></div>
                                <img src="/jpmorgan.jpg" alt="JPMorgan Chase Center" className="w-full h-full object-cover transform group-hover/img:scale-105 transition-transform duration-700 grayscale group-hover/img:grayscale-0" />
                                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-slate-900 to-transparent z-20">
                                    <span className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover/img:text-blue-400 transition-colors">
                                        Visit Official Site
                                        <svg className="w-4 h-4 transform group-hover/img:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                    </span>
                                </div>
                            </a>
                        </div>
                        {/* Middle Column: Identity & Contact (30%) */}
                        <div className="xl:w-[30%] space-y-8 border-b xl:border-b-0 xl:border-r border-slate-700/50 pb-8 xl:pb-0 xl:pr-8 flex flex-col">
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-2">JPMorgan Chase</h2>
                                <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-semibold tracking-wider">GLOBAL LEADER</span>
                                <p className="text-slate-400 mt-4 leading-relaxed text-sm">
                                    The largest bank in the United States and the world's leading provider of financial services to the most important corporations, governments, and wealthy individuals.
                                </p>
                            </div>
                            <div className="space-y-4 mt-auto">
                                <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wide">Contact & Support</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-slate-400 text-sm">
                                        <div className="w-8 h-8 rounded-lg bg-slate-700/50 flex items-center justify-center text-blue-400 shrink-0">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                        </div>
                                        <span>+1-800-935-9935</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-slate-400 text-sm">
                                        <div className="w-8 h-8 rounded-lg bg-slate-700/50 flex items-center justify-center text-blue-400 shrink-0">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                        </div>
                                        <span>premier@jpmorgan.com</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-slate-400 text-sm">
                                        <div className="w-8 h-8 rounded-lg bg-slate-700/50 flex items-center justify-center text-blue-400 shrink-0">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        </div>
                                        <span>24/7 Priority Concierge</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Right Column: Details Grid (40%) */}
                        <div className="xl:w-[40%] space-y-6 flex flex-col justify-center">
                            <div className="space-y-3">
                                <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wide flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Financial Strength
                                </h3>
                                <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-slate-500 text-[10px] uppercase">Total Assets</p>
                                            <p className="text-lg font-bold text-white">$3.7 Trillion</p>
                                        </div>
                                        <div>
                                            <p className="text-slate-500 text-[10px] uppercase">Market Cap</p>
                                            <p className="text-lg font-bold text-emerald-400">$500B+</p>
                                        </div>
                                        <div>
                                            <p className="text-slate-500 text-[10px] uppercase">Interest Offered</p>
                                            <p className="text-lg font-bold text-cyan-400">Up to 5.25%</p>
                                        </div>
                                        <div>
                                            <p className="text-slate-500 text-[10px] uppercase">Credit Rating</p>
                                            <p className="text-lg font-bold text-white">AA-</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wide flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-purple-400"></span> Key Processes
                                </h3>
                                <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50 h-full">
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2">
                                            <svg className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            <span className="text-sm text-slate-300">Instant cross-border wire transfers</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <svg className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            <span className="text-sm text-slate-300">Private Wealth Management integration</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <svg className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            <span className="text-sm text-slate-300">Institutional-grade custody services</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <svg className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            <span className="text-sm text-slate-300">Real-time API for corporate treasury</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <svg className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            <span className="text-sm text-slate-300">Automated liquidity management</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bank of America */}
                <div id="boa" className="bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl shadow-2xl p-8 hover:border-red-500/30 transition-all duration-300 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-red-500/20 transition-all"></div>
                    <div className="flex flex-col xl:flex-row gap-8 relative z-10">
                        <div className="xl:w-[30%] border-b xl:border-b-0 xl:border-r border-slate-700/50 pb-8 xl:pb-0 xl:pr-8 min-h-[250px] xl:min-h-0">
                            <a href="https://www.bankofamerica.com" target="_blank" rel="noopener noreferrer" className="block h-full w-full rounded-2xl overflow-hidden border border-slate-700/50 hover:border-red-400/50 transition-all relative group/img shadow-lg">
                                <div className="absolute inset-0 bg-slate-900/30 group-hover/img:bg-transparent transition-colors z-10 duration-500"></div>
                                <img src="/bankofamerica.jpg" alt="Bank of America HQ" className="w-full h-full object-cover transform group-hover/img:scale-105 transition-transform duration-700 grayscale group-hover/img:grayscale-0" />
                                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-slate-900 to-transparent z-20">
                                    <span className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover/img:text-red-400 transition-colors">
                                        Visit Official Site
                                        <svg className="w-4 h-4 transform group-hover/img:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                    </span>
                                </div>
                            </a>
                        </div>
                        <div className="xl:w-[30%] space-y-8 border-b xl:border-b-0 xl:border-r border-slate-700/50 pb-8 xl:pb-0 xl:pr-8 flex flex-col">
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-2">Bank of America</h2>
                                <span className="inline-block px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-xs font-semibold tracking-wider">INNOVATION HUB</span>
                                <p className="text-slate-400 mt-4 leading-relaxed text-sm">
                                    A global leader in wealth management, corporate and investment banking and trading across a broad range of asset classes.
                                </p>
                            </div>
                            <div className="space-y-4 mt-auto">
                                <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wide">Contact & Support</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-slate-400 text-sm">
                                        <div className="w-8 h-8 rounded-lg bg-slate-700/50 flex items-center justify-center text-red-400 shrink-0">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                        </div>
                                        <span>+1-800-432-1000</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-slate-400 text-sm">
                                        <div className="w-8 h-8 rounded-lg bg-slate-700/50 flex items-center justify-center text-red-400 shrink-0">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                        </div>
                                        <span>support@bankofamerica.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-[40%] space-y-6 flex flex-col justify-center">
                            <div className="space-y-3">
                                <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wide flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Financial Strength
                                </h3>
                                <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-slate-500 text-[10px] uppercase">Total Assets</p>
                                            <p className="text-lg font-bold text-white">$3.1 Trillion</p>
                                        </div>
                                        <div>
                                            <p className="text-slate-500 text-[10px] uppercase">Digital Users</p>
                                            <p className="text-lg font-bold text-emerald-400">56 Million</p>
                                        </div>
                                        <div>
                                            <p className="text-slate-500 text-[10px] uppercase">Preferred Rewards</p>
                                            <p className="text-lg font-bold text-cyan-400">Top Tier</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wide flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-purple-400"></span> Key Processes
                                </h3>
                                <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50 h-full">
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2">
                                            <svg className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                            <span className="text-sm text-slate-300">Award-winning Digital Banking</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <svg className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            <span className="text-sm text-slate-300">Merrill Lynch Investment Integration</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <svg className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            <span className="text-sm text-slate-300">CashPro® Online platform access</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <svg className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            <span className="text-sm text-slate-300">Global transaction services</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Wells Fargo */}
                <div id="wellsfargo" className="bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl shadow-2xl p-8 hover:border-yellow-500/30 transition-all duration-300 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-yellow-500/20 transition-all"></div>
                    <div className="flex flex-col xl:flex-row gap-8 relative z-10">
                        <div className="xl:w-[30%] border-b xl:border-b-0 xl:border-r border-slate-700/50 pb-8 xl:pb-0 xl:pr-8 min-h-[250px] xl:min-h-0">
                            <a href="https://www.wellsfargo.com" target="_blank" rel="noopener noreferrer" className="block h-full w-full rounded-2xl overflow-hidden border border-slate-700/50 hover:border-yellow-400/50 transition-all relative group/img shadow-lg">
                                <div className="absolute inset-0 bg-slate-900/30 group-hover/img:bg-transparent transition-colors z-10 duration-500"></div>
                                <img src="/wellsfargo.jpg" alt="Wells Fargo Building" className="w-full h-full object-cover transform group-hover/img:scale-105 transition-transform duration-700 grayscale group-hover/img:grayscale-0" />
                                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-slate-900 to-transparent z-20">
                                    <span className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover/img:text-yellow-400 transition-colors">
                                        Visit Official Site
                                        <svg className="w-4 h-4 transform group-hover/img:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                    </span>
                                </div>
                            </a>
                        </div>
                        <div className="xl:w-[30%] space-y-8 border-b xl:border-b-0 xl:border-r border-slate-700/50 pb-8 xl:pb-0 xl:pr-8 flex flex-col">
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-2">Wells Fargo</h2>
                                <span className="inline-block px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs font-semibold tracking-wider">COMMUNITY FOCUSED</span>
                                <p className="text-slate-400 mt-4 leading-relaxed text-sm">
                                    A diversified, community-based financial services company with $1.9 trillion in assets, providing banking, investment and mortgage products.
                                </p>
                            </div>
                            <div className="space-y-4 mt-auto">
                                <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wide">Contact & Support</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-slate-400 text-sm">
                                        <div className="w-8 h-8 rounded-lg bg-slate-700/50 flex items-center justify-center text-yellow-500 shrink-0">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                        </div>
                                        <span>+1-800-869-3557</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-slate-400 text-sm">
                                        <div className="w-8 h-8 rounded-lg bg-slate-700/50 flex items-center justify-center text-yellow-500 shrink-0">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                        </div>
                                        <span>Fraud Prevention Hotline</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-[40%] space-y-6 flex flex-col justify-center">
                            <div className="space-y-3">
                                <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wide flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Financial Strength
                                </h3>
                                <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-slate-500 text-[10px] uppercase">Total Assets</p>
                                            <p className="text-lg font-bold text-white">$1.9 Trillion</p>
                                        </div>
                                        <div>
                                            <p className="text-slate-500 text-[10px] uppercase">Branches</p>
                                            <p className="text-lg font-bold text-emerald-400">4,700+</p>
                                        </div>
                                        <div>
                                            <p className="text-slate-500 text-[10px] uppercase">Small Business</p>
                                            <p className="text-lg font-bold text-cyan-400">#1 Lender</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wide flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-purple-400"></span> Key Processes
                                </h3>
                                <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50 h-full">
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2">
                                            <svg className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                            <span className="text-sm text-slate-300">Advanced Commercial Banking</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <svg className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                            <span className="text-sm text-slate-300">Streamlined Mortgage Approval</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <svg className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                            <span className="text-sm text-slate-300">Wells Fargo Vantage℠ digital platform</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <svg className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                            <span className="text-sm text-slate-300">Comprehensive equipment financing</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Citigroup */}
                <div id="citi" className="bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl shadow-2xl p-8 hover:border-blue-400/30 transition-all duration-300 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-cyan-500/20 transition-all"></div>
                    <div className="flex flex-col xl:flex-row gap-8 relative z-10">
                        <div className="xl:w-[30%] border-b xl:border-b-0 xl:border-r border-slate-700/50 pb-8 xl:pb-0 xl:pr-8 min-h-[250px] xl:min-h-0">
                            <a href="https://www.citigroup.com" target="_blank" rel="noopener noreferrer" className="block h-full w-full rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-400/50 transition-all relative group/img shadow-lg">
                                <div className="absolute inset-0 bg-slate-900/30 group-hover/img:bg-transparent transition-colors z-10 duration-500"></div>
                                <img src="/citigroup.jpg" alt="Citigroup Building" className="w-full h-full object-cover transform group-hover/img:scale-105 transition-transform duration-700 grayscale group-hover/img:grayscale-0" />
                                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-slate-900 to-transparent z-20">
                                    <span className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover/img:text-cyan-400 transition-colors">
                                        Visit Official Site
                                        <svg className="w-4 h-4 transform group-hover/img:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                    </span>
                                </div>
                            </a>
                        </div>
                        <div className="xl:w-[30%] space-y-8 border-b xl:border-b-0 xl:border-r border-slate-700/50 pb-8 xl:pb-0 xl:pr-8 flex flex-col">
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-2">Citigroup</h2>
                                <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs font-semibold tracking-wider">INTERNATIONAL</span>
                                <p className="text-slate-400 mt-4 leading-relaxed text-sm">
                                    A preeminent banking partner for institutions with cross-border needs, a global leader in wealth management and a valued personal bank in its home market.
                                </p>
                            </div>
                            <div className="space-y-4 mt-auto">
                                <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wide">Contact & Support</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-slate-400 text-sm">
                                        <div className="w-8 h-8 rounded-lg bg-slate-700/50 flex items-center justify-center text-cyan-400 shrink-0">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                        </div>
                                        <span>+1-800-374-9700</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-slate-400 text-sm">
                                        <div className="w-8 h-8 rounded-lg bg-slate-700/50 flex items-center justify-center text-cyan-400 shrink-0">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                                        </div>
                                        <span>Global Wealth Services</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-[40%] space-y-6 flex flex-col justify-center">
                            <div className="space-y-3">
                                <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wide flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Financial Strength
                                </h3>
                                <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-slate-500 text-[10px] uppercase">Total Assets</p>
                                            <p className="text-lg font-bold text-white">$2.4 Trillion</p>
                                        </div>
                                        <div>
                                            <p className="text-slate-500 text-[10px] uppercase">Countries</p>
                                            <p className="text-lg font-bold text-emerald-400">95+</p>
                                        </div>
                                        <div>
                                            <p className="text-slate-500 text-[10px] uppercase">Daily Volume</p>
                                            <p className="text-lg font-bold text-cyan-400">$4 Trillion</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wide flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-purple-400"></span> Key Processes
                                </h3>
                                <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50 h-full">
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2">
                                            <svg className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            <span className="text-sm text-slate-300">Unmatched Global Reach</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <svg className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            <span className="text-sm text-slate-300">Citi Private Pass Integration</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <svg className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            <span className="text-sm text-slate-300">CitiDirect BE® digital banking</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <svg className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            <span className="text-sm text-slate-300">Treasury and Trade Solutions leader</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* STRATEGIC INSIGHTS SECTION */}
                <div className="mt-16 border-t border-slate-700/50 pt-16">
                    <div className="text-left mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 mb-4">
                            Strategic Banking Selection
                        </h2>
                        <p className="text-slate-400 text-lg max-w-3xl">
                            Understanding the pivotal role of Tier 1 institutions in wealth preservation and global financial architecture.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* 1. Why These 4 Banks? */}
                        <div className="bg-slate-800/30 border border-slate-700/30 p-8 rounded-2xl md:col-span-2">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                                </span>
                                Why These Specific Institutions?
                            </h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                The four banks featured here are <strong className="text-white">JPMorgan Chase, Bank of America, Wells Fargo, and Citigroup</strong>. They are not merely commercial banks; they are the pillars of the US financial system. Known as "Global Systemically Important Banks" (G-SIBs), they hold collectively over 40% of all US banking deposits. Their selection is based on their unmatched capital reserves, operational resilience, and ability to withstand significant market stress. Unlike regional competitors, these institutions benefit from the highest level of regulatory scrutiny and implicit government backstops, making them the safest harbors for substantial capital.
                            </p>
                        </div>

                        {/* 2. Global Reach & Liquidity */}
                        <div className="bg-slate-800/30 border border-slate-700/30 p-8 rounded-2xl">
                            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-3">
                                <span className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </span>
                                Global Reach & Strategic Purpose
                            </h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                High-net-worth individuals require more than just storage for funds; they need a gateway to the global economy. These banks provide specific strategic advantages:
                            </p>
                            <ul className="mt-4 space-y-2 text-sm text-slate-400">
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></span>
                                    <span><strong>Liquidity:</strong> Capability to process multi-million dollar transactions instantly across borders.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></span>
                                    <span><strong>Currency:</strong> Sophisticated FOREX services for holding assets in multiple currencies.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></span>
                                    <span><strong>Access:</strong> Direct lines to private wealth divisions that offer exclusive investment opportunities.</span>
                                </li>
                            </ul>
                        </div>

                        {/* 3. The Importance of Careful Selection */}
                        <div className="bg-slate-800/30 border border-slate-700/30 p-8 rounded-2xl">
                            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-3">
                                <span className="p-2 rounded-lg bg-red-500/10 text-red-400">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                                </span>
                                Why Choice Matters
                            </h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                In an era of economic volatility, <strong>counterparty risk</strong> (the risk that the other party to a transaction might default) is a critical consideration.
                                <br /><br />
                                Smaller or regional banks may offer attractive perks, but they often lack the diversified balance sheets to weather systemic shocks. Choosing one of these top-tier institutions effectively mitigates deposit risk, ensures continuity of access during crises, and provides the technological security required to protect sensitive financial data against modern cyber threats.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
