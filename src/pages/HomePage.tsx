import { useState } from 'react';
import ImageUpload from '../components/ImageUpload';
import FactCheckResult from '../components/FactCheckResult';
import { analyzeImageWithGemini, FactCheckResult as FactCheckResultType } from '../lib/gemini';
import { Loader2, Eye, AlertCircle, Settings } from 'lucide-react';

export default function HomePage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<FactCheckResultType | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleImageSelect = (file: File) => {
    setSelectedFile(file);
    setResult(null);
    setError(null);
  };

  const handleAnalyze = async () => {
    if (!selectedFile) return;

    setAnalyzing(true);
    setError(null);

    try {
      const result = await analyzeImageWithGemini(selectedFile);
      setResult(result);
    } catch (err: any) {
      setError(err.message || 'Failed to analyze image');
    } finally {
      setAnalyzing(false);
    }
  };

  const handleReset = () => {
    setSelectedFile(null);
    setResult(null);
    setError(null);
  };

  return (
    <div className="space-y-8">
      <div className="text-center relative">
        <div className="brass-frame rounded-xl mb-6 inline-block">
          <div className="bg-mahogany-800 px-12 py-6 rounded-lg engraved-pattern">
            <div className="flex items-center justify-center gap-4 mb-2">
              <Eye className="text-gold-400" size={40} strokeWidth={1.5} />
              <h1 className="text-5xl font-ornate font-bold text-gold-400 text-shadow-gold tracking-wider">
                Seek the Truth
              </h1>
            </div>
            <p className="text-brass-300 font-serif italic text-lg">
              Present your inquiry to the Alethiometer
            </p>
          </div>
        </div>
        <p className="text-brass-400 max-w-2xl mx-auto leading-relaxed">
          Upload an image of claims, headlines, or statements. The ancient instrument will divine the truth hidden within,
          revealing what lies beneath the surface through its mystical symbols.
        </p>
      </div>

      {error && (
        <div className="brass-frame rounded-lg">
          <div className="bg-red-900/30 border-2 border-red-600/50 text-red-300 rounded-sm p-5 flex items-start gap-3">
            <AlertCircle size={24} className="flex-shrink-0 mt-0.5 text-red-500" />
            <div>
              <p className="font-serif font-semibold mb-1">The Oracle Cannot Proceed</p>
              <p className="text-sm">{error}</p>
            </div>
          </div>
        </div>
      )}

      {!result ? (
        <div className="space-y-6">
          <ImageUpload onImageSelect={handleImageSelect} disabled={analyzing} />

          {selectedFile && !analyzing && (
            <button
              onClick={handleAnalyze}
              className="w-full brass-frame rounded-xl group hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="bg-gold-gradient py-5 rounded-lg shadow-gold-glow">
                <div className="flex items-center justify-center gap-3">
                  <Settings className="text-mahogany-900 group-hover:rotate-90 transition-transform duration-500" size={24} />
                  <span className="text-mahogany-900 font-serif font-bold text-xl tracking-wide">
                    Consult the Alethiometer
                  </span>
                </div>
              </div>
            </button>
          )}

          {analyzing && (
            <div className="brass-frame rounded-xl">
              <div className="bg-mahogany-800 p-12 rounded-lg text-center">
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-gold-500/30 rounded-full blur-2xl animate-pulse-glow"></div>
                  <Loader2 className="animate-spin text-gold-400 relative z-10" size={64} strokeWidth={1.5} />
                </div>
                <p className="text-gold-300 font-serif text-2xl mb-3">
                  The Needles Turn...
                </p>
                <p className="text-brass-400 italic">
                  The ancient mechanism aligns its symbols to reveal the truth
                </p>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-6">
          <FactCheckResult result={result} />

          <button
            onClick={handleReset}
            className="w-full brass-frame rounded-lg hover:scale-[1.01] transition-transform"
          >
            <div className="bg-mahogany-700 hover:bg-mahogany-600 py-4 rounded-sm transition-colors">
              <span className="text-brass-200 font-serif font-medium text-lg tracking-wide">
                Seek Another Truth
              </span>
            </div>
          </button>
        </div>
      )}
    </div>
  );
}
