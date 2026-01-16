import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TheAd - Smart Financial Solutions",
  description: "Secure investments, instant processing, and expert guidance to grow your wealth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-slate-900`}
      >
        {/* Header Box - Professional Dark Theme */}
        <header className="bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50 px-8 py-4 flex items-center justify-between sticky top-0 z-50">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-3xl md:text-4xl font-bold tracking-wide">
              TheAd
            </h1>
          </Link>
          <nav className="flex items-center gap-4 md:gap-6">
            <Link href="/" className="text-slate-300 hover:text-cyan-400 transition-colors font-medium">Home</Link>

            {/* Banks Dropdown */}
            <div className="relative group">
              <Link href="/banks" className="text-slate-300 group-hover:text-cyan-400 transition-colors font-medium flex items-center gap-1">
                Banks
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <div className="absolute top-full -left-4 mt-2 w-48 bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2 flex flex-col p-1 z-50">
                <Link href="/banks#jpmorgan" className="block text-left px-4 py-3 hover:bg-slate-800/50 text-slate-300 hover:text-cyan-400 rounded-lg transition-colors text-sm">JPMorgan Chase</Link>
                <Link href="/banks#boa" className="block text-left px-4 py-3 hover:bg-slate-800/50 text-slate-300 hover:text-cyan-400 rounded-lg transition-colors text-sm">Bank of America</Link>
                <Link href="/banks#wellsfargo" className="block text-left px-4 py-3 hover:bg-slate-800/50 text-slate-300 hover:text-cyan-400 rounded-lg transition-colors text-sm">Wells Fargo</Link>
                <Link href="/banks#citi" className="block text-left px-4 py-3 hover:bg-slate-800/50 text-slate-300 hover:text-cyan-400 rounded-lg transition-colors text-sm">Citigroup</Link>
              </div>
            </div>

            {/* Investments Dropdown */}
            <div className="relative group">
              <Link href="/investments" className="text-slate-300 group-hover:text-cyan-400 transition-colors font-medium flex items-center gap-1">
                Investments
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <div className="absolute top-full -left-4 mt-2 w-48 bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2 flex flex-col p-1 z-50">
                <Link href="/investments#vanguard" className="block text-left px-4 py-3 hover:bg-slate-800/50 text-slate-300 hover:text-cyan-400 rounded-lg transition-colors text-sm">Vanguard</Link>
                <Link href="/investments#blackrock" className="block text-left px-4 py-3 hover:bg-slate-800/50 text-slate-300 hover:text-cyan-400 rounded-lg transition-colors text-sm">BlackRock</Link>
                <Link href="/investments#fidelity" className="block text-left px-4 py-3 hover:bg-slate-800/50 text-slate-300 hover:text-cyan-400 rounded-lg transition-colors text-sm">Fidelity</Link>
                <Link href="/investments#morganstanley" className="block text-left px-4 py-3 hover:bg-slate-800/50 text-slate-300 hover:text-cyan-400 rounded-lg transition-colors text-sm">Morgan Stanley</Link>
              </div>
            </div>

            {/* Crypto Dropdown */}
            <div className="relative group">
              <Link href="/crypto" className="text-slate-300 group-hover:text-cyan-400 transition-colors font-medium flex items-center gap-1">
                Crypto
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <div className="absolute top-full -left-4 mt-2 w-48 bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2 flex flex-col p-1 z-50">
                <Link href="/crypto#bitcoin" className="block text-left px-4 py-3 hover:bg-slate-800/50 text-slate-300 hover:text-cyan-400 rounded-lg transition-colors text-sm">Bitcoin (BTC)</Link>
                <Link href="/crypto#ethereum" className="block text-left px-4 py-3 hover:bg-slate-800/50 text-slate-300 hover:text-cyan-400 rounded-lg transition-colors text-sm">Ethereum (ETH)</Link>
                <Link href="/crypto#solana" className="block text-left px-4 py-3 hover:bg-slate-800/50 text-slate-300 hover:text-cyan-400 rounded-lg transition-colors text-sm">Solana (SOL)</Link>
                <Link href="/crypto#bnb" className="block text-left px-4 py-3 hover:bg-slate-800/50 text-slate-300 hover:text-cyan-400 rounded-lg transition-colors text-sm">Binance Coin</Link>
              </div>
            </div>

            {/* Exchange Dropdown */}
            <div className="relative group">
              <Link href="/exchange" className="text-slate-300 group-hover:text-cyan-400 transition-colors font-medium flex items-center gap-1">
                Exchange
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <div className="absolute top-full -left-4 mt-2 w-48 bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2 flex flex-col p-1 z-50">
                <Link href="/exchange#EUR/USD" className="block text-left px-4 py-3 hover:bg-slate-800/50 text-slate-300 hover:text-cyan-400 rounded-lg transition-colors text-sm">Euro (EUR/USD)</Link>
                <Link href="/exchange#GBP/USD" className="block text-left px-4 py-3 hover:bg-slate-800/50 text-slate-300 hover:text-cyan-400 rounded-lg transition-colors text-sm">British Pound (GBP/USD)</Link>
                <Link href="/exchange#USD/JPY" className="block text-left px-4 py-3 hover:bg-slate-800/50 text-slate-300 hover:text-cyan-400 rounded-lg transition-colors text-sm">Japanese Yen (USD/JPY)</Link>
                <Link href="/exchange#USD/CAD" className="block text-left px-4 py-3 hover:bg-slate-800/50 text-slate-300 hover:text-cyan-400 rounded-lg transition-colors text-sm">Canadian Dollar (USD/CAD)</Link>
              </div>
            </div>
          </nav>
        </header>

        {children}

        {/* Contact Section with Building Background and Parallax */}
        <div
          className="relative py-24 bg-fixed bg-center bg-cover"
          style={{ backgroundImage: "url('/modern-buildings-against-sky.jpg')" }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-slate-900/85"></div>

          <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-16">
            {/* Logo/Title */}
            <div className="text-center mb-12">
              <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-4xl md:text-5xl font-bold tracking-wide mb-4">
                TheAd
              </h2>
              <p className="text-slate-400 text-lg">Your trusted partner in financial growth</p>
            </div>

            {/* Contact Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Address */}
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">Visit Us</h3>
                <p className="text-slate-400">123 Financial District<br />New York, NY 10004</p>
              </div>

              {/* Phone */}
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-green-500/20 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">Call Us</h3>
                <p className="text-slate-400">+1 (800) 123-4567<br />Mon-Fri 9am-6pm EST</p>
              </div>

              {/* Email */}
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-purple-500/20 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">Email Us</h3>
                <p className="text-slate-400">info@thead.com<br />support@thead.com</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="text-center">
              <p className="text-slate-400 mb-4">Follow us on social media</p>
              <div className="flex justify-center gap-4">
                {/* Facebook */}
                <a href="#" className="w-12 h-12 bg-slate-800 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                {/* Twitter/X */}
                <a href="#" className="w-12 h-12 bg-slate-800 hover:bg-sky-500 rounded-xl flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a href="#" className="w-12 h-12 bg-slate-800 hover:bg-blue-700 rounded-xl flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a href="#" className="w-12 h-12 bg-slate-800 hover:bg-pink-600 rounded-xl flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-slate-950 py-8 px-4 md:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-500 text-sm">
                © 2024 TheAd. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-slate-500 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-slate-500 hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="text-slate-500 hover:text-white transition-colors">Cookies</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
