import Link from 'next/link';
import Image from 'next/image';
import { Leaf, Flower2, Trees, Sprout, ArrowRight, Check } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 elegant-image-border rounded-none">
          <Image
            src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1920&q=80"
            alt="Ogród"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-bottle-900/85 to-bottle-700/75"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 text-center drop-shadow-2xl">
            Nasze usługi
          </h1>
          <p className="text-lg text-white/95 text-center max-w-2xl mx-auto drop-shadow-lg">
            Kompleksowe rozwiązania ogrodnicze i florystyczne dla Twojej przestrzeni
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section id="ogrody" className="mb-20 scroll-mt-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-bottle-600 to-bottle-700 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <Trees className="h-8 w-8 text-white" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-bottle-800 mb-4 title-separator">
                Projektowanie ogrodów
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Tworzymy ogrody marzeń - od koncepcji po realizację. Każdy projekt jest unikalny 
                i dostosowany do Twoich potrzeb, stylu życia oraz warunków terenu.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Projekty koncepcyjne i wykonawcze',
                  'Zakładanie trawników (siew i rolka)',
                  'Rabaty kwiatowe i nasadzenia',
                  'Dobór roślin dostosowany do warunków',
                  'Systemy nawadniania i oświetlenia',
                  'Ścieżki, tarasy i elementy małej architektury',
                  'Pielęgnacja i utrzymanie ogrodów'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-6 w-6 text-bottle-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/kontakt"
                className="elegant-button inline-flex items-center bg-bottle-600 text-white hover:bg-bottle-700"
              >
                Zapytaj o wycenę
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl elegant-image-border">
              <Image
                src="https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80"
                alt="Piękny ogród"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section id="florystyka" className="mb-20 scroll-mt-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative aspect-square rounded-2xl overflow-hidden shadow-2xl elegant-image-border">
              <Image
                src="https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?w=800&q=80"
                alt="Bukiet ślubny"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="bg-gradient-to-br from-accent-600 to-accent-700 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <Flower2 className="h-8 w-8 text-white" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-bottle-800 mb-4 title-separator">
                Florystyka
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
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
                className="elegant-button inline-flex items-center bg-accent-600 text-white hover:bg-accent-700"
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
              <div className="bg-gradient-to-br from-bottle-500 to-bottle-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-bottle-800 mb-4 title-separator">
                Aranżacja roślin
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
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
                    <Check className="h-6 w-6 text-bottle-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/kontakt"
                className="elegant-button inline-flex items-center bg-bottle-600 text-white hover:bg-bottle-700"
              >
                Umów konsultację
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl elegant-image-border">
              <Image
                src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80"
                alt="Aranżacja roślin na balkonie"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden rounded-3xl p-8 md:p-12 text-white text-center">
          <div className="absolute inset-0 elegant-image-border rounded-3xl">
            <Image
              src="https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=1920&q=80"
              alt="Ogród"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-bottle-900/90 to-bottle-700/85"></div>
          </div>
          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg">
              Potrzebujesz kombinacji usług?
            </h2>
            <p className="text-lg mb-8 text-white/95 max-w-2xl mx-auto drop-shadow">
              Oferujemy również kompleksowe projekty łączące projektowanie ogrodów, 
              florystykę i aranżację roślin. Skontaktuj się z nami, aby omówić Twoje potrzeby.
            </p>
            <Link
              href="/kontakt"
              className="elegant-button inline-flex items-center bg-white text-bottle-700 hover:bg-accent-50"
            >
              Skontaktuj się z nami
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
