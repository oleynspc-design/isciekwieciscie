import Link from 'next/link';
import { Heart, Award, Users, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-primary-50 to-accent-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            O nas
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl">
            Poznaj naszą historię i pasję do tworzenia pięknych przestrzeni
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nasza historia
            </h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                I Ściek Wieciscie to miejsce, gdzie pasja do roślin spotyka się z profesjonalizmem. 
                Specjalizujemy się w kompleksowych usługach ogrodniczych, florystyce i aranżacji roślin.
              </p>
              <p>
                Każdy projekt traktujemy indywidualnie, dostosowując nasze rozwiązania do potrzeb 
                i oczekiwań klientów. Wierzymy, że rośliny mają moc przekształcania przestrzeni 
                i poprawiania jakości życia.
              </p>
              <p>
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
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-primary-600" />
            </div>
            <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
              Pasja
            </h3>
            <p className="text-gray-600">
              Kochamy to, co robimy. Każdy projekt realizujemy z pełnym zaangażowaniem i dbałością o detale.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md text-center">
            <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-accent-600" />
            </div>
            <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
              Profesjonalizm
            </h3>
            <p className="text-gray-600">
              Wieloletnie doświadczenie i ciągłe doskonalenie umiejętności gwarantują najwyższą jakość usług.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md text-center">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-primary-600" />
            </div>
            <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
              Indywidualne podejście
            </h3>
            <p className="text-gray-600">
              Każdy klient jest dla nas wyjątkowy. Dostosowujemy nasze usługi do Twoich potrzeb i budżetu.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Dlaczego warto z nami współpracować?
            </h2>
            <ul className="text-left space-y-4 mb-8 text-gray-700">
              <li className="flex items-start">
                <span className="text-primary-600 font-bold mr-3">✓</span>
                <span>Kompleksowa obsługa - od projektu po realizację</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 font-bold mr-3">✓</span>
                <span>Indywidualne podejście do każdego klienta</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 font-bold mr-3">✓</span>
                <span>Wieloletnie doświadczenie i wiedza botaniczna</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 font-bold mr-3">✓</span>
                <span>Transparentne ceny i terminowa realizacja</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 font-bold mr-3">✓</span>
                <span>Opieka porealizacyjna i porady pielęgnacyjne</span>
              </li>
            </ul>
            <Link
              href="/kontakt"
              className="inline-flex items-center bg-primary-600 text-white px-8 py-4 rounded-full hover:bg-primary-700 transition-colors font-semibold text-lg"
            >
              Rozpocznij współpracę
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
