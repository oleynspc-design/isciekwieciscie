'use client';

import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { mockProjects } from '@/data/projects';
import { ArrowLeft, MapPin, Calendar, Ruler, Clock, Tag } from 'lucide-react';

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = mockProjects.find(p => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 elegant-image-border rounded-none">
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-bottle-900/85 to-bottle-700/75"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/portfolio" 
            className="inline-flex items-center text-white hover:text-accent-400 font-medium mb-6 drop-shadow-lg"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Powrót do portfolio
          </Link>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-2xl">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-4 text-white/95 drop-shadow-lg">
            {project.location && (
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-accent-400" />
                <span>{project.location}</span>
              </div>
            )}
            {project.area && (
              <div className="flex items-center">
                <Ruler className="h-5 w-5 mr-2 text-accent-400" />
                <span>{project.area}</span>
              </div>
            )}
            {project.duration && (
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-accent-400" />
                <span>{project.duration}</span>
              </div>
            )}
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-accent-400" />
              <span>{new Date(project.createdAt).toLocaleDateString('pl-PL')}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4 title-separator">
                Opis projektu
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                {project.description}
              </p>
              {project.longDescription && (
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {project.longDescription}
                </p>
              )}
            </div>

            {project.beforeAfterImages && (
              <div className="mb-8">
                <h2 className="font-display text-2xl font-bold text-gray-900 mb-4 title-separator">
                  Przed i po
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-2">PRZED</p>
                    <div className="aspect-square bg-gray-200 rounded-xl overflow-hidden">
                      <Image
                        src={project.beforeAfterImages.before}
                        alt="Przed realizacją"
                        width={600}
                        height={600}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-2">PO</p>
                    <div className="aspect-square bg-gray-200 rounded-xl overflow-hidden">
                      <Image
                        src={project.beforeAfterImages.after}
                        alt="Po realizacji"
                        width={600}
                        height={600}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="mb-8">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4 title-separator">
                Galeria zdjęć
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.images.map((image, index) => (
                  <div key={index} className="aspect-video bg-gray-200 rounded-xl overflow-hidden">
                    <Image
                      src={image}
                      alt={`${project.title} - zdjęcie ${index + 1}`}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-md sticky top-24">
              <h3 className="font-display text-xl font-bold text-gray-900 mb-4 title-separator">
                Szczegóły projektu
              </h3>
              
              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-sm font-semibold text-gray-600 mb-1">Kategoria</p>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                    project.category === 'ogrody'
                      ? 'bg-primary-100 text-primary-700'
                      : project.category === 'florystyka'
                      ? 'bg-accent-100 text-accent-700'
                      : 'bg-gray-100 text-gray-700'
                  }`}>
                    {project.category === 'ogrody' ? 'Ogrody' : 
                     project.category === 'florystyka' ? 'Florystyka' : 'Kombinacja'}
                  </span>
                </div>

                {project.location && (
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Lokalizacja</p>
                    <p className="text-gray-900">{project.location}</p>
                  </div>
                )}

                {project.area && (
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Powierzchnia</p>
                    <p className="text-gray-900">{project.area}</p>
                  </div>
                )}

                {project.duration && (
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Czas realizacji</p>
                    <p className="text-gray-900">{project.duration}</p>
                  </div>
                )}
              </div>

              {project.tags && project.tags.length > 0 && (
                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-600 mb-2 flex items-center">
                    <Tag className="h-4 w-4 mr-1" />
                    Tagi
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <Link
                href="/kontakt"
                className="block w-full bg-primary-600 text-white text-center px-6 py-3 rounded-full hover:bg-primary-700 transition-colors font-semibold"
              >
                Zapytaj o podobny projekt
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-8 text-center">
            Inne realizacje
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {mockProjects
              .filter(p => p.id !== project.id && p.category === project.category)
              .slice(0, 3)
              .map((relatedProject) => (
                <Link
                  key={relatedProject.id}
                  href={`/portfolio/${relatedProject.id}`}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="aspect-square bg-gray-200 relative">
                    <Image
                      src={relatedProject.images[0]}
                      alt={relatedProject.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-display text-lg font-bold text-gray-900 mb-2">
                      {relatedProject.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {relatedProject.description}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
