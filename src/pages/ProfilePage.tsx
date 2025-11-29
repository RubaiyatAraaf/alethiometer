import { useAuth } from '../contexts/AuthContext';
import { User, Mail, Calendar, Scroll } from 'lucide-react';

export default function ProfilePage() {
  const { currentUser } = useAuth();

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="brass-frame rounded-xl inline-block mb-6">
        <div className="bg-mahogany-800 px-8 py-4 rounded-lg engraved-pattern flex items-center gap-4">
          <User className="text-gold-400" size={32} />
          <h1 className="text-4xl font-ornate font-bold text-gold-400 text-shadow-gold tracking-wide">
            Keeper's Record
          </h1>
        </div>
      </div>

      <div className="brass-frame rounded-2xl">
        <div className="bg-mahogany-800 p-8 rounded-xl engraved-pattern">
          <div className="flex items-center justify-center mb-8">
            <div className="brass-frame rounded-full p-1">
              <div className="w-28 h-28 bg-gold-gradient rounded-full flex items-center justify-center shadow-gold-glow">
                <User className="text-mahogany-900" size={56} strokeWidth={2} />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="brass-frame rounded-lg">
              <div className="flex items-start gap-4 p-5 bg-mahogany-900/80 rounded-sm">
                <Mail className="text-brass-500 mt-1" size={22} />
                <div>
                  <p className="text-brass-400 text-sm mb-1 font-serif">Inscription</p>
                  <p className="text-brass-100 font-medium text-lg">{currentUser?.email}</p>
                </div>
              </div>
            </div>

            <div className="brass-frame rounded-lg">
              <div className="flex items-start gap-4 p-5 bg-mahogany-900/80 rounded-sm">
                <Scroll className="text-brass-500 mt-1" size={22} />
                <div>
                  <p className="text-brass-400 text-sm mb-1 font-serif">Keeper's Mark</p>
                  <p className="text-brass-100 font-mono text-sm break-all">
                    {currentUser?.uid}
                  </p>
                </div>
              </div>
            </div>

            <div className="brass-frame rounded-lg">
              <div className="flex items-start gap-4 p-5 bg-mahogany-900/80 rounded-sm">
                <Calendar className="text-brass-500 mt-1" size={22} />
                <div>
                  <p className="text-brass-400 text-sm mb-1 font-serif">Initiation Date</p>
                  <p className="text-brass-100 text-lg">
                    {currentUser?.metadata?.creationTime
                      ? new Date(currentUser.metadata.creationTime).toLocaleDateString(
                          'en-US',
                          {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          }
                        )
                      : 'Lost in the mists of time'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t-2 border-brass-700">
            <h3 className="text-2xl font-serif font-semibold text-gold-400 mb-4 flex items-center gap-2">
              <div className="w-8 h-0.5 bg-brass-gradient"></div>
              About the Alethiometer
            </h3>
            <p className="text-brass-300 leading-relaxed font-serif text-lg">
              The Alethiometer is an ancient oracle, a truth-compass that peers through deception
              and illusion. Through its mystical symbols and precise mechanisms, it reveals the hidden
              nature of claims and statements. Each reading is delivered through arcane symbols -
              from the wise Owl of Pure Truth to the cunning Snake of Complete Falsehood -
              guiding seekers through the labyrinth of modern information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
