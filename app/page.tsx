import Link from 'next/link';
import Image from 'next/image';
import { Leaf, Flower2, Home, ArrowRight } from 'lucide-react';
import { SeoArticles } from '@/components/SeoArticles';

export default function HomePage() {
  return (
    <>
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 elegant-image-border rounded-none">
          <Image
            src="https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1920&q=80"
            alt="Piękny ogród"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-bottle-900/80 via-bottle-800/70 to-bottle-700/60"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <p className="font-elegant text-lg md:text-xl mb-4 text-accent-300 tracking-widest uppercase drop-shadow-lg">
            Elegancja natury
          </p>
          <h1 className="font-elegant text-6xl md:text-8xl font-light mb-6 text-white drop-shadow-2xl tracking-tight">
            Iście Kwieciście
          </h1>
          <p className="font-sans text-lg md:text-xl mb-8 text-white/90 drop-shadow-lg max-w-2xl mx-auto leading-relaxed">
            Tworzymy piękne przestrzenie z pasją i profesjonalizmem
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/portfolio"
              className="elegant-button bg-bottle-600 text-white hover:bg-bottle-700 inline-flex items-center justify-center"
            >
              Zobacz portfolio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/kontakt"
              className="elegant-button bg-white text-bottle-700 hover:bg-accent-50 border-2 border-white"
            >
              Umów konsultację
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=1920&q=80"
            alt="Tło"
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4 title-separator inline-block">
              Nasze usługi
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Oferujemy kompleksowe rozwiązania dla Twojej przestrzeni
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="elegant-card p-8 group">
              <div className="bg-gradient-to-br from-bottle-600 to-bottle-700 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-elegant text-2xl font-medium text-bottle-800 mb-3 title-separator">
                Projektowanie ogrodów
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Od koncepcji po realizację - tworzymy ogrody dopasowane do Twoich potrzeb i stylu życia.
              </p>
              <Link
                href="/uslugi"
                className="text-bottle-600 font-semibold inline-flex items-center hover:text-bottle-700 transition-colors"
              >
                Dowiedz się więcej
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="elegant-card p-8 group">
              <div className="bg-gradient-to-br from-accent-600 to-accent-700 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Flower2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-elegant text-2xl font-medium text-bottle-800 mb-3 title-separator">
                Florystyka
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Bukiety ślubne, dekoracje weselne i okolicznościowe kompozycje kwiatowe na każdą okazję.
              </p>
              <Link
                href="/uslugi"
                className="text-bottle-600 font-semibold inline-flex items-center hover:text-bottle-700 transition-colors"
              >
                Dowiedz się więcej
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="elegant-card p-8 group">
              <div className="bg-gradient-to-br from-bottle-500 to-bottle-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Home className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-elegant text-2xl font-medium text-bottle-800 mb-3 title-separator">
                Aranżacja roślin
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Balkony, tarasy i wnętrza - tworzymy zielone oazy w każdej przestrzeni.
              </p>
              <Link
                href="/uslugi"
                className="text-bottle-600 font-semibold inline-flex items-center hover:text-bottle-700 transition-colors"
              >
                Dowiedz się więcej
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1920&q=80"
            alt="Tło"
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-bottle-800 mb-4 title-separator inline-block">
              Nasze realizacje
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Zobacz wybrane projekty z naszego portfolio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { id: 1, img: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80', title: 'Ogród japoński' },
              { id: 2, img: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80', title: 'Bukiet ślubny' },
              { id: 3, img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80', title: 'Aranżacja tarasu' },
              { id: 4, img: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&q=80', title: 'Kompozycja kwiatowa' },
              { id: 5, img: 'https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=800&q=80', title: 'Ogród przydomowy' },
              { id: 6, img: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80', title: 'Dekoracja weselna' }
            ].map((project) => (
              <div key={project.id} className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer elegant-image-border">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bottle-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-elegant text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-sm text-white/90">Zobacz szczegóły</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/portfolio"
              className="elegant-button bg-bottle-600 text-white hover:bg-bottle-700 inline-flex items-center"
            >
              Zobacz całe portfolio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <SeoArticles />

      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 elegant-image-border rounded-none">
          <Image
            src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1920&q=80"
            alt="Ogród"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bottle-900/90 to-bottle-800/80"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <p className="font-elegant text-lg md:text-xl mb-4 text-accent-300 tracking-widest uppercase drop-shadow-lg">
            Zacznij swoją przygodę
          </p>
          <h2 className="font-elegant text-4xl md:text-6xl font-light mb-6 text-white drop-shadow-2xl tracking-tight">
            Transformacja Twojej przestrzeni
          </h2>
          <p className="font-sans text-lg mb-8 text-white/90 drop-shadow-lg max-w-2xl mx-auto leading-relaxed">
            Skontaktuj się z nami i umów bezpłatną konsultację. Wspólnie stworzymy 
            przestrzeń Twoich marzeń w Warszawie i okolicach.
          </p>
          <Link
            href="/kontakt"
            className="elegant-button bg-white text-bottle-700 hover:bg-accent-50 inline-flex items-center"
          >
            Zacznij projekt
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
