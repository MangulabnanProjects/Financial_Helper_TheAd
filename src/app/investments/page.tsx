'use client';

import React, { useEffect } from 'react';

export default function InvestmentsPage() {

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

        // Add event listener for hash changes
        window.addEventListener('hashchange', handleHashChange);

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white p-4 md:p-8 pb-24">
            {/* Page Header - Compact */}
            <div className="max-w-7xl mx-auto mb-16 text-center">
                <h1 className="text-3xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
                    Global Investment Strategies
                </h1>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                    Partner with industry titans for secure futures, diverse portfolios, and sustained growth.
                </p>
            </div>

            <div className="max-w-[1800px] mx-auto space-y-12">

                {/* Educational Section - Professional & Centered */}
                <div className="max-w-6xl mx-auto mb-20 relative px-4">
                    <div className="absolute inset-0 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none"></div>

                    {/* Section Header */}
                    <div className="text-center mb-16 relative z-10">
                        <div className="inline-block p-1 px-4 mb-6">
                            <h2 className="text-4xl md:text-5xl font-bold text-white relative inline-block">
                                What is Investment?
                                <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full"></span>
                            </h2>
                        </div>
                        <p className="text-slate-400 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mt-6">
                            Investment is the strategic deployment of capital to generate wealth over time. It is the discipline of deferring present consumption to secure a prosperous future through the ownership of productive assets.
                        </p>
                    </div>

                    {/* Core Pillars Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">

                        {/* Concept 1: Asset Allocation */}
                        <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 p-8 rounded-3xl hover:bg-slate-800/60 transition-all group hover:border-emerald-500/30">
                            <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-emerald-500/20">
                                <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Asset Allocation</h3>
                            <p className="text-slate-400 text-base leading-relaxed">
                                The strategy of dividing your portfolio among different asset categories—such as stocks, bonds, and cash. This is the primary driver of returns and risk management.
                            </p>
                        </div>

                        {/* Concept 2: Compound Interest */}
                        <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 p-8 rounded-3xl hover:bg-slate-800/60 transition-all group display-offset relative top-0 md:-top-6 hover:border-cyan-500/30 shadow-2xl shadow-cyan-900/10">
                            <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-cyan-500/20">
                                <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Compound Growth</h3>
                            <p className="text-slate-400 text-base leading-relaxed">
                                Often called the "eighth wonder of the world," compounding occurs when an asset's earnings generate their own earnings. Time is your greatest ally in this exponential process.
                            </p>
                        </div>

                        {/* Concept 3: Risk Management */}
                        <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 p-8 rounded-3xl hover:bg-slate-800/60 transition-all group hover:border-purple-500/30">
                            <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-purple-500/20">
                                <svg className="w-8 h-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Risk vs. Reward</h3>
                            <p className="text-slate-400 text-base leading-relaxed">
                                All investments carry risk. Successful investing involves understanding your own risk tolerance and balancing it against the potential returns required to meet your goals.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Separator */}
                <div className="flex items-center justify-center gap-4 text-slate-500 text-xs tracking-[0.2em] uppercase font-semibold mb-8">
                    <span className="w-12 h-[1px] bg-slate-700"></span>
                    Trusted Partners
                    <span className="w-12 h-[1px] bg-slate-700"></span>
                </div>

                {/* Vanguard */}
                <div id="vanguard" className="bg-slate-800/60 backdrop-blur-md border border-slate-700/50 rounded-2xl shadow-xl hover:border-red-500/30 transition-all duration-300 relative overflow-hidden group">
                    <div className="absolute left-0 top-0 w-1 h-full bg-red-500/50"></div>

                    <div className="flex flex-col xl:flex-row">
                        <div className="xl:w-[18%] p-6 border-b xl:border-b-0 xl:border-r border-slate-700/50 flex flex-col justify-center relative">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 blur-[40px] rounded-full pointer-events-none"></div>
                            <h2 className="text-2xl font-bold text-white mb-2">Vanguard</h2>
                            <span className="inline-block self-start bg-red-500/10 text-red-400 text-[10px] px-2 py-0.5 rounded-full font-semibold tracking-wider mb-3">INDEX LEADER</span>
                            <p className="text-slate-400 text-xs leading-relaxed">
                                Pioneer of low-cost investing, owned by its clients.
                            </p>
                        </div>

                        <div className="xl:w-[82%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-700/50">
                            <div className="p-5 space-y-3">
                                <h3 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-3 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span> Contacts
                                </h3>
                                <ul className="space-y-2 text-slate-400 text-xs">
                                    <li className="flex items-center gap-2">
                                        <span className="text-slate-500 w-4"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg></span>
                                        877-662-7447
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-slate-500 w-4"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></span>
                                        invest@vanguard.com
                                    </li>
                                </ul>
                            </div>
                            <div className="p-5 space-y-3">
                                <h3 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-3 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span> Info
                                </h3>
                                <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                                    <div>
                                        <p className="text-[10px] text-slate-500 uppercase">Commision</p>
                                        <p className="text-sm font-semibold text-white">$0</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-slate-500 uppercase">Min. Inv</p>
                                        <p className="text-sm font-semibold text-white">$3,000</p>
                                    </div>
                                    <div className="col-span-2 border-t border-slate-700/50 pt-2 mt-1">
                                        <p className="text-[10px] text-slate-500 uppercase">Expense Ratio</p>
                                        <p className="text-sm font-semibold text-emerald-400">0.09% (Avg)</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-5 space-y-3">
                                <h3 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-3 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span> Focus
                                </h3>
                                <div className="flex flex-wrap gap-1.5">
                                    <span className="px-2 py-1 bg-slate-900/40 rounded border border-slate-700/50 text-[10px] text-slate-300">Retirement</span>
                                    <span className="px-2 py-1 bg-slate-900/40 rounded border border-slate-700/50 text-[10px] text-slate-300">Passive</span>
                                    <span className="px-2 py-1 bg-slate-900/40 rounded border border-slate-700/50 text-[10px] text-slate-300">Tax Efficiency</span>
                                    <span className="px-2 py-1 bg-slate-900/40 rounded border border-slate-700/50 text-[10px] text-slate-300">Long-term</span>
                                </div>
                            </div>
                            <div className="p-5 space-y-3 bg-slate-900/20">
                                <h3 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-3 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span> Benefits
                                </h3>
                                <ul className="space-y-1.5 text-xs text-slate-300">
                                    <li className="flex items-start gap-1.5">
                                        <svg className="w-3 h-3 text-emerald-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        Client-owned structure
                                    </li>
                                    <li className="flex items-start gap-1.5">
                                        <svg className="w-3 h-3 text-emerald-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        Lowest industry fees
                                    </li>
                                    <li className="flex items-start gap-1.5">
                                        <svg className="w-3 h-3 text-emerald-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        Auto rebalancing
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BlackRock */}
                <div id="blackrock" className="bg-slate-800/60 backdrop-blur-md border border-slate-700/50 rounded-2xl shadow-xl hover:border-slate-400/30 transition-all duration-300 relative overflow-hidden group">
                    <div className="absolute left-0 top-0 w-1 h-full bg-slate-400/50"></div>
                    <div className="flex flex-col xl:flex-row">
                        <div className="xl:w-[18%] p-6 border-b xl:border-b-0 xl:border-r border-slate-700/50 flex flex-col justify-center relative">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-[40px] rounded-full pointer-events-none"></div>
                            <h2 className="text-2xl font-bold text-white mb-2">BlackRock</h2>
                            <span className="inline-block self-start bg-slate-700 text-slate-300 text-[10px] px-2 py-0.5 rounded-full font-semibold tracking-wider mb-3">GLOBAL ASSET MGR</span>
                            <p className="text-slate-400 text-xs leading-relaxed">
                                Building better financial futures through technology (Aladdin®) & insight.
                            </p>
                        </div>
                        <div className="xl:w-[82%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-700/50">
                            <div className="p-5 space-y-3">
                                <h3 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-3 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span> Contacts
                                </h3>
                                <ul className="space-y-2 text-slate-400 text-xs">
                                    <li className="flex items-center gap-2">
                                        <span className="text-slate-500 w-4"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg></span>
                                        800-441-7762
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-slate-500 w-4"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></span>
                                        ishares@blackrock.com
                                    </li>
                                </ul>
                            </div>
                            <div className="p-5 space-y-3">
                                <h3 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-3 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span> Info
                                </h3>
                                <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                                    <div>
                                        <p className="text-[10px] text-slate-500 uppercase">AUM</p>
                                        <p className="text-sm font-semibold text-white">$10T+</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-slate-500 uppercase">ETF Share</p>
                                        <p className="text-sm font-semibold text-white">33%</p>
                                    </div>
                                    <div className="col-span-2 border-t border-slate-700/50 pt-2 mt-1">
                                        <p className="text-[10px] text-slate-500 uppercase">Platform</p>
                                        <p className="text-sm font-semibold text-cyan-400">Aladdin®</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-5 space-y-3">
                                <h3 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-3 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span> Focus
                                </h3>
                                <div className="flex flex-wrap gap-1.5">
                                    <span className="px-2 py-1 bg-slate-900/40 rounded border border-slate-700/50 text-[10px] text-slate-300">iShares ETFs</span>
                                    <span className="px-2 py-1 bg-slate-900/40 rounded border border-slate-700/50 text-[10px] text-slate-300">ESG</span>
                                    <span className="px-2 py-1 bg-slate-900/40 rounded border border-slate-700/50 text-[10px] text-slate-300">Fixed Income</span>
                                    <span className="px-2 py-1 bg-slate-900/40 rounded border border-slate-700/50 text-[10px] text-slate-300">Institutions</span>
                                </div>
                            </div>
                            <div className="p-5 space-y-3 bg-slate-900/20">
                                <h3 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-3 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span> Benefits
                                </h3>
                                <ul className="space-y-1.5 text-xs text-slate-300">
                                    <li className="flex items-start gap-1.5">
                                        <svg className="w-3 h-3 text-emerald-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        Advanced risk analysis
                                    </li>
                                    <li className="flex items-start gap-1.5">
                                        <svg className="w-3 h-3 text-emerald-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        Broadest range of ETFs
                                    </li>
                                    <li className="flex items-start gap-1.5">
                                        <svg className="w-3 h-3 text-emerald-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        Global market access
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Fidelity */}
                <div id="fidelity" className="bg-slate-800/60 backdrop-blur-md border border-slate-700/50 rounded-2xl shadow-xl hover:border-emerald-500/30 transition-all duration-300 relative overflow-hidden group">
                    <div className="absolute left-0 top-0 w-1 h-full bg-emerald-500/50"></div>
                    <div className="flex flex-col xl:flex-row">
                        <div className="xl:w-[18%] p-6 border-b xl:border-b-0 xl:border-r border-slate-700/50 flex flex-col justify-center relative">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-[40px] rounded-full pointer-events-none"></div>
                            <h2 className="text-2xl font-bold text-white mb-2">Fidelity</h2>
                            <span className="inline-block self-start bg-emerald-500/10 text-emerald-400 text-[10px] px-2 py-0.5 rounded-full font-semibold tracking-wider mb-3">ACTIVE TRADING</span>
                            <p className="text-slate-400 text-xs leading-relaxed">
                                Helping 40 million people feel confident in their financial goals.
                            </p>
                        </div>
                        <div className="xl:w-[82%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-700/50">
                            <div className="p-5 space-y-3">
                                <h3 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-3 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Contacts
                                </h3>
                                <ul className="space-y-2 text-slate-400 text-xs">
                                    <li className="flex items-center gap-2">
                                        <span className="text-slate-500 w-4"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg></span>
                                        800-343-3548
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-slate-500 w-4"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></span>
                                        service@fidelity.com
                                    </li>
                                </ul>
                            </div>
                            <div className="p-5 space-y-3">
                                <h3 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-3 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Info
                                </h3>
                                <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                                    <div>
                                        <p className="text-[10px] text-slate-500 uppercase">Trade Fee</p>
                                        <p className="text-sm font-semibold text-white">$0</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-slate-500 uppercase">Options</p>
                                        <p className="text-sm font-semibold text-white">$0.65</p>
                                    </div>
                                    <div className="col-span-2 border-t border-slate-700/50 pt-2 mt-1">
                                        <p className="text-[10px] text-slate-500 uppercase">Research</p>
                                        <p className="text-sm font-semibold text-cyan-400">Comprehensive (Free)</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-5 space-y-3">
                                <h3 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-3 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Focus
                                </h3>
                                <div className="flex flex-wrap gap-1.5">
                                    <span className="px-2 py-1 bg-slate-900/40 rounded border border-slate-700/50 text-[10px] text-slate-300">Active Trading</span>
                                    <span className="px-2 py-1 bg-slate-900/40 rounded border border-slate-700/50 text-[10px] text-slate-300">Crypto</span>
                                    <span className="px-2 py-1 bg-slate-900/40 rounded border border-slate-700/50 text-[10px] text-slate-300">No-fee Index</span>
                                    <span className="px-2 py-1 bg-slate-900/40 rounded border border-slate-700/50 text-[10px] text-slate-300">401(k)</span>
                                </div>
                            </div>
                            <div className="p-5 space-y-3 bg-slate-900/20">
                                <h3 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-3 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Benefits
                                </h3>
                                <ul className="space-y-1.5 text-xs text-slate-300">
                                    <li className="flex items-start gap-1.5">
                                        <svg className="w-3 h-3 text-emerald-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        Zero expense index funds
                                    </li>
                                    <li className="flex items-start gap-1.5">
                                        <svg className="w-3 h-3 text-emerald-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        High-quality execution
                                    </li>
                                    <li className="flex items-start gap-1.5">
                                        <svg className="w-3 h-3 text-emerald-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        Best market tools
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Morgan Stanley */}
                <div id="morganstanley" className="bg-slate-800/60 backdrop-blur-md border border-slate-700/50 rounded-2xl shadow-xl hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden group">
                    <div className="absolute left-0 top-0 w-1 h-full bg-blue-500/50"></div>
                    <div className="flex flex-col xl:flex-row">
                        <div className="xl:w-[18%] p-6 border-b xl:border-b-0 xl:border-r border-slate-700/50 flex flex-col justify-center relative">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[40px] rounded-full pointer-events-none"></div>
                            <h2 className="text-2xl font-bold text-white mb-2">Morgan Stanley</h2>
                            <span className="inline-block self-start bg-blue-500/10 text-blue-400 text-[10px] px-2 py-0.5 rounded-full font-semibold tracking-wider mb-3">WEALTH MGMT</span>
                            <p className="text-slate-400 text-xs leading-relaxed">
                                Global leader in investment banking & wealth mgmt, advising finest institutions.
                            </p>
                        </div>
                        <div className="xl:w-[82%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-700/50">
                            <div className="p-5 space-y-3">
                                <h3 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-3 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span> Contacts
                                </h3>
                                <ul className="space-y-2 text-slate-400 text-xs">
                                    <li className="flex items-center gap-2">
                                        <span className="text-slate-500 w-4"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg></span>
                                        888-454-3965
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-slate-500 w-4"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></span>
                                        wealth@morganstanley.com
                                    </li>
                                </ul>
                            </div>
                            <div className="p-5 space-y-3">
                                <h3 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-3 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span> Info
                                </h3>
                                <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                                    <div>
                                        <p className="text-[10px] text-slate-500 uppercase">IPO Access</p>
                                        <p className="text-sm font-semibold text-white">Review</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-slate-500 uppercase">E*TRADE</p>
                                        <p className="text-sm font-semibold text-white">Integrated</p>
                                    </div>
                                    <div className="col-span-2 border-t border-slate-700/50 pt-2 mt-1">
                                        <p className="text-[10px] text-slate-500 uppercase">Fee</p>
                                        <p className="text-sm font-semibold text-cyan-400">~1% (AUM)</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-5 space-y-3">
                                <h3 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-3 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span> Focus
                                </h3>
                                <div className="flex flex-wrap gap-1.5">
                                    <span className="px-2 py-1 bg-slate-900/40 rounded border border-slate-700/50 text-[10px] text-slate-300">Wealth Preserv.</span>
                                    <span className="px-2 py-1 bg-slate-900/40 rounded border border-slate-700/50 text-[10px] text-slate-300">Legacy</span>
                                    <span className="px-2 py-1 bg-slate-900/40 rounded border border-slate-700/50 text-[10px] text-slate-300">Alternate Asset</span>
                                    <span className="px-2 py-1 bg-slate-900/40 rounded border border-slate-700/50 text-[10px] text-slate-300">Structure</span>
                                </div>
                            </div>
                            <div className="p-5 space-y-3 bg-slate-900/20">
                                <h3 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-3 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span> Benefits
                                </h3>
                                <ul className="space-y-1.5 text-xs text-slate-300">
                                    <li className="flex items-start gap-1.5">
                                        <svg className="w-3 h-3 text-emerald-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        Top-tier equity research
                                    </li>
                                    <li className="flex items-start gap-1.5">
                                        <svg className="w-3 h-3 text-emerald-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        Personalized relationship
                                    </li>
                                    <li className="flex items-start gap-1.5">
                                        <svg className="w-3 h-3 text-emerald-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        Capital markets access
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* How to Invest / Process Section */}
                <div className="max-w-7xl mx-auto rounded-3xl p-8 md:p-12 relative overflow-hidden border border-slate-700/30">
                    {/* Glow Effect */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 blur-[80px] rounded-full pointer-events-none"></div>

                    <div className="flex flex-col xl:flex-row gap-12 relative z-10 mb-12">

                        {/* Left Column: Investment Process (60%) */}
                        <div className="xl:w-[60%] space-y-8">
                            <div className="flex items-center gap-4 mb-2">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                </div>
                                <h2 className="text-3xl font-bold text-white">Investment Process</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Step 1 */}
                                <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-700/50 hover:border-emerald-500/30 transition-all group">
                                    <h3 className="text-lg font-bold text-emerald-400 mb-2 flex items-center gap-2">
                                        <span className="text-sm px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">01</span>
                                        Registration
                                    </h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        Select a partner firm above and create your brokerage account. Complete basic identity verification (KYC).
                                    </p>
                                </div>
                                {/* Step 2 */}
                                <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-700/50 hover:border-cyan-500/30 transition-all group">
                                    <h3 className="text-lg font-bold text-cyan-400 mb-2 flex items-center gap-2">
                                        <span className="text-sm px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">02</span>
                                        Funding
                                    </h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        Link your bank account and transfer funds. Processing typically takes <span className="text-white font-medium">1-2 business days</span>.
                                    </p>
                                </div>
                                {/* Step 3 */}
                                <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-700/50 hover:border-blue-500/30 transition-all group">
                                    <h3 className="text-lg font-bold text-blue-400 mb-2 flex items-center gap-2">
                                        <span className="text-sm px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">03</span>
                                        Selection
                                    </h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        Choose assets based on your goals. Use the provided research tools to select stocks, ETFs, or mutual funds.
                                    </p>
                                </div>
                                {/* Step 4 */}
                                <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-700/50 hover:border-purple-500/30 transition-all group">
                                    <h3 className="text-lg font-bold text-purple-400 mb-2 flex items-center gap-2">
                                        <span className="text-sm px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20">04</span>
                                        Monitor
                                    </h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        Track performance via the dashboard. Rebalance quarterly to maintain your targeted asset allocation.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Service & Support (40%) */}
                        <div className="xl:w-[40%] space-y-8 flex flex-col">
                            <div className="p-0 rounded-2xl flex-1">
                                <h3 className="text-xl font-bold text-white mb-6 border-b border-slate-700 pb-4">Service & Support</h3>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        </div>
                                        <div>
                                            <p className="text-white font-semibold text-sm">Processing & Support Hours</p>
                                            <p className="text-slate-400 text-xs mt-1">Mon-Fri: 8:00 AM - 6:00 PM EST</p>
                                            <p className="text-slate-400 text-xs">Sat: 9:00 AM - 1:00 PM EST</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-pink-500/20 text-pink-400 flex items-center justify-center shrink-0">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                        </div>
                                        <div>
                                            <p className="text-white font-semibold text-sm">Priority Contact</p>
                                            <p className="text-slate-400 text-xs mt-1">support@investment-partner.com</p>
                                            <p className="text-slate-400 text-xs">Average response: &lt; 2 hours</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Trust & Security - Moved to Bottom Full Width */}
                    <div className="pt-8 border-t border-slate-700/50 relative z-10">
                        <h4 className="text-sm font-bold text-slate-300 uppercase tracking-widest mb-6 text-center">Trust & Security</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="group text-center md:text-left bg-slate-800/30 p-6 rounded-2xl border border-slate-700/30">
                                <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-white mb-2">
                                    <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    <span className="font-semibold">SIPC Insured</span>
                                </div>
                                <p className="text-xs text-slate-500 leading-relaxed">
                                    Your assets are protected up to $500,000 (including $250,000 for claims for cash) against the failure of a brokerage firm.
                                </p>
                            </div>

                            <div className="group text-center md:text-left bg-slate-800/30 p-6 rounded-2xl border border-slate-700/30">
                                <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-white mb-2">
                                    <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                                    <span className="font-semibold">256-bit Encryption</span>
                                </div>
                                <p className="text-xs text-slate-500 leading-relaxed">
                                    All sensitive data and transactions are protected by bank-level AES-256 encryption protocols to ensure your information remains private.
                                </p>
                            </div>

                            <div className="group text-center md:text-left bg-slate-800/30 p-6 rounded-2xl border border-slate-700/30">
                                <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-white mb-2">
                                    <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    <span className="font-semibold">Fully Regulated</span>
                                </div>
                                <p className="text-xs text-slate-500 leading-relaxed">
                                    We operate in full compliance with SEC regulations and are members of FINRA, ensuring strict adherence to fair practice standards.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
