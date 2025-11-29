import { useEffect, useState } from 'react';
import { getSymbolInfo } from '../lib/symbols';
import { FactCheckResult as FactCheckResultType } from '../lib/gemini';
import { Scroll } from 'lucide-react';

interface FactCheckResultProps {
  result: FactCheckResultType;
}

export default function FactCheckResult({ result }: FactCheckResultProps) {
  const [revealed, setRevealed] = useState(false);
  const symbolInfo = getSymbolInfo(result.symbol);
  const Icon = symbolInfo.icon;

  useEffect(() => {
    const timer = setTimeout(() => setRevealed(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-6">
      <div
        className={`brass-frame rounded-2xl transition-all duration-700 ${
          revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="bg-mahogany-800 p-8 rounded-xl engraved-pattern">
          <div className="text-center mb-8">
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-gold-500/20 rounded-full blur-2xl animate-pulse-glow"></div>
              <div className="relative brass-frame rounded-full p-1">
                <div className="bg-mahogany-900 rounded-full p-8 border-4 border-mahogany-700">
                  <Icon className={`${symbolInfo.color} glow-pulse`} size={80} strokeWidth={1.5} />
                </div>
              </div>
            </div>

            <h2 className="text-4xl font-ornate font-bold text-gold-400 text-shadow-gold mb-3 tracking-wide">
              {symbolInfo.name}
            </h2>
            <p className="text-brass-300 italic font-serif text-lg max-w-xl mx-auto leading-relaxed">
              {symbolInfo.description}
            </p>
          </div>

          <div className="space-y-6 border-t-2 border-brass-700 pt-8">
            <div className="brass-frame rounded-lg">
              <div className="bg-mahogany-900/80 p-6 rounded-sm">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-0.5 bg-brass-gradient"></div>
                  <h3 className="text-xl font-serif font-semibold text-gold-400">The Verdict</h3>
                  <div className="flex-1 h-0.5 bg-brass-gradient"></div>
                </div>
                <p className="text-brass-200 leading-relaxed font-serif text-lg">{result.verdict}</p>
              </div>
            </div>

            <div className="brass-frame rounded-lg">
              <div className="bg-mahogany-900/80 p-6 rounded-sm">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-0.5 bg-brass-gradient"></div>
                  <h3 className="text-xl font-serif font-semibold text-gold-400">The Revealing</h3>
                  <div className="flex-1 h-0.5 bg-brass-gradient"></div>
                </div>
                <p className="text-brass-200 leading-relaxed whitespace-pre-line">
                  {result.explanation}
                </p>
              </div>
            </div>

            {result.confidence !== undefined && (
              <div className="brass-frame rounded-lg">
                <div className="bg-mahogany-900/80 p-6 rounded-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-0.5 bg-brass-gradient"></div>
                    <h3 className="text-xl font-serif font-semibold text-gold-400">Certainty</h3>
                    <div className="flex-1 h-0.5 bg-brass-gradient"></div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex-1 brass-frame rounded-full overflow-hidden h-4">
                      <div className="bg-mahogany-950 h-full relative overflow-hidden">
                        <div
                          className="bg-gold-gradient h-full transition-all duration-1000 shadow-gold-glow"
                          style={{ width: `${result.confidence}%` }}
                        />
                      </div>
                    </div>
                    <span className="text-gold-400 font-serif font-bold text-xl min-w-[4rem] text-right">
                      {result.confidence}%
                    </span>
                  </div>
                </div>
              </div>
            )}

            {result.sources && result.sources.length > 0 && (
              <div className="brass-frame rounded-lg">
                <div className="bg-mahogany-900/80 p-6 rounded-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-0.5 bg-brass-gradient"></div>
                    <h3 className="text-xl font-serif font-semibold text-gold-400">Ancient Wisdom</h3>
                    <div className="flex-1 h-0.5 bg-brass-gradient"></div>
                  </div>
                  <ul className="space-y-3">
                    {result.sources.map((source, index) => (
                      <li key={index} className="flex items-start gap-3 text-brass-200 group">
                        <Scroll size={18} className="mt-1 flex-shrink-0 text-brass-500 group-hover:text-gold-400 transition-colors" strokeWidth={1.5} />
                        <span className="leading-relaxed">{source}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
