'use client';

import React, { useEffect } from 'react';

export default function CryptoPage() {

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
                    // Using distinct colors for different assets could be cool, but consistent usage of 'ring-cyan-500' or similar is safer. 
                    // Let's use the asset's brand color if possible? No, sticking to a consistent highlight behavior (cyan/blue) is better for UX, 
                    // but since these cards are dark, a bright ring is good. I'll use ring-cyan-500 for consistency with other pages.
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
        <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white p-4 md:p-12 pb-24">
            {/* Page Header */}
            <div className="max-w-7xl mx-auto mb-16 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                    Digital Asset Portfolio
                </h1>
                <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto">
                    Explore the frontier of decentralized finance with our curated selection of high-performance cryptocurrencies.
                </p>
            </div>

            {/* What is Crypto Explainer */}
            <div className="max-w-6xl mx-auto mb-16 relative">
                <div className="absolute inset-0 bg-purple-500/5 blur-[80px] rounded-full pointer-events-none"></div>
                <div className="text-center mb-12 relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">What is Cryptocurrency?</h2>
                    <p className="text-slate-400 text-lg max-w-4xl mx-auto leading-relaxed">
                        A cryptocurrency is a digital or virtual currency secured by cryptography, which makes it nearly impossible to counterfeit or double-spend. Many cryptocurrencies are decentralized networks based on blockchain technology—a distributed ledger enforced by a disparate network of computers.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                    <div className="bg-slate-800/30 border border-slate-700/50 p-6 rounded-2xl backdrop-blur-sm">
                        <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-4 text-purple-400">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Blockchain Tech</h3>
                        <p className="text-sm text-slate-400">An immutable public ledger that records all transactions, ensuring transparency and trust without intermediaries.</p>
                    </div>
                    <div className="bg-slate-800/30 border border-slate-700/50 p-6 rounded-2xl backdrop-blur-sm">
                        <div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center mb-4 text-pink-400">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Decentralization</h3>
                        <p className="text-sm text-slate-400">Operates independently of central banks or governments, theoretically immune to government interference.</p>
                    </div>
                    <div className="bg-slate-800/30 border border-slate-700/50 p-6 rounded-2xl backdrop-blur-sm">
                        <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4 text-blue-400">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Secure & Global</h3>
                        <p className="text-sm text-slate-400">Transfers are encrypted and can be sent anywhere in the world instantly with lower fees than traditional banks.</p>
                    </div>
                </div>
            </div>

            {/* Main "Big Box" Container */}
            <div className="max-w-7xl mx-auto bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl mb-16">
                {/* Background Glows */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/10 blur-[100px] rounded-full pointer-events-none"></div>

                <div className="relative z-10">
                    <h2 className="text-2xl font-bold text-white mb-8 border-b border-slate-700/50 pb-4 inline-block pr-12">
                        Available Assets
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Bitcoin */}
                        <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-700/50 hover:border-orange-500/50 transition-all hover:bg-slate-900/80 group text-center">
                            <div className="w-16 h-16 mx-auto bg-orange-500/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 24 24"><path d="M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.24 14.9.358c6.43 1.605 10.342 8.115 8.738 14.548v-.002zm-16.088-6.08a.92.92 0 00-1.836.196L7.49 18.06a.916.916 0 101.826-.184l-1.678-9.056zM15.46 15.908c-.286 1.15-2.072 1.3-2.906.96l-.986-.412-1.372 3.196a.82.82 0 11-1.506-.644l1.378-3.21-1.646-.684a.82.82 0 11.608-1.53l1.83.76.626-1.464c.264-.616 1.436-.912 1.838.026.176.41-.096 1.16-.182 1.34l.642 1.502.936.388c.844.35 1.026 1.62.74 2.772zM15.756 8.9c-.382 1.536-2.5 1.748-3.178 1.144-.066-.464-.326-1.156-.326-1.156l-1.366 3.19a.82.82 0 11-1.506-.644l1.37-3.196-1.636-.678a.82.82 0 01.606-1.53l5.06 2.096c.67.278.498 1.8.498 1.8.318-.51 1.758-.55 1.902 1.14l-1.424 5.922c-.172.716-.948 1.03-1.666.758a.914.914 0 01-.642-1.13c.27-.674 1.426-5.466 1.426-5.466.154-.64-.548-.82-1.114-1.05z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-1">Bitcoin</h3>
                            <span className="text-xs font-mono text-orange-400 mb-3 block">BTC</span>
                            <p className="text-slate-400 text-xs">Digital Gold. The first decentralized cryptocurrency.</p>
                        </div>

                        {/* Ethereum */}
                        <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all hover:bg-slate-900/80 group text-center">
                            <div className="w-16 h-16 mx-auto bg-purple-500/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 text-purple-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z" opacity="0.1" /><path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z" fill="none" /><path d="M11.996 15.674l-4.72-2.82 4.72 6.81 4.72-6.81-4.72 2.82zm0-4.832L7.22 12.8l4.776 2.067 4.787-2.071-4.787-1.954zm0-5.83l-4.773 7.828 4.773 2.065 4.774-2.065-4.774-7.829z" fill="currentColor" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-1">Ethereum</h3>
                            <span className="text-xs font-mono text-purple-400 mb-3 block">ETH</span>
                            <p className="text-slate-400 text-xs">The leading smart contract platform & DeFi hub.</p>
                        </div>

                        {/* Solana */}
                        <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-700/50 hover:border-emerald-500/50 transition-all hover:bg-slate-900/80 group text-center">
                            <div className="w-16 h-16 mx-auto bg-emerald-500/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-1">Solana</h3>
                            <span className="text-xs font-mono text-emerald-400 mb-3 block">SOL</span>
                            <p className="text-slate-400 text-xs">High-speed, low-cost Layer 1 blockchain.</p>
                        </div>

                        {/* XRP */}
                        <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-700/50 hover:border-slate-400/50 transition-all hover:bg-slate-900/80 group text-center">
                            <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-2xl font-bold text-white">X</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-1">XRP</h3>
                            <span className="text-xs font-mono text-slate-400 mb-3 block">XRP</span>
                            <p className="text-slate-400 text-xs">Global payments network for financial institutions.</p>
                        </div>

                        {/* Binance Coin */}
                        <div id="bnb" className="bg-slate-900/60 p-6 rounded-2xl border border-slate-700/50 hover:border-yellow-500/50 transition-all hover:bg-slate-900/80 group text-center">
                            <div className="w-16 h-16 mx-auto bg-yellow-500/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 24 24"><path d="M16.624 13.9202l2.7175 2.7154-7.353 7.353-7.353-7.3529 2.7175-2.7154 4.6355 4.6595 4.6356-4.6595zm4.6366-4.6366L24 12l-2.7154 2.7154-2.7154-2.7154 2.7154-2.7154zM2.7154 9.2836L5.4308 12l-2.7154 2.7154L0 12l2.7154-2.7164zM16.624 10.0798l-4.6356-4.6355-4.6355 4.6355-2.7175-2.7155 7.353-7.353 7.353 7.353-2.7175 2.7155z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-1">BNB</h3>
                            <span className="text-xs font-mono text-yellow-400 mb-3 block">BNB</span>
                            <p className="text-slate-400 text-xs">Powering the largest crypto exchange ecosystem.</p>
                        </div>

                        {/* Cardano */}
                        <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all hover:bg-slate-900/80 group text-center">
                            <div className="w-16 h-16 mx-auto bg-blue-500/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" fill="currentColor" opacity="0.3" /><circle cx="12" cy="12" r="4" fill="currentColor" /><circle cx="12" cy="2" r="2" fill="currentColor" /><circle cx="12" cy="22" r="2" fill="currentColor" /><circle cx="2" cy="12" r="2" fill="currentColor" /><circle cx="22" cy="12" r="2" fill="currentColor" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-1">Cardano</h3>
                            <span className="text-xs font-mono text-blue-400 mb-3 block">ADA</span>
                            <p className="text-slate-400 text-xs">Research-driven blockchain platform.</p>
                        </div>

                        {/* Polkadot */}
                        <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-700/50 hover:border-pink-500/50 transition-all hover:bg-slate-900/80 group text-center">
                            <div className="w-16 h-16 mx-auto bg-pink-500/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-2xl font-bold text-pink-500">P</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-1">Polkadot</h3>
                            <span className="text-xs font-mono text-pink-400 mb-3 block">DOT</span>
                            <p className="text-slate-400 text-xs">Connecting and securing a network of blockchains.</p>
                        </div>

                        {/* Dogecoin */}
                        <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-700/50 hover:border-yellow-400/50 transition-all hover:bg-slate-900/80 group text-center">
                            <div className="w-16 h-16 mx-auto bg-yellow-400/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-2xl text-yellow-400">Ð</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-1">Dogecoin</h3>
                            <span className="text-xs font-mono text-yellow-400 mb-3 block">DOGE</span>
                            <p className="text-slate-400 text-xs">The original meme coin used for payments.</p>
                        </div>

                        {/* Avalanche */}
                        <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-700/50 hover:border-red-500/50 transition-all hover:bg-slate-900/80 group text-center">
                            <div className="w-16 h-16 mx-auto bg-red-500/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0L0 24h24L12 0zm0 4.8l8.4 16.8H3.6L12 4.8z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-1">Avalanche</h3>
                            <span className="text-xs font-mono text-red-400 mb-3 block">AVAX</span>
                            <p className="text-slate-400 text-xs">Blazingly fast, low cost, & eco-friendly.</p>
                        </div>

                        {/* Chainlink */}
                        <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-700/50 hover:border-blue-400/50 transition-all hover:bg-slate-900/80 group text-center">
                            <div className="w-16 h-16 mx-auto bg-blue-400/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0L2.4 5.5v11L12 22l9.6-5.5v-11L12 0zm0 2.8l7.2 4.1v8.2L12 19.2 4.8 15.1V6.9L12 2.8z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-1">Chainlink</h3>
                            <span className="text-xs font-mono text-blue-400 mb-3 block">LINK</span>
                            <p className="text-slate-400 text-xs">Decentralized oracle network.</p>
                        </div>

                        {/* Polygon */}
                        <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-700/50 hover:border-purple-600/50 transition-all hover:bg-slate-900/80 group text-center">
                            <div className="w-16 h-16 mx-auto bg-purple-600/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .3L.6 6.8l5.7 3.3L12 6.8l5.7 3.3 5.7-3.3L12 .3zm0 23.4l11.4-6.6-5.7-3.3-5.7 3.3-5.7 3.3-5.7 3.3L12 23.7z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-1">Polygon</h3>
                            <span className="text-xs font-mono text-purple-400 mb-3 block">MATIC</span>
                            <p className="text-slate-400 text-xs">Ethereum's Internet of Blockchains.</p>
                        </div>

                        {/* USDC */}
                        <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-700/50 hover:border-blue-300/50 transition-all hover:bg-slate-900/80 group text-center">
                            <div className="w-16 h-16 mx-auto bg-blue-300/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-xl font-bold text-blue-300">$</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-1">USDC</h3>
                            <span className="text-xs font-mono text-blue-300 mb-3 block">USDC</span>
                            <p className="text-slate-400 text-xs">Digital dollar stablecoin.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Deep Dive Section */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="col-span-1 md:col-span-4 text-center mb-4">
                    <h2 className="text-3xl font-bold text-white">Top Asset Analysis</h2>
                    <p className="text-slate-400">Detailed breakdown of the market leaders.</p>
                </div>

                {/* Bitcoin Detail Card */}
                <div id="bitcoin" className="bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 relative overflow-hidden flex flex-col h-full hover:border-orange-500/30 transition-all">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 bg-orange-500/10 rounded-2xl flex items-center justify-center shrink-0">
                            <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 24 24"><path d="M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.24 14.9.358c6.43 1.605 10.342 8.115 8.738 14.548v-.002zm-16.088-6.08a.92.92 0 00-1.836.196L7.49 18.06a.916.916 0 101.826-.184l-1.678-9.056zM15.46 15.908c-.286 1.15-2.072 1.3-2.906.96l-.986-.412-1.372 3.196a.82.82 0 11-1.506-.644l1.378-3.21-1.646-.684a.82.82 0 11.608-1.53l1.83.76.626-1.464c.264-.616 1.436-.912 1.838.026.176.41-.096 1.16-.182 1.34l.642 1.502.936.388c.844.35 1.026 1.62.74 2.772zM15.756 8.9c-.382 1.536-2.5 1.748-3.178 1.144-.066-.464-.326-1.156-.326-1.156l-1.366 3.19a.82.82 0 11-1.506-.644l1.37-3.196-1.636-.678a.82.82 0 01.606-1.53l5.06 2.096c.67.278.498 1.8.498 1.8.318-.51 1.758-.55 1.902 1.14l-1.424 5.922c-.172.716-.948 1.03-1.666.758a.914.914 0 01-.642-1.13c.27-.674 1.426-5.466 1.426-5.466.154-.64-.548-.82-1.114-1.05z" /></svg>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-orange-400">Bitcoin</h3>
                            <span className="text-xs font-mono text-slate-500">BTC / POW / SHA-256</span>
                        </div>
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed mb-8 min-h-[60px]">
                        The first store of digital value, operating on a decentralized network with no central authority. Designed as an alternative to fiat currency.
                    </p>

                    <div className="grid grid-cols-2 gap-4 mt-auto">
                        <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/30">
                            <p className="text-[10px] text-orange-400 uppercase font-bold mb-1">Purpose</p>
                            <p className="text-xs text-white">Store of Value</p>
                        </div>
                        <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/30">
                            <p className="text-[10px] text-orange-400 uppercase font-bold mb-1">Quality</p>
                            <p className="text-xs text-white">Institutional Grade</p>
                        </div>
                        <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/30">
                            <p className="text-[10px] text-orange-400 uppercase font-bold mb-1">Risk</p>
                            <p className="text-xs text-white">Moderate (Class A)</p>
                        </div>
                        <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/30">
                            <p className="text-[10px] text-orange-400 uppercase font-bold mb-1">Supply</p>
                            <p className="text-xs text-white">Max 21M</p>
                        </div>
                        <div className="col-span-2 bg-slate-900/50 p-4 rounded-xl border border-slate-700/30">
                            <p className="text-[10px] text-orange-400 uppercase font-bold mb-1">Process</p>
                            <p className="text-xs text-slate-400">Proof of Work (PoW) mining ensures security.</p>
                        </div>
                    </div>
                </div>

                {/* Ethereum Detail Card */}
                <div id="ethereum" className="bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 relative overflow-hidden flex flex-col h-full hover:border-purple-500/30 transition-all">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center shrink-0">
                            <svg className="w-8 h-8 text-purple-500" fill="currentColor" viewBox="0 0 24 24"><path d="M11.996 15.674l-4.72-2.82 4.72 6.81 4.72-6.81-4.72 2.82zm0-4.832L7.22 12.8l4.776 2.067 4.787-2.071-4.787-1.954zm0-5.83l-4.773 7.828 4.773 2.065 4.774-2.065-4.774-7.829z" /></svg>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-purple-400">Ethereum</h3>
                            <span className="text-xs font-mono text-slate-500">ETH / POS / SMART-CONTRACTS</span>
                        </div>
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed mb-8 min-h-[60px]">
                        A decentralized platform that runs smart contracts: applications that run exactly as programmed without any possibility of downtime or fraud.
                    </p>

                    <div className="grid grid-cols-2 gap-4 mt-auto">
                        <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/30">
                            <p className="text-[10px] text-purple-400 uppercase font-bold mb-1">Purpose</p>
                            <p className="text-xs text-white">dApps Layer</p>
                        </div>
                        <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/30">
                            <p className="text-[10px] text-purple-400 uppercase font-bold mb-1">Quality</p>
                            <p className="text-xs text-white">DeFi Standard</p>
                        </div>
                        <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/30">
                            <p className="text-[10px] text-purple-400 uppercase font-bold mb-1">Risk</p>
                            <p className="text-xs text-white">Growth Potential</p>
                        </div>
                        <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/30">
                            <p className="text-[10px] text-purple-400 uppercase font-bold mb-1">Supply</p>
                            <p className="text-xs text-white">Deflationary</p>
                        </div>
                        <div className="col-span-2 bg-slate-900/50 p-4 rounded-xl border border-slate-700/30">
                            <p className="text-[10px] text-purple-400 uppercase font-bold mb-1">Process</p>
                            <p className="text-xs text-slate-400">Proof of Stake (PoS) for efficiency.</p>
                        </div>
                    </div>
                </div>

                {/* Solana Detail Card */}
                <div id="solana" className="bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 relative overflow-hidden flex flex-col h-full hover:border-emerald-500/30 transition-all">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center shrink-0">
                            <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-emerald-400">Solana</h3>
                            <span className="text-xs font-mono text-slate-500">SOL / POH / HIGH-SPEED</span>
                        </div>
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed mb-8 min-h-[60px]">
                        Built for mass adoption, Solana is a high-performance blockchain capable of supporting thousands of transactions per second at low cost.
                    </p>

                    <div className="grid grid-cols-2 gap-4 mt-auto">
                        <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/30">
                            <p className="text-[10px] text-emerald-400 uppercase font-bold mb-1">Purpose</p>
                            <p className="text-xs text-white">High Velocity</p>
                        </div>
                        <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/30">
                            <p className="text-[10px] text-emerald-400 uppercase font-bold mb-1">Quality</p>
                            <p className="text-xs text-white">Enterprise Scale</p>
                        </div>
                        <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/30">
                            <p className="text-[10px] text-emerald-400 uppercase font-bold mb-1">Risk</p>
                            <p className="text-xs text-white">High Beta</p>
                        </div>
                        <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/30">
                            <p className="text-[10px] text-emerald-400 uppercase font-bold mb-1">Supply</p>
                            <p className="text-xs text-white">Inflationary</p>
                        </div>
                        <div className="col-span-2 bg-slate-900/50 p-4 rounded-xl border border-slate-700/30">
                            <p className="text-[10px] text-emerald-400 uppercase font-bold mb-1">Process</p>
                            <p className="text-xs text-slate-400">Proof of History (PoH) maximizes throughput.</p>
                        </div>
                    </div>
                </div>

                {/* XRP Detail Card */}
                <div id="xrp" className="bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 relative overflow-hidden flex flex-col h-full hover:border-slate-300/30 transition-all">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                            <span className="text-2xl font-bold text-white">X</span>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white">XRP</h3>
                            <span className="text-xs font-mono text-slate-500">XRP / CONSENSUS / PAYMENTS</span>
                        </div>
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed mb-8 min-h-[60px]">
                        A digital asset built for payments. It is the native digital asset on the XRP Ledger—an open-source, permissionless and decentralized blockchain.
                    </p>

                    <div className="grid grid-cols-2 gap-4 mt-auto">
                        <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/30">
                            <p className="text-[10px] text-slate-300 uppercase font-bold mb-1">Purpose</p>
                            <p className="text-xs text-white">Settlements</p>
                        </div>
                        <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/30">
                            <p className="text-[10px] text-slate-300 uppercase font-bold mb-1">Quality</p>
                            <p className="text-xs text-white">Utility Focus</p>
                        </div>
                        <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/30">
                            <p className="text-[10px] text-slate-300 uppercase font-bold mb-1">Risk</p>
                            <p className="text-xs text-white">Regulatory</p>
                        </div>
                        <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/30">
                            <p className="text-[10px] text-slate-300 uppercase font-bold mb-1">Supply</p>
                            <p className="text-xs text-white">100 Billion</p>
                        </div>
                        <div className="col-span-2 bg-slate-900/50 p-4 rounded-xl border border-slate-700/30">
                            <p className="text-[10px] text-slate-300 uppercase font-bold mb-1">Process</p>
                            <p className="text-xs text-slate-400">Ledger Consensus Protocol (Fast & Cheap).</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
