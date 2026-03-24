import Link from 'next/link';
import Image from 'next/image';
import { Leaf, Flower2, Home, ArrowRight } from 'lucide-react';
import { SeoArticles } from '@/components/SeoArticles';

export default function HomePage() {
  return (
    <>
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 text-balance">
            Ogrody + Kwiaty + Aranżacja w Warszawie i okolicach
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Tworzymy piękne przestrzenie z pasją. Kompleksowe usługi ogrodnicze, 
            florystyka i aranżacja roślin w Warszawie i okolicach do 30km.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/portfolio"
              className="bg-primary-600 text-white px-8 py-4 rounded-full hover:bg-primary-700 transition-colors font-semibold text-lg inline-flex items-center justify-center"
            >
              Zobacz portfolio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/kontakt"
              className="bg-white text-primary-600 px-8 py-4 rounded-full hover:bg-gray-50 transition-colors font-semibold text-lg border-2 border-primary-600"
            >
              Umów konsultację
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nasze usługi
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Oferujemy kompleksowe rozwiązania dla Twojej przestrzeni
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-2xl hover:shadow-xl transition-shadow">
              <div className="bg-primary-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Home className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">
                Projektowanie ogrodów
              </h3>
              <p className="text-gray-700 mb-6">
                Kompleksowe projektowanie i realizacja ogrodów. Od koncepcji po wykonanie, 
                tworzymy przestrzenie dopasowane do Twoich potrzeb.
              </p>
              <Link
                href="/uslugi#ogrody"
                className="text-primary-600 font-semibold inline-flex items-center hover:text-primary-700"
              >
                Dowiedz się więcej
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-accent-50 to-accent-100 p-8 rounded-2xl hover:shadow-xl transition-shadow">
              <div className="bg-accent-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Flower2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">
                Florystyka
              </h3>
              <p className="text-gray-700 mb-6">
                Bukiety, dekoracje kwiatowe na wesela, eventy i okazje specjalne. 
                Każda kompozycja tworzona z pasją i dbałością o detale.
              </p>
              <Link
                href="/uslugi#florystyka"
                className="text-accent-600 font-semibold inline-flex items-center hover:text-accent-700"
              >
                Dowiedz się więcej
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-2xl hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-primary-600 to-accent-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">
                Aranżacja roślin
              </h3>
              <p className="text-gray-700 mb-6">
                Profesjonalna aranżacja roślin doniczkowych we wnętrzach i na zewnątrz. 
                Dobór roślin idealnych dla Twojej przestrzeni.
              </p>
              <Link
                href="/uslugi#aranzacja"
                className="text-primary-600 font-semibold inline-flex items-center hover:text-primary-700"
              >
                Dowiedz się więcej
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nasze realizacje
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Zobacz wybrane projekty z naszego portfolio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="group relative aspect-square bg-gray-200 rounded-2xl overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-display text-xl font-bold mb-2">Projekt {i}</h3>
                    <p className="text-sm">Zobacz szczegóły</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/portfolio"
              className="bg-primary-600 text-white px-8 py-4 rounded-full hover:bg-primary-700 transition-colors font-semibold inline-flex items-center"
            >
              Zobacz całe portfolio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <SeoArticles />

      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Gotowy na swój wymarzony projekt?
          </h2>
          <p className="text-lg mb-8 text-primary-100">
            Skontaktuj się z nami i  w Warszawie i okolicachumów bezpłatną konsultację. Wspólnie stworzymy 
            przestrzeń Twoich marzeń.
          </p>
          <Link
            href="/kontakt"
            className="bg-white text-primary-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors font-semibold text-lg inline-flex items-center"
          >
            Zacznij projekt
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
