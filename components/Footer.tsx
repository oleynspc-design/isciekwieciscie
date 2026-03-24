import Link from 'next/link';
import { Instagram, Mail, Phone, Leaf } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-8 w-8 text-primary-500" />
              <span className="font-display text-xl font-semibold text-white">
                Iście Kwieciście
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Kompleksowe usługi ogrodnicze, florystyka i aranżacja roślin w Warszawie i okolicach. 
              Tworzymy piękne przestrzenie z pasją i profesjonalizmem.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/isciekwieciscie/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="mailto:kontakt@isciekwieciscie.pl"
                className="text-gray-400 hover:text-primary-500 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a
                href="tel:+48123456789"
                className="text-gray-400 hover:text-primary-500 transition-colors"
                aria-label="Telefon"
              >
                <Phone className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Nawigacja</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/uslugi" className="hover:text-primary-500 transition-colors">
                  Usługi
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-primary-500 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/o-nas" className="hover:text-primary-500 transition-colors">
                  O nas
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="hover:text-primary-500 transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Usługi</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/uslugi#ogrody" className="hover:text-primary-500 transition-colors">
                  Projektowanie ogrodów
                </Link>
              </li>
              <li>
                <Link href="/uslugi#florystyka" className="hover:text-primary-500 transition-colors">
                  Florystyka
                </Link>
              </li>
              <li>
                <Link href="/uslugi#aranzacja" className="hover:text-primary-500 transition-colors">
                  Aranżacja roślin
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} I Ściek Wieciscie. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
}
