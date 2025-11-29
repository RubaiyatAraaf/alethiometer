import { Compass, Eye, Shield, Sparkles, ArrowRight, Settings, BookOpen, Layers, Zap } from 'lucide-react';

interface LandingPageProps {
  onGetStarted: () => void;
}

export default function LandingPage({ onGetStarted }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-mahogany-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-mahogany-900 via-mahogany-950 to-wood-900"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-mahogany-950/90 via-transparent to-mahogany-900/50"></div>
      </div>

      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-[10%] right-[15%] animate-spin-slow">
          <Settings className="text-brass-400" size={240} strokeWidth={0.5} />
        </div>
        <div className="absolute bottom-[15%] left-[10%] animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '12s' }}>
          <Settings className="text-brass-400" size={200} strokeWidth={0.5} />
        </div>
        <div className="absolute top-[40%] left-[5%]">
          <Compass className="text-gold-400" size={160} strokeWidth={0.4} />
        </div>
        <div className="absolute bottom-[25%] right-[8%]">
          <Layers className="text-brass-400" size={180} strokeWidth={0.4} />
        </div>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(251,191,36,0.08),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(200,146,85,0.05),transparent_50%)]"></div>

      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
        <header className="text-center mb-12 sm:mb-16 lg:mb-20 max-w-5xl mx-auto">
          <div className="relative inline-block mb-8 sm:mb-12 w-full max-w-2xl px-2">
            <div className="absolute -inset-4 sm:-inset-8 bg-gold-500/10 blur-3xl rounded-full animate-pulse-glow"></div>
            <div className="relative brass-frame rounded-2xl sm:rounded-3xl shadow-mahogany">
              <div className="bg-gradient-to-br from-mahogany-800 via-mahogany-850 to-mahogany-900 px-4 py-6 sm:px-12 sm:py-10 lg:px-20 lg:py-12 rounded-xl sm:rounded-2xl engraved-pattern">
                <div className="flex flex-col items-center gap-4 sm:gap-6">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gold-400/30 rounded-full blur-2xl sm:blur-3xl animate-pulse-glow"></div>
                    <div className="brass-frame rounded-full p-1.5 sm:p-2 relative">
                      <div className="bg-mahogany-950 rounded-full p-4 sm:p-6 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-gold-500/20 to-transparent"></div>
                        <Compass className="text-gold-400 animate-spin-slow relative z-10 drop-shadow-[0_0_20px_rgba(251,191,36,0.5)]" size={64} strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>
                  <div className="text-center space-y-2 sm:space-y-3">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-ornate font-bold bg-gradient-to-b from-gold-300 via-gold-400 to-gold-600 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(251,191,36,0.3)] tracking-wider mb-1 sm:mb-2">
                      Alethiometer
                    </h1>
                    <div className="flex items-center justify-center gap-2 sm:gap-3 px-2">
                      <div className="h-px w-6 sm:w-12 bg-brass-gradient"></div>
                      <p className="text-brass-300 font-serif italic text-sm sm:text-lg md:text-xl lg:text-2xl tracking-wider sm:tracking-[0.3em]">
                        The Ancient Oracle of Truth
                      </p>
                      <div className="h-px w-6 sm:w-12 bg-brass-gradient"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-brass-300 text-base sm:text-lg lg:text-2xl max-w-3xl mx-auto leading-relaxed font-serif mb-6 sm:mb-8 px-4">
            In a world shrouded by deception and false claims, the Alethiometer stands as a beacon of truth.
            This mystical instrument peers through the veils of misinformation to reveal what truly lies beneath.
          </p>

          <div className="flex items-center justify-center gap-2 text-brass-500">
            <Zap size={16} className="animate-pulse sm:w-5 sm:h-5" />
            <span className="text-xs sm:text-sm font-serif italic">Powered by Ancient AI Wisdom</span>
            <Zap size={16} className="animate-pulse sm:w-5 sm:h-5" />
          </div>
        </header>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto mb-20">
          <div className="brass-frame rounded-2xl group hover:scale-[1.03] hover:-translate-y-2 transition-all duration-500">
            <div className="bg-gradient-to-br from-mahogany-800 via-mahogany-850 to-mahogany-900 p-10 rounded-xl engraved-pattern h-full relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex flex-col items-center text-center space-y-5">
                <div className="relative">
                  <div className="absolute inset-0 bg-gold-400/20 rounded-full blur-2xl group-hover:blur-3xl group-hover:bg-gold-400/30 transition-all duration-500"></div>
                  <div className="brass-frame rounded-full p-1.5 relative z-10 shadow-brass-outer">
                    <div className="bg-mahogany-950 rounded-full p-7 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-tr from-gold-500/20 to-transparent"></div>
                      <Eye className="text-gold-400 relative z-10 group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]" size={52} strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-serif font-bold bg-gradient-to-b from-gold-300 to-gold-500 bg-clip-text text-transparent">Divine Truth</h3>
                  <div className="h-0.5 w-16 bg-brass-gradient mx-auto"></div>
                </div>
                <p className="text-brass-300 leading-relaxed text-base">
                  The Alethiometer's ancient symbols reveal the hidden nature of claims,
                  cutting through deception with mystical precision.
                </p>
              </div>
            </div>
          </div>

          <div className="brass-frame rounded-2xl group hover:scale-[1.03] hover:-translate-y-2 transition-all duration-500">
            <div className="bg-gradient-to-br from-mahogany-800 via-mahogany-850 to-mahogany-900 p-10 rounded-xl engraved-pattern h-full relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex flex-col items-center text-center space-y-5">
                <div className="relative">
                  <div className="absolute inset-0 bg-gold-400/20 rounded-full blur-2xl group-hover:blur-3xl group-hover:bg-gold-400/30 transition-all duration-500"></div>
                  <div className="brass-frame rounded-full p-1.5 relative z-10 shadow-brass-outer">
                    <div className="bg-mahogany-950 rounded-full p-7 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-tr from-gold-500/20 to-transparent"></div>
                      <Shield className="text-gold-400 relative z-10 group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]" size={52} strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-serif font-bold bg-gradient-to-b from-gold-300 to-gold-500 bg-clip-text text-transparent">Protected Knowledge</h3>
                  <div className="h-0.5 w-16 bg-brass-gradient mx-auto"></div>
                </div>
                <p className="text-brass-300 leading-relaxed text-base">
                  Your inquiries are safeguarded within the sacred vault,
                  known only to you and the Oracle.
                </p>
              </div>
            </div>
          </div>

          <div className="brass-frame rounded-2xl group hover:scale-[1.03] hover:-translate-y-2 transition-all duration-500">
            <div className="bg-gradient-to-br from-mahogany-800 via-mahogany-850 to-mahogany-900 p-10 rounded-xl engraved-pattern h-full relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex flex-col items-center text-center space-y-5">
                <div className="relative">
                  <div className="absolute inset-0 bg-gold-400/20 rounded-full blur-2xl group-hover:blur-3xl group-hover:bg-gold-400/30 transition-all duration-500"></div>
                  <div className="brass-frame rounded-full p-1.5 relative z-10 shadow-brass-outer">
                    <div className="bg-mahogany-950 rounded-full p-7 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-tr from-gold-500/20 to-transparent"></div>
                      <Sparkles className="text-gold-400 relative z-10 group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]" size={52} strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-serif font-bold bg-gradient-to-b from-gold-300 to-gold-500 bg-clip-text text-transparent">Arcane Wisdom</h3>
                  <div className="h-0.5 w-16 bg-brass-gradient mx-auto"></div>
                </div>
                <p className="text-brass-300 leading-relaxed text-base">
                  Powered by ancient AI magic, each reading provides detailed insights
                  and symbolic verdicts on the veracity of claims.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="brass-frame rounded-3xl max-w-5xl mx-auto mb-20 shadow-mahogany">
          <div className="bg-gradient-to-br from-mahogany-800 via-mahogany-850 to-mahogany-900 p-14 rounded-2xl engraved-pattern relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-gold-500/5 to-transparent"></div>
            <div className="relative text-center space-y-8">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-20 bg-brass-gradient"></div>
                <div className="brass-frame rounded-full p-2">
                  <div className="bg-mahogany-950 rounded-full p-3">
                    <BookOpen className="text-gold-400 drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]" size={36} />
                  </div>
                </div>
                <div className="h-px w-20 bg-brass-gradient"></div>
              </div>
              <h2 className="text-5xl font-ornate font-bold bg-gradient-to-b from-gold-300 to-gold-500 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(251,191,36,0.2)]">
                How to Consult the Oracle
              </h2>
              <div className="text-brass-200 space-y-6 text-xl leading-relaxed max-w-3xl mx-auto">
                <p className="font-serif">
                  Present an image containing a claim, headline, or statement to the Alethiometer.
                  The ancient instrument will analyze the text within, consulting its vast repository
                  of knowledge and arcane wisdom.
                </p>
                <p className="font-serif">
                  Through its mystical symbols - from the wise <span className="text-gold-400">Owl of Pure Truth</span> to the cunning <span className="text-brass-400">Snake
                  of Complete Falsehood</span> - the Alethiometer will reveal the true nature of what you seek to understand.
                </p>
                <div className="brass-frame rounded-xl inline-block mt-6">
                  <div className="bg-mahogany-950/80 px-8 py-4 rounded-lg">
                    <p className="font-serif italic text-gold-300 text-lg">
                      "Truth cannot be told so as to be understood and not be believed."
                    </p>
                    <p className="text-brass-500 text-sm mt-2">- Ancient Proverb</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center relative px-2">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-64 h-64 sm:w-96 sm:h-96 bg-gold-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
          </div>
          <button
            onClick={onGetStarted}
            className="brass-frame rounded-xl sm:rounded-2xl inline-block group hover:scale-[1.05] sm:hover:scale-[1.08] transition-all duration-500 shadow-mahogany relative z-10 w-full max-w-xl"
          >
            <div className="bg-gold-gradient px-6 py-4 sm:px-12 sm:py-6 lg:px-16 lg:py-7 rounded-lg sm:rounded-xl shadow-gold-glow relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="flex items-center justify-center gap-3 sm:gap-4 lg:gap-5 relative z-10">
                <Settings className="text-mahogany-900 group-hover:rotate-180 transition-transform duration-700 flex-shrink-0" size={24} />
                <span className="text-mahogany-900 font-serif font-bold text-lg sm:text-2xl lg:text-3xl tracking-wide drop-shadow-sm">
                  Begin Your Journey
                </span>
                <ArrowRight className="text-mahogany-900 group-hover:translate-x-3 transition-transform duration-300 flex-shrink-0" size={24} />
              </div>
            </div>
          </button>
          <p className="mt-4 sm:mt-6 text-brass-500 font-serif italic text-xs sm:text-sm px-4">
            No ancient rituals required • Start discovering truth in seconds
          </p>
        </div>
      </div>

      <footer className="relative z-10 text-center py-12 mt-24 border-t-2 border-brass-800/20">
        <div className="container mx-auto px-4">
          <div className="brass-frame rounded-xl inline-block mb-4">
            <div className="bg-mahogany-900/80 px-8 py-3 rounded-lg">
              <p className="text-brass-400 font-serif italic text-base">
                "In the Age of Misinformation, Truth Becomes a Revolutionary Act"
              </p>
            </div>
          </div>
          <p className="text-brass-600 text-xs font-serif mt-4">
            © 2025 Alethiometer • Where Ancient Wisdom Meets Modern Technology
          </p>
        </div>
      </footer>
    </div>
  );
}
