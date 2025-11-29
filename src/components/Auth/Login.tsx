import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Eye, EyeOff } from 'lucide-react';

interface LoginProps {
  onToggleView: (view: 'login' | 'register' | 'reset') => void;
}

export default function Login({ onToggleView }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(email, password);
    } catch (err: any) {
      setError(err.message || 'Failed to log in');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-md">
      <div className="brass-frame rounded-2xl shadow-mahogany">
        <div className="bg-mahogany-800 p-8 rounded-xl engraved-pattern">
          <h2 className="text-3xl font-ornate font-bold text-center mb-2 text-gold-400 text-shadow-gold">
            Enter, Seeker
          </h2>
          <p className="text-center text-brass-400 mb-8 font-serif italic">
            Present your credentials to consult the Oracle
          </p>

          {error && (
            <div className="brass-frame rounded-lg mb-4">
              <div className="bg-red-900/30 border-2 border-red-600/50 text-red-300 rounded-sm p-3 text-sm font-serif">
                {error}
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-serif font-medium text-brass-300 mb-2">
                Your Inscription
              </label>
              <div className="brass-frame rounded-lg">
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-mahogany-950 border-none rounded-sm text-brass-100 placeholder-brass-700 focus:outline-none focus:ring-2 focus:ring-gold-500 transition"
                  placeholder="seeker@truth.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-serif font-medium text-brass-300 mb-2">
                Secret Cipher
              </label>
              <div className="brass-frame rounded-lg">
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-mahogany-950 border-none rounded-sm text-brass-100 placeholder-brass-700 focus:outline-none focus:ring-2 focus:ring-gold-500 transition pr-12"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-brass-500 hover:text-gold-400 transition"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onToggleView('reset')}
              className="text-sm text-brass-400 hover:text-gold-400 transition font-serif italic"
            >
              Lost your cipher?
            </button>

            <button
              type="submit"
              disabled={loading}
              className="w-full brass-frame rounded-lg hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="bg-gold-gradient py-3 rounded-sm shadow-gold-glow">
                <span className="text-mahogany-900 font-serif font-bold text-lg tracking-wide">
                  {loading ? 'Unlocking...' : 'Unlock the Oracle'}
                </span>
              </div>
            </button>
          </form>

          <div className="mt-6 text-center pt-6 border-t border-brass-800">
            <p className="text-brass-400 font-serif">
              Not yet initiated?{' '}
              <button
                onClick={() => onToggleView('register')}
                className="text-gold-400 hover:text-gold-300 font-medium transition"
              >
                Begin your journey
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
