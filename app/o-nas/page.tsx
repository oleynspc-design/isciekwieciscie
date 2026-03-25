import Link from 'next/link';
import Image from 'next/image';
import { Heart, Users, Award, Leaf, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 elegant-image-border rounded-none">
          <Image
            src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=1920&q=80"
            alt="Ogród"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-bottle-900/85 to-bottle-700/75"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 text-center drop-shadow-2xl">
            O nas
          </h1>
          <p className="text-lg text-white/95 text-center max-w-2xl mx-auto drop-shadow-lg">
            Poznaj naszą historię i wartości, które nas kierują
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="elegant-card p-8 mb-12">
              <h2 className="font-display text-3xl font-bold text-bottle-800 mb-6 title-separator">
                Nasza historia
              </h2>
              <p className="text-gray-600">
                I Ściek Wieciscie to miejsce, gdzie pasja do roślin spotyka się z profesjonalizmem. 
                Specjalizujemy się w kompleksowych usługach ogrodniczych, florystyce i aranżacji roślin.
              </p>
              <p className="text-gray-600">
                Każdy projekt traktujemy indywidualnie, dostosowując nasze rozwiązania do potrzeb 
                i oczekiwań klientów. Wierzymy, że rośliny mają moc przekształcania przestrzeni 
                i poprawiania jakości życia.
              </p>
              <p className="text-gray-600">
                Naszym celem jest tworzenie pięknych, funkcjonalnych i zrównoważonych rozwiązań, 
                które będą cieszyć oko przez lata.
              </p>
            </div>
          </div>
          <div className="aspect-square bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400">
            Zdjęcie zespołu
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-8 rounded-2xl shadow-md text-center">
            <div className="elegant-card p-8 text-center group">
              <div className="bg-gradient-to-br from-accent-600 to-accent-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-display text-2xl font-bold text-bottle-800 mb-4 title-separator">
                Profesjonalizm
              </h3>
              <p className="text-gray-600">
                Wieloletnie doświadczenie i ciągłe doskonalenie umiejętności gwarantują najwyższą jakość usług.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md text-center">
            <div className="elegant-card p-8 text-center group">
              <div className="bg-gradient-to-br from-bottle-500 to-bottle-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-display text-2xl font-bold text-bottle-800 mb-4 title-separator">
                Indywidualne podejście
              </h3>
              <p className="text-gray-600">
                Każdy klient jest dla nas wyjątkowy. Dostosowujemy nasze usługi do Twoich potrzeb i budżetu.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md text-center">
            <div className="elegant-card p-8 text-center group">
              <div className="bg-gradient-to-br from-primary-600 to-primary-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-display text-2xl font-bold text-bottle-800 mb-4 title-separator">
                Pasja
              </h3>
              <p className="text-gray-600">
                Kochamy to, co robimy. Każdy projekt realizujemy z pełnym zaangażowaniem i dbałością o detale.
              </p>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl p-8 md:p-12 text-white">
          <div className="absolute inset-0 elegant-image-border rounded-3xl">
            <Image
              src="https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=1920&q=80"
              alt="Ogród"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-bottle-900/90 to-bottle-700/85"></div>
          </div>
          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-center drop-shadow-lg">
              Dlaczego warto z nami współpracować?
            </h2>
            <ul className="text-left space-y-4 mb-8 text-white/95 drop-shadow-lg">
              <li className="flex items-start">
                <span className="text-accent-400 font-bold mr-3">✓</span>
                <span>Kompleksowa obsługa - od projektu po realizację</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-400 font-bold mr-3">✓</span>
                <span>Indywidualne podejście do każdego klienta</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-400 font-bold mr-3">✓</span>
                <span>Wieloletnie doświadczenie i wiedza botaniczna</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-400 font-bold mr-3">✓</span>
                <span>Transparentne ceny i terminowa realizacja</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 font-bold mr-3">✓</span>
                <span>Opieka porealizacyjna i porady pielęgnacyjne</span>
              </li>
            </ul>
            <Link
              href="/kontakt"
              className="elegant-button inline-flex items-center bg-white text-bottle-700 hover:bg-accent-50"
            >
              Skontaktuj się z nami
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
