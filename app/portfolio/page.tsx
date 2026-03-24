'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { mockProjects } from '@/data/projects';
import { Filter } from 'lucide-react';

type Category = 'wszystkie' | 'ogrody' | 'florystyka' | 'kombinacja';

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('wszystkie');

  const filteredProjects = selectedCategory === 'wszystkie'
    ? mockProjects
    : mockProjects.filter(p => p.category === selectedCategory);

  const categories: { value: Category; label: string }[] = [
    { value: 'wszystkie', label: 'Wszystkie' },
    { value: 'ogrody', label: 'Ogrody' },
    { value: 'florystyka', label: 'Florystyka' },
    { value: 'kombinacja', label: 'Kombinacje' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-primary-50 to-accent-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Portfolio
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl">
            Zobacz nasze zrealizowane projekty - od ogrodów po florystykę i aranżacje roślin
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap gap-3 mb-12">
          <div className="flex items-center text-gray-700 font-semibold mr-2">
            <Filter className="h-5 w-5 mr-2" />
            Filtruj:
          </div>
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === cat.value
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/portfolio/${project.id}`}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="aspect-square bg-gray-200 relative">
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.category === 'ogrody'
                      ? 'bg-primary-100 text-primary-700'
                      : project.category === 'florystyka'
                      ? 'bg-accent-100 text-accent-700'
                      : 'bg-gray-100 text-gray-700'
                  }`}>
                    {project.category === 'ogrody' ? 'Ogrody' : 
                     project.category === 'florystyka' ? 'Florystyka' : 'Kombinacja'}
                  </span>
                  {project.location && (
                    <span className="text-xs text-gray-500">📍 {project.location}</span>
                  )}
                </div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 line-clamp-2 mb-3">
                  {project.description}
                </p>
                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              Brak projektów w tej kategorii
            </p>
          </div>
        )}
      </div>

    </div>
  );
}
