import { useState } from 'react';
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';
import ResetPassword from '../components/Auth/ResetPassword';
import { Compass, Settings } from 'lucide-react';

export default function AuthPage() {
  const [view, setView] = useState<'login' | 'register' | 'reset'>('login');

  return (
    <div className="min-h-screen bg-mahogany-900 flex flex-col items-center justify-center p-4 py-8 sm:py-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-mahogany-800/50 via-mahogany-900 to-mahogany-950"></div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 hidden md:block">
          <Settings className="text-brass-500 animate-spin-slow" size={120} strokeWidth={0.5} />
        </div>
        <div className="absolute bottom-20 right-10 hidden md:block">
          <Settings className="text-brass-500 animate-spin-slow" size={140} strokeWidth={0.5} />
        </div>
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 hidden lg:block">
          <Compass className="text-brass-500" size={100} strokeWidth={0.5} />
        </div>
      </div>

      <div className="relative z-10 text-center mb-6 sm:mb-8 w-full max-w-2xl px-2">
        <div className="brass-frame rounded-lg sm:rounded-xl inline-block">
          <div className="bg-mahogany-800 px-4 py-3 sm:px-8 sm:py-4 rounded-md sm:rounded-lg engraved-pattern">
            <div className="flex items-center justify-center gap-2 sm:gap-4 mb-1">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-gold-500/20 rounded-full blur-lg animate-pulse-glow"></div>
                <Compass className="text-gold-400 animate-spin-slow relative z-10" size={32} strokeWidth={1.5} />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-ornate font-bold text-gold-400 text-shadow-gold tracking-wider">
                Alethiometer
              </h1>
            </div>
            <p className="text-brass-300 font-serif italic text-xs sm:text-sm tracking-wider sm:tracking-widest">
              The Ancient Oracle of Truth
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        {view === 'login' && <Login onToggleView={setView} />}
        {view === 'register' && <Register onToggleView={setView} />}
        {view === 'reset' && <ResetPassword onToggleView={setView} />}
      </div>

      <div className="relative z-10 mt-6 sm:mt-8 text-center text-brass-600 text-xs italic px-4">
        <p className="font-serif">Only those who seek truth may enter</p>
      </div>
    </div>
  );
}
