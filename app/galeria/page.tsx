'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

// Ten komponent będzie wyświetlał zdjęcia z bazy danych
// Możesz dodać dowolną ilość zdjęć - jedynym ograniczeniem jest baza danych
export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Przykładowe zdjęcia - w przyszłości zastąp to danymi z bazy danych
  // Format: { id: number, url: string, alt: string, category?: string }
  const galleryImages = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80',
      alt: 'Ogród przydomowy',
      category: 'ogrody'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80',
      alt: 'Piękny ogród z trawnikiem',
      category: 'ogrody'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?w=800&q=80',
      alt: 'Bukiet ślubny',
      category: 'florystyka'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&q=80',
      alt: 'Kompozycja kwiatowa',
      category: 'florystyka'
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80',
      alt: 'Balkon z roślinami',
      category: 'kombinacja'
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
      alt: 'Ogród z kwiatami',
      category: 'ogrody'
    },
    {
      id: 7,
      url: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&q=80',
      alt: 'Ogród japoński',
      category: 'ogrody'
    },
    {
      id: 8,
      url: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=800&q=80',
      alt: 'Ogród z altaną',
      category: 'ogrody'
    },
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="elegant-gradient py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-bottle-800 mb-4 text-center title-separator inline-block">
            Galeria
          </h1>
          <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto">
            Zobacz nasze najpiękniejsze realizacje i kompozycje kwiatowe
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Masonry Grid Layout - automatycznie układa zdjęcia */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="break-inside-avoid mb-6"
            >
              <div
                className="elegant-card overflow-hidden cursor-pointer group"
                onClick={() => openLightbox(index)}
              >
                <div className="relative aspect-square elegant-image-border rounded-2xl overflow-hidden">
                  <Image
                    src={image.url}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bottle-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-semibold text-sm drop-shadow-lg">
                        {image.alt}
                      </p>
                      {image.category && (
                        <span className="inline-block mt-2 px-3 py-1 bg-bottle-600/80 text-white text-xs rounded-full">
                          {image.category === 'ogrody' ? 'Ogrody' : 
                           image.category === 'florystyka' ? 'Florystyka' : 'Kombinacja'}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Informacja o dodawaniu zdjęć */}
        <div className="mt-16 elegant-card p-8 text-center">
          <h2 className="font-display text-2xl font-bold text-bottle-800 mb-4 title-separator inline-block">
            Jak dodawać zdjęcia?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ta galeria automatycznie wyświetla wszystkie zdjęcia z bazy danych. 
            Możesz dodawać dowolną ilość zdjęć - jedynym ograniczeniem jest pojemność bazy danych. 
            Zdjęcia układają się automatycznie w elegancką siatkę masonry.
          </p>
          <div className="mt-6 p-4 bg-bottle-50 rounded-lg border border-bottle-200">
            <p className="text-sm text-bottle-800 font-semibold">
              💡 Wskazówka: Aby dodać zdjęcia, wstaw je ręcznie do bazy danych w formacie:
            </p>
            <code className="block mt-2 text-xs text-left bg-white p-3 rounded border border-bottle-300 overflow-x-auto">
              {`{ id: number, url: string, alt: string, category?: string }`}
            </code>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-accent-400 transition-colors z-10"
            aria-label="Zamknij"
          >
            <X className="h-8 w-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 text-white hover:text-accent-400 transition-colors text-4xl font-bold"
            aria-label="Poprzednie"
          >
            ‹
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 text-white hover:text-accent-400 transition-colors text-4xl font-bold"
            aria-label="Następne"
          >
            ›
          </button>

          <div
            className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full">
              <Image
                src={galleryImages[selectedImage].url}
                alt={galleryImages[selectedImage].alt}
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <p className="text-white text-lg font-semibold drop-shadow-2xl bg-black/50 inline-block px-6 py-3 rounded-full">
                {galleryImages[selectedImage].alt}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
