import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Compass, Home, User, LogOut, Menu, X } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: 'home' | 'profile';
  onNavigate: (page: 'home' | 'profile') => void;
}

export default function Layout({ children, currentPage, onNavigate }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentUser, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  const navItems = [
    { id: 'home' as const, label: 'Oracle', icon: Home },
    { id: 'profile' as const, label: 'Keeper', icon: User },
  ];

  return (
    <div className="min-h-screen bg-mahogany-900 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-mahogany-800/50 via-mahogany-900 to-mahogany-950 pointer-events-none"></div>

      <header className="relative z-20 bg-mahogany-800/80 backdrop-blur-sm border-b-4 brass-border shadow-mahogany">
        <div className="container mx-auto px-4 py-4">
          <div className="brass-frame rounded-lg">
            <div className="bg-mahogany-800 p-4 rounded-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gold-500/20 rounded-full blur-lg animate-pulse-glow"></div>
                    <Compass className="text-gold-400 animate-spin-slow relative z-10" size={36} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h1 className="text-3xl font-ornate font-bold text-gold-400 text-shadow-gold tracking-wide">
                      Alethiometer
                    </h1>
                    <p className="text-xs text-brass-300 italic tracking-widest">Seeker of Truth</p>
                  </div>
                </div>

                <nav className="hidden md:flex items-center gap-4">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => onNavigate(item.id)}
                        className={`group relative flex items-center gap-2 px-5 py-2.5 rounded-md transition-all duration-300 ${
                          currentPage === item.id
                            ? 'bg-brass-gradient text-mahogany-900 shadow-brass-outer'
                            : 'bg-mahogany-700/50 text-brass-200 hover:bg-mahogany-600 hover:text-gold-400 border border-brass-700'
                        }`}
                      >
                        <Icon size={18} className={currentPage === item.id ? '' : 'group-hover:rotate-12 transition-transform'} />
                        <span className="font-serif text-sm tracking-wide">{item.label}</span>
                      </button>
                    );
                  })}

                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 px-5 py-2.5 bg-mahogany-700/50 text-brass-300 hover:text-red-400 hover:bg-mahogany-600 border border-brass-700 rounded-md transition-all duration-300"
                  >
                    <LogOut size={18} />
                    <span className="font-serif text-sm">Depart</span>
                  </button>
                </nav>

                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden text-brass-300 hover:text-gold-400 transition-colors"
                >
                  {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
              </div>

              {mobileMenuOpen && (
                <nav className="md:hidden mt-6 space-y-2 pt-4 border-t border-brass-700">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          onNavigate(item.id);
                          setMobileMenuOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-md transition-all ${
                          currentPage === item.id
                            ? 'bg-brass-gradient text-mahogany-900 shadow-brass-outer'
                            : 'bg-mahogany-700/50 text-brass-200 hover:bg-mahogany-600 hover:text-gold-400 border border-brass-700'
                        }`}
                      >
                        <Icon size={18} />
                        <span className="font-serif">{item.label}</span>
                      </button>
                    );
                  })}

                  <button
                    onClick={() => {
                      handleLogout();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 bg-mahogany-700/50 text-brass-300 hover:text-red-400 hover:bg-mahogany-600 border border-brass-700 rounded-md transition-all"
                  >
                    <LogOut size={18} />
                    <span className="font-serif">Depart</span>
                  </button>
                </nav>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">{children}</div>
      </main>

      <footer className="relative z-10 text-center py-8 text-brass-400 text-sm border-t border-brass-800/30">
        <div className="flex items-center justify-center gap-2">
          <span className="font-serif">Trusted to</span>
          <span className="text-gold-400 font-medium">{currentUser?.email}</span>
        </div>
      </footer>
    </div>
  );
}
