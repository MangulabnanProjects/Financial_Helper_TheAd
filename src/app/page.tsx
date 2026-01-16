export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">

      {/* Top Section - Image Background */}

      {/* Top Section - Image Background with Parallax */}
      <div
        className="relative pb-40 pt-20 overflow-hidden flex flex-col justify-center items-center min-h-[850px] bg-fixed bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/businessman-analyzing-financial-data-computer.jpg')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-slate-900/60"></div>

        {/* Bottom Fade Gradient */}
        <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>

        {/* Hero Section - Centered */}
        <section className="relative text-center px-4 max-w-7xl mx-auto w-full z-10">
          <p className="text-cyan-400 text-sm md:text-base font-semibold tracking-widest uppercase mb-4 animate-fade-in-up">Trusted by 10M+ Users Worldwide</p>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">Smart Financial</span>
            <br />
            <span>Solutions for You</span>
          </h2>
          <p className="text-slate-200 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light">Secure investments, instant processing, and expert guidance to grow your wealth</p>
        </section>
      </div>

      {/* Feature Cards Container - Floating over the gradient */}
      <div className="mx-4 md:mx-16 -mt-40 relative z-10 pb-16">
        <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-3xl shadow-2xl p-8 md:p-12 overflow-hidden relative">
          {/* Decorative background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-3xl bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="relative z-10">
            <h2 className="text-center text-3xl font-bold text-white mb-4">Powerful Tools Suite</h2>
            <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
              Everything you need to build, analyze, and schedule your financial success in one platform
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Card 1 - Ad Builder / Portfolio Builder */}
              <div className="group bg-slate-800 rounded-2xl border border-slate-700/50 overflow-hidden hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300">
                <div className="p-6 border-b border-slate-700/50">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-white">Portfolio Builder</h3>
                    <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
                    </div>
                  </div>

                  {/* UI Mockup */}
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <div className="w-1/3 space-y-2">
                        <div className="h-2 bg-slate-700 rounded w-full"></div>
                        <div className="h-2 bg-slate-700 rounded w-2/3"></div>
                        <div className="h-16 bg-slate-700/50 rounded-lg border border-slate-600/30"></div>
                      </div>
                      <div className="w-2/3 bg-slate-700/30 rounded-lg p-3 border border-slate-600/30 flex flex-col justify-center items-center">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 mb-2 shadow-lg"></div>
                        <div className="h-2 bg-slate-600 rounded w-16 mb-1"></div>
                        <div className="h-1.5 bg-slate-700 rounded w-10"></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-xs text-slate-500">Asset Allocation</span>
                      <div className="h-1.5 w-16 bg-cyan-500/30 rounded-full overflow-hidden">
                        <div className="h-full w-2/3 bg-cyan-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-slate-800/50">
                  <p className="text-slate-400 text-sm">Visualize and customize your diverse investment portfolio with drag-and-drop ease.</p>
                </div>
              </div>

              {/* Card 2 - Audience Analytics / Market Analysis */}
              <div className="group bg-slate-800 rounded-2xl border border-slate-700/50 overflow-hidden hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300">
                <div className="p-6 border-b border-slate-700/50">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-white">Market Analysis</h3>
                    <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                    </div>
                  </div>

                  {/* UI Mockup - Graph */}
                  <div className="relative h-28 w-full flex items-end justify-between gap-1 px-1">
                    {/* Graph bars */}
                    <div className="w-1/6 h-[30%] bg-slate-700 rounded-t"></div>
                    <div className="w-1/6 h-[45%] bg-slate-700 rounded-t"></div>
                    <div className="w-1/6 h-[40%] bg-slate-700 rounded-t"></div>
                    <div className="w-1/6 h-[60%] bg-emerald-500/30 rounded-t"></div>
                    <div className="w-1/6 h-[75%] bg-emerald-500/60 rounded-t"></div>
                    <div className="w-1/6 h-[90%] bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.3)] rounded-t"></div>

                    {/* Trend line overlay (simulated with SVG) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
                      <path d="M0 80 C 20 70, 40 75, 60 60 S 100 20, 180 10" fill="none" stroke="#34d399" strokeWidth="2" strokeOpacity="0.5" />
                    </svg>
                  </div>
                </div>
                <div className="p-4 bg-slate-800/50 flex justify-between items-center">
                  <p className="text-slate-400 text-sm">Real-time data tracking</p>
                  <span className="text-emerald-400 text-xs font-bold px-2 py-1 bg-emerald-500/10 rounded">+24.5% Growth</span>
                </div>
              </div>

              {/* Card 3 - Campaign Scheduler / Smart Scheduler */}
              <div className="group bg-slate-800 rounded-2xl border border-slate-700/50 overflow-hidden hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                <div className="p-6 border-b border-slate-700/50">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-white">Smart Scheduler</h3>
                    <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    </div>
                  </div>

                  {/* UI Mockup - Calendar */}
                  <div className="bg-slate-700/30 rounded-lg p-3">
                    <div className="flex justify-between text-xs text-slate-400 mb-2">
                      <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span>
                    </div>
                    <div className="grid grid-cols-5 gap-2">
                      <div className="aspect-square rounded bg-slate-700/30"></div>
                      <div className="aspect-square rounded bg-slate-700/30"></div>
                      <div className="aspect-square rounded bg-purple-500/20 border border-purple-500/50 relative">
                        <div className="absolute top-0.5 right-0.5 w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                      </div>
                      <div className="aspect-square rounded bg-slate-700/30"></div>
                      <div className="aspect-square rounded bg-slate-700/50"></div>
                      <div className="aspect-square rounded bg-slate-700/30"></div>
                      <div className="aspect-square rounded bg-slate-700/30"></div>
                      <div className="aspect-square rounded bg-slate-700/30"></div>
                      <div className="aspect-square rounded bg-purple-500/20 border border-purple-500/50 flex items-center justify-center">
                        <span className="text-[10px] text-purple-300">Pay</span>
                      </div>
                      <div className="aspect-square rounded bg-slate-700/30"></div>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-slate-800/50">
                  <p className="text-slate-400 text-sm">Automate recurring payments and visualize your financial timeline.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Quote Section */}
      {/* Professional Quote Section - Transparent */}
      <div className="mt-12 pb-16">
        <div className="py-16 md:py-20 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              HOW <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 italic">SMART</span> IS YOUR MONEY?
            </h2>
            <div className="space-y-4">
              <p className="text-lg md:text-xl text-slate-400">
                The smartest financial solutions in the industry designed for you.
              </p>
              <p className="text-lg md:text-xl text-slate-300 font-medium">
                Turn your savings and investments into <span className="text-cyan-400 font-bold">#SmartWealth</span> growing up to 12% annually.
              </p>
              <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto">
                A totally secure and reliable platform capable of covering all your financial needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Floating Box - Details Section */}
      {/* Our Services - Minimalist Design */}
      {/* Our Services - Floating Box */}
      <div className="mx-4 md:mx-16 pb-24">
        <div className="bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Comprehensive financial solutions tailored for individuals and businesses alike
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Detail 1 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/20">
                <span className="text-3xl">💼</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Investment Planning</h3>
              <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                Strategic investment solutions designed to maximize your returns while minimizing risks. Our expert advisors guide you through every step of your journey.
              </p>
            </div>

            {/* Detail 2 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-emerald-500/20">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Wealth Management</h3>
              <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                Comprehensive wealth management services to grow and protect your assets. We create personalized strategies aligned with your long-term financial goals.
              </p>
            </div>

            {/* Detail 3 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/20">
                <span className="text-3xl">🏦</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Banking Solutions</h3>
              <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                Modern banking solutions with competitive rates and seamless digital experience. Access your money anytime, anywhere with full security and ease.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Investment Growth Graph Section */}
      <div className="mx-4 md:mx-16 pb-16">
        <div className="bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl shadow-2xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
            Investment Growth Calculator
          </h2>
          <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
            See how your money grows over time with compound interest
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Graph */}
            <div className="bg-slate-700/50 rounded-2xl p-6 border border-slate-600/30">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-white">Growth Over 10 Years</h3>
                <div className="flex gap-4 text-sm text-slate-400">
                  <span className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
                    With Interest
                  </span>
                  <span className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-slate-500"></div>
                    Without Interest
                  </span>
                </div>
              </div>

              {/* Bar Graph */}
              <div className="flex items-end justify-between gap-2 h-64 px-4 border-b border-l border-slate-500/50">
                {[
                  { year: "Y1", withInterest: 20, without: 18 },
                  { year: "Y2", withInterest: 28, without: 20 },
                  { year: "Y3", withInterest: 38, without: 22 },
                  { year: "Y4", withInterest: 48, without: 24 },
                  { year: "Y5", withInterest: 60, without: 26 },
                  { year: "Y6", withInterest: 72, without: 28 },
                  { year: "Y7", withInterest: 82, without: 30 },
                  { year: "Y8", withInterest: 90, without: 32 },
                  { year: "Y9", withInterest: 95, without: 34 },
                  { year: "Y10", withInterest: 100, without: 36 },
                ].map((data, i) => (
                  <div key={i} className="flex flex-col items-center gap-1 flex-1">
                    <div className="flex gap-1 items-end w-full justify-center">
                      <div
                        className="w-3 md:w-4 bg-gradient-to-t from-cyan-600 to-cyan-400 rounded-t transition-all shadow-lg shadow-cyan-500/20"
                        style={{ height: `${data.withInterest * 2.2}px` }}
                      ></div>
                      <div
                        className="w-3 md:w-4 bg-slate-500 rounded-t transition-all"
                        style={{ height: `${data.without * 2.2}px` }}
                      ></div>
                    </div>
                    <span className="text-xs text-slate-400 mt-2">{data.year}</span>
                  </div>
                ))}
              </div>

              {/* Y-axis labels */}
              <div className="flex justify-between mt-4 text-xs text-slate-500">
                <span>$10,000</span>
                <span>$50,000</span>
                <span>$100,000</span>
              </div>
            </div>

            {/* Investment Details */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-6 text-white shadow-lg shadow-cyan-500/20">
                <h3 className="text-lg font-medium mb-2">Expected Returns</h3>
                <p className="text-4xl font-bold mb-1">$127,500</p>
                <p className="text-cyan-100 text-sm">After 10 years with 8% annual interest</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-700/50 rounded-xl p-4 border border-slate-600/30">
                  <p className="text-slate-400 text-sm">Initial Investment</p>
                  <p className="text-2xl font-bold text-white">$50,000</p>
                </div>
                <div className="bg-slate-700/50 rounded-xl p-4 border border-slate-600/30">
                  <p className="text-slate-400 text-sm">Interest Rate</p>
                  <p className="text-2xl font-bold text-emerald-400">8.0%</p>
                </div>
                <div className="bg-slate-700/50 rounded-xl p-4 border border-slate-600/30">
                  <p className="text-slate-400 text-sm">Total Interest Earned</p>
                  <p className="text-2xl font-bold text-cyan-400">$77,500</p>
                </div>
                <div className="bg-slate-700/50 rounded-xl p-4 border border-slate-600/30">
                  <p className="text-slate-400 text-sm">Monthly Contribution</p>
                  <p className="text-2xl font-bold text-white">$500</p>
                </div>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all shadow-lg shadow-cyan-500/20">
                  Calculate Now
                </button>
                <button className="flex-1 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold py-3 px-6 rounded-xl transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Processing, Staff & Security Section - Professional Design */}
      {/* Processing, Staff & Security Section - Clean & Professional */}
      {/* Processing, Staff & Security Section - Floating Box */}
      <div className="mx-4 md:mx-16 pb-24">
        <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl shadow-2xl p-10 md:p-16 text-white relative overflow-hidden border border-slate-700/50">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_25%,rgba(255,255,255,0.05)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.05)_75%)] bg-[size:60px_60px]"></div>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-blue-500/10 text-blue-400 text-sm font-semibold rounded-full mb-4">TRUSTED WORLDWIDE</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Why Trust Us?
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                Industry-leading security, professional team, and seamless processing. We prioritize your financial safety above all else.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-20">
              {/* Processing */}
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 mb-6 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Fast Processing</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  Lightning-fast transactions processed within seconds. Our advanced infrastructure ensures your money moves instantly when you need it.
                </p>
                <ul className="space-y-3 w-full">
                  <li className="flex items-center gap-3 text-sm text-slate-300 border-b border-slate-800 pb-2">
                    <span className="text-blue-400 font-bold">✓</span> Instant transfers 24/7
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-300 border-b border-slate-800 pb-2">
                    <span className="text-blue-400 font-bold">✓</span> Real-time notifications
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-300 border-b border-slate-800 pb-2">
                    <span className="text-blue-400 font-bold">✓</span> 99.9% uptime guarantee
                  </li>
                </ul>
              </div>

              {/* Staff */}
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 mb-6 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Expert Team</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  Certified financial experts and advisors dedicated to guiding you through your financial journey with personalized strategies.
                </p>
                <ul className="space-y-3 w-full">
                  <li className="flex items-center gap-3 text-sm text-slate-300 border-b border-slate-800 pb-2">
                    <span className="text-purple-400 font-bold">✓</span> 500+ certified advisors
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-300 border-b border-slate-800 pb-2">
                    <span className="text-purple-400 font-bold">✓</span> 24/7 customer support
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-300 border-b border-slate-800 pb-2">
                    <span className="text-purple-400 font-bold">✓</span> Personalized guidance
                  </li>
                </ul>
              </div>

              {/* Security */}
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 mb-6 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Bank-Level Security</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  Military-grade encryption and multi-factor authentication protect your data and assets at all times.
                </p>
                <ul className="space-y-3 w-full">
                  <li className="flex items-center gap-3 text-sm text-slate-300 border-b border-slate-800 pb-2">
                    <span className="text-emerald-400 font-bold">✓</span> 256-bit SSL encryption
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-300 border-b border-slate-800 pb-2">
                    <span className="text-emerald-400 font-bold">✓</span> Two-factor authentication
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-300 border-b border-slate-800 pb-2">
                    <span className="text-emerald-400 font-bold">✓</span> FDIC insured deposits
                  </li>
                </ul>
              </div>
            </div>

            {/* Trust Statistics - Minimal */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-800 pt-16">
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">10M+</p>
                <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">Happy Customers</p>
              </div>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">$50B+</p>
                <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">Assets Managed</p>
              </div>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">15+</p>
                <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">50+</p>
                <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">Countries Served</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Benefits Section */}
      <div className="py-16 px-4 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-cyan-500/20 text-cyan-400 text-sm font-semibold rounded-full mb-4">BENEFITS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose TheAd?
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Discover the advantages that make us the preferred choice for financial services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Benefit 1 */}
            <div className="text-center p-6">
              <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">No Hidden Fees</h3>
              <p className="text-slate-400 text-sm">Transparent pricing with zero surprise charges</p>
            </div>

            {/* Benefit 2 */}
            <div className="text-center p-6">
              <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">High Returns</h3>
              <p className="text-slate-400 text-sm">Industry-leading interest rates up to 12% annually</p>
            </div>

            {/* Benefit 3 */}
            <div className="text-center p-6">
              <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Secure Platform</h3>
              <p className="text-slate-400 text-sm">Bank-level security for all transactions</p>
            </div>

            {/* Benefit 4 */}
            <div className="text-center p-6">
              <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Quick Access</h3>
              <p className="text-slate-400 text-sm">Withdraw your funds anytime, anywhere</p>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Service Section - Image + Text Layout */}
      <div className="pb-16 px-4 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="flex justify-center">
              <div className="relative">
                {/* Circular border decoration */}
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-cyan-500/30 flex items-center justify-center">
                  <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center overflow-hidden">
                    {/* Placeholder for person image */}
                    <div className="text-center">
                      <svg className="w-24 h-24 text-slate-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <p className="text-slate-500 text-sm mt-2">Support Agent</p>
                    </div>
                  </div>
                </div>
                {/* Decorative dots */}
                <div className="absolute top-0 right-0 w-4 h-4 bg-cyan-400 rounded-full"></div>
                <div className="absolute bottom-8 right-4 w-3 h-3 bg-blue-400 rounded-full"></div>
              </div>
            </div>

            {/* Text Side */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                and the secret formula for phenomenal service...
              </h2>

              <div className="space-y-8">
                {/* Service Point 1 */}
                <div>
                  <h3 className="text-xl font-bold text-cyan-400 mb-2">The best Customer Service!</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Fully available to guide you, clarify your doubts, recommend the best and accompany you in each process with us.
                  </p>
                </div>

                {/* Service Point 2 */}
                <div>
                  <h3 className="text-xl font-bold text-cyan-400 mb-2">5 Star Technical Support A real Team</h3>
                  <p className="text-slate-400 leading-relaxed">
                    – no bots, ready to serve you immediately every day and experts so that your service always works for everything what you need.
                  </p>
                </div>

                {/* Service Point 3 */}
                <div>
                  <h3 className="text-xl font-bold text-cyan-400 mb-2">24/7 Availability</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Our team is available around the clock to assist you with any questions or concerns, ensuring you never feel left behind.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
