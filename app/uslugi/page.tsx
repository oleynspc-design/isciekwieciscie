import Link from 'next/link';
import { Home, Flower2, Leaf, Check, ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-primary-50 to-accent-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nasze usługi
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl">
            Kompleksowe rozwiązania dla Twojej przestrzeni - od projektowania ogrodów po florystykę i aranżację roślin
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section id="ogrody" className="mb-20 scroll-mt-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-primary-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Home className="h-8 w-8 text-white" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Projektowanie ogrodów
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Tworzymy ogrody dopasowane do Twoich potrzeb i stylu życia. Od koncepcji, przez projekt, 
                aż po pełną realizację - zajmujemy się wszystkim.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Projekty koncepcyjne i wykonawcze',
                  'Dobór roślin dostosowany do warunków',
                  'Systemy nawadniania i oświetlenia',
                  'Ścieżki, tarasy i elementy małej architektury',
                  'Pielęgnacja i utrzymanie ogrodów',
                  'Przekształcenia istniejących ogrodów'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/kontakt"
                className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-full hover:bg-primary-700 transition-colors font-semibold"
              >
                Zapytaj o wycenę
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="aspect-square bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400">
              Zdjęcie ogrodu
            </div>
          </div>
        </section>

        <section id="florystyka" className="mb-20 scroll-mt-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 aspect-square bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400">
              Zdjęcie bukietu
            </div>
            <div className="order-1 md:order-2">
              <div className="bg-accent-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Flower2 className="h-8 w-8 text-white" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Florystyka
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Tworzymy unikalne kompozycje kwiatowe na każdą okazję. Każdy bukiet i dekoracja 
                są wykonywane z pasją i dbałością o najmniejsze detale.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Bukiety okolicznościowe i sezonowe',
                  'Florystyka ślubna - bukiety, dekoracje',
                  'Dekoracje na eventy i uroczystości',
                  'Wiązanki żałobne',
                  'Kompozycje do wnętrz',
                  'Regularne dostawy dla firm'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-6 w-6 text-accent-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/kontakt"
                className="inline-flex items-center bg-accent-600 text-white px-6 py-3 rounded-full hover:bg-accent-700 transition-colors font-semibold"
              >
                Zamów bukiet
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        <section id="aranzacja" className="mb-20 scroll-mt-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-primary-600 to-accent-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Aranżacja roślin
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Profesjonalna aranżacja roślin doniczkowych we wnętrzach i na zewnątrz. 
                Dobieramy rośliny idealne dla Twojej przestrzeni i warunków.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Aranżacje wnętrz z roślinami',
                  'Zieleń na balkonach i tarasach',
                  'Ogrody wertykalne i zielone ściany',
                  'Dobór roślin do warunków świetlnych',
                  'Porady pielęgnacyjne',
                  'Sezonowe kompozycje w donicach'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/kontakt"
                className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-full hover:bg-primary-700 transition-colors font-semibold"
              >
                Umów konsultację
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="aspect-square bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400">
              Zdjęcie aranżacji
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-primary-600 to-accent-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Potrzebujesz kombinacji usług?
          </h2>
          <p className="text-lg mb-8 text-primary-50 max-w-2xl mx-auto">
            Oferujemy również kompleksowe projekty łączące projektowanie ogrodów, 
            florystykę i aranżację roślin. Skontaktuj się z nami, aby omówić Twoje potrzeby.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center bg-white text-primary-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors font-semibold text-lg"
          >
            Skontaktuj się z nami
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </section>
      </div>
    </div>
  );
}
