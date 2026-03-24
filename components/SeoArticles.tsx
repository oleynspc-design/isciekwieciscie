'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Article {
  id: string;
  title: string;
  content: string;
}

const seoArticles: Article[] = [
  {
    id: '1',
    title: 'Projektowanie ogrodów w Warszawie i okolicach - kompleksowy przewodnik',
    content: `Projektowanie ogrodów w Warszawie i okolicach do 30km to nasza specjalność. Oferujemy profesjonalne usługi obejmujące pełen zakres prac - od koncepcji, przez projekt wykonawczy, aż po realizację i pielęgnację.

**Obszar działania:** Warszawa (wszystkie dzielnice: Wilanów, Mokotów, Ursynów, Śródmieście, Żoliborz, Bielany, Bemowo, Ochota, Wola, Praga, Targówek, Białołęka, Rembertów, Wawer, Wesoła) oraz okolice do 30km: Piaseczno, Konstancin-Jeziorna, Józefów, Otwock, Sulejówek, Marki, Ząbki, Zielonka, Legionowo, Jabłonna, Łomianki, Izabelin, Stare Babice, Michałowice, Raszyn, Lesznowola.

**Nasze usługi ogrodnicze:**
- Projekty koncepcyjne i wykonawcze ogrodów
- Zakładanie trawników (z siewu i rolki)
- Rabaty kwiatowe z roślinami wieloletnimi i sezonowymi
- Systemy nawadniania automatycznego
- Oświetlenie ogrodowe LED
- Oczka wodne i stawy
- Ścieżki, tarasy, altany
- Nasadzenia drzew i krzewów
- Pielęgnacja i utrzymanie ogrodów

**Dlaczego warto wybrać nas?**
Posiadamy wieloletnie doświadczenie w projektowaniu ogrodów na terenie Warszawy i okolic. Znamy lokalne warunki glebowe i klimatyczne, co pozwala nam dobierać rośliny idealnie dopasowane do Twojego terenu. Każdy projekt traktujemy indywidualnie, uwzględniając Twoje potrzeby, styl życia i budżet.

**Proces realizacji:**
1. Bezpłatna konsultacja i wizja lokalna
2. Projekt koncepcyjny z wizualizacją
3. Projekt wykonawczy z kosztorysem
4. Realizacja zgodnie z harmonogramem
5. Odbiór i instruktaż pielęgnacji

Zapraszamy do kontaktu - chętnie pomożemy stworzyć ogród Twoich marzeń!`,
  },
  {
    id: '2',
    title: 'Florystyka ślubna Warszawa - bukiety, dekoracje, kompleksowa oprawa',
    content: `Florystyka ślubna to nasza pasja. Tworzymy wyjątkowe bukiety ślubne, dekoracje kościołów i sal weselnych na terenie Warszawy i okolic do 30km.

**Zakres usług florystyki ślubnej:**
- Bukiety ślubne dla Panny Młodej (klasyczne, rustykalny, boho, glamour)
- Butonierki dla Pana Młodego i świadków
- Bransoletki kwiatowe dla druhen
- Dekoracje kościoła (ołtarz, ławki, wejście)
- Dekoracje sali weselnej (stoły, prezydium, ściany kwiatowe)
- Girlandy i kompozycje wiszące
- Dekoracje samochodu
- Kwiaty do włosów
- Wiązanki dla rodziców

**Popularne style:**
- **Rustykalny:** polne kwiaty, róże ogrodowe, lawenda, naturalne zielenie
- **Glamour:** róże, piwonie, orchidee, eleganckie dodatki
- **Boho:** suche kwiaty, trawy ozdobne, pampas, naturalne akcenty
- **Klasyczny:** białe róże, lilie, frezje, gipsówka
- **Nowoczesny:** minimalistyczne kompozycje, egzotyczne kwiaty

**Lokalizacje obsługiwane:**
Realizujemy wesela w całej Warszawie i okolicach: Pałac Jabłonna, Dwór Korona Karkonoszy, Pałac Biedrusko, Dwór Sieraków, Rezydencja Luxury Hotel, oraz wszystkie sale weselne i kościoły na terenie Warszawy i w promieniu 30km.

**Proces współpracy:**
1. Spotkanie i ustalenie koncepcji (pokazujemy portfolio)
2. Dobór kwiatów i kolorystyki
3. Wycena i rezerwacja terminu
4. Próba bukietu (opcjonalnie)
5. Realizacja w dniu ślubu
6. Dostawa i ustawienie dekoracji

Każdy bukiet i dekoracja są wykonywane świeżo w dniu ślubu. Gwarantujemy najwyższą jakość kwiatów i profesjonalną obsługę.`,
  },
  {
    id: '3',
    title: 'Aranżacja roślin na balkonach i tarasach - Warszawa',
    content: `Aranżacja balkonów i tarasów roślinami to doskonały sposób na stworzenie zielonej oazy w centrum miasta. Specjalizujemy się w projektowaniu i realizacji aranżacji na terenie Warszawy i okolic.

**Usługi aranżacji balkonów i tarasów:**
- Dobór roślin dostosowanych do warunków (nasłonecznienie, wiatr)
- Rośliny doniczkowe sezonowe i całoroczne
- Ogródki ziołowe (bazylia, rozmaryn, tymianek, mięta)
- Rośliny pnące na pergole i kraty
- Systemy nawadniania kropelkowego
- Donice i skrzynki balkonowe
- Kompozycje sezonowe (wiosna, lato, jesień, zima)

**Popularne rośliny balkonowe:**
- **Kwitnące:** surfinie, pelargonie, begonie, bratki, hortensje
- **Pnące:** bluszcz, winobluszcz, clematis, wiciokrzew
- **Zioła:** bazylia, rozmaryn, tymianek, mięta, pietruszka, szałwia
- **Całoroczne:** bukszpan, lawenda, rozmaryn, iglaki miniaturowe
- **Egzotyczne:** cytrusy (cytryna, pomarańcza), oliwki, palmy

**Aranżacje dla małych przestrzeni:**
Specjalizujemy się w maksymalnym wykorzystaniu małych balkonów (nawet 3-4m²). Stosujemy rośliny pnące, wiszące donice, pionowe ogrody i sprytne rozwiązania oszczędzające miejsce.

**Obszar działania:**
Wszystkie dzielnice Warszawy: Śródmieście, Mokotów, Żoliborz, Ochota, Wola, Praga, Ursynów, Wilanów, Bielany oraz okolice do 30km.

**Pielęgnacja:**
Oferujemy również usługi pielęgnacji balkonów - regularne podlewanie, nawożenie, przycinanie i wymiana roślin sezonowych. Idealne dla osób często wyjeżdżających lub nie mających czasu na pielęgnację.

Skontaktuj się z nami, aby umówić bezpłatną konsultację i wycenę!`,
  },
  {
    id: '4',
    title: 'Kwiaty do biura Warszawa - abonament kwiatowy dla firm',
    content: `Świeże kwiaty w biurze poprawiają atmosferę pracy, redukują stres i robią pozytywne wrażenie na klientach. Oferujemy abonament kwiatowy dla firm w Warszawie i okolicach.

**Usługa abonamentu kwiatowego:**
- Cotygodniowa lub dwutygodniowa dostawa świeżych kwiatów
- Kompozycje dopasowane do kolorystyki firmy
- Donice ceramiczne w cenie abonamentu
- Wymiana zwiędniętych kwiatów
- Pielęgnacja roślin doniczkowych w biurze
- Dekoracje na eventy firmowe

**Rodzaje kompozycji:**
- **Recepcja:** duże, reprezentacyjne bukiety (50-80cm)
- **Sale konferencyjne:** eleganckie kompozycje stołowe
- **Biurka:** małe bukiety lub rośliny doniczkowe
- **Przestrzenie wspólne:** większe aranżacje, rośliny doniczkowe

**Rośliny doniczkowe do biura:**
- Zamiokulkas (bardzo wytrzymały, mało światła)
- Monstera (modna, efektowna)
- Fikus (oczyszcza powietrze)
- Sansewieria (niezniszczalna)
- Skrzydłokwiat (kwitnie, oczyszcza)
- Dracena (wysoka, dekoracyjna)

**Korzyści dla firm:**
- Lepsza atmosfera pracy
- Pozytywne wrażenie na klientach
- Oczyszczanie powietrza
- Redukcja stresu pracowników
- Stała faktura VAT
- Brak konieczności dbania o kwiaty

**Obsługiwane lokalizacje:**
Wszystkie dzielnice biznesowe Warszawy: Śródmieście, Mokotów, Wola, Ochota oraz centra biurowe w okolicach (Piaseczno, Konstancin, Marki).

**Cennik:**
Abonamenty od 300 zł/miesiąc (w zależności od liczby kompozycji i częstotliwości wymiany). Możliwość dopasowania pakietu do budżetu firmy.

Zapytaj o bezpłatną wycenę i próbną dostawę!`,
  },
  {
    id: '5',
    title: 'Ogrody warzywne - uprawa warzyw w Warszawie i okolicach',
    content: `Ogród warzywny to doskonały sposób na zdrowe, ekologiczne warzywa prosto z własnego ogrodu. Projektujemy i zakładamy funkcjonalne ogrody warzywne na terenie Warszawy i okolic do 30km.

**Usługi ogrodów warzywnych:**
- Projektowanie układu grządek
- Wysokie grządki z drewna lub kompozytu
- Systemy nawadniania kropelkowego
- Szklarnie tunelowe i inspekty
- Kompostowniki
- Dobór odmian warzyw
- Instruktaż uprawy i pielęgnacji

**Rodzaje grządek:**
- **Wysokie grządki:** łatwiejsze w uprawie, lepsza gleba, mniej chwastów
- **Grządki tradycyjne:** klasyczne, większa powierzchnia uprawy
- **Grządki podwyższone:** kompromis między wysokimi a tradycyjnymi
- **Warzywnik w skrzyniach:** idealne na małe ogrody i tarasy

**Popularne warzywa do uprawy:**
- **Wiosna:** sałaty, rzodkiewki, szpinak, groszek, marchew
- **Lato:** pomidory, ogórki, papryka, cukinia, bakłażan
- **Jesień:** kapusta, brokuły, kalafior, por, buraki
- **Zioła:** bazylia, pietruszka, koper, szczypiorek, tymianek

**Dodatkowe elementy:**
- Krzewy owocowe (maliny, porzeczki, agrest)
- Drzewka owocowe (jabłonie, grusze, śliwy)
- Miejsce na kompost
- Szopa na narzędzia
- Ścieżki z kory lub kostki

**Ekologiczna uprawa:**
Promujemy ekologiczne metody uprawy: kompostowanie, naturalne nawozy, płodozmian, rośliny towarzyszące, biologiczna ochrona przed szkodnikami.

**Lokalizacje:**
Realizujemy ogrody warzywne w całej Warszawie (szczególnie dzielnice z domami: Wilanów, Ursynów, Białołęka, Wawer) oraz w okolicach: Piaseczno, Konstancin, Józefów, Otwock, Izabelin, Stare Babice.

Zapraszamy do kontaktu - pomożemy stworzyć produktywny i piękny ogród warzywny!`,
  },
];

export function SeoArticles() {
  const [expandedArticle, setExpandedArticle] = useState<string | null>(null);

  const toggleArticle = (id: string) => {
    setExpandedArticle(expandedArticle === id ? null : id);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Porady i informacje
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dowiedz się więcej o naszych usługach i obszarze działania
          </p>
        </div>

        <div className="space-y-4">
          {seoArticles.map((article) => (
            <div
              key={article.id}
              className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200"
            >
              <button
                onClick={() => toggleArticle(article.id)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
                aria-expanded={expandedArticle === article.id}
              >
                <h3 className="font-display text-lg md:text-xl font-bold text-gray-900 pr-4">
                  {article.title}
                </h3>
                {expandedArticle === article.id ? (
                  <ChevronUp className="h-6 w-6 text-primary-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-6 w-6 text-primary-600 flex-shrink-0" />
                )}
              </button>
              
              {expandedArticle === article.id && (
                <div className="px-6 pb-6">
                  <div className="prose prose-lg max-w-none text-gray-700">
                    {article.content.split('\n').map((paragraph, idx) => {
                      if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                        return (
                          <h4 key={idx} className="font-bold text-gray-900 mt-4 mb-2">
                            {paragraph.replace(/\*\*/g, '')}
                          </h4>
                        );
                      }
                      if (paragraph.startsWith('- **')) {
                        const [bold, ...rest] = paragraph.substring(4).split(':**');
                        return (
                          <li key={idx} className="ml-4">
                            <strong>{bold}:</strong>{rest.join(':**')}
                          </li>
                        );
                      }
                      if (paragraph.startsWith('- ')) {
                        return (
                          <li key={idx} className="ml-4">
                            {paragraph.substring(2)}
                          </li>
                        );
                      }
                      if (paragraph.trim()) {
                        return (
                          <p key={idx} className="mb-3">
                            {paragraph}
                          </p>
                        );
                      }
                      return null;
                    })}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
