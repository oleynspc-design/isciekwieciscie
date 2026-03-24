export interface Project {
  id: string;
  title: string;
  category: 'ogrody' | 'florystyka' | 'kombinacja';
  description: string;
  longDescription?: string;
  images: string[];
  beforeAfterImages?: {
    before: string;
    after: string;
  };
  location?: string;
  area?: string;
  duration?: string;
  tags?: string[];
  client?: string;
  createdAt: string;
}

export const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Ogród przydomowy w Wilanowie',
    category: 'ogrody',
    description: 'Kompleksowe zaprojektowanie i wykonanie ogrodu przydomowego o powierzchni 500m². Projekt obejmował trawnik, rabaty kwiatowe, ścieżki oraz strefę relaksu z altaną.',
    longDescription: 'Realizacja ogrodu w Wilanowie to kompleksowy projekt, który przekształcił zaniedbany teren w piękną przestrzeń do wypoczynku. Projekt obejmował: profesjonalne przygotowanie terenu, system nawadniania automatycznego, trawnik z siewu, rabaty kwiatowe z roślinami wieloletnimi i sezonowymi, ścieżki z kostki brukowej, altanę ogrodową z pergolą oraz oświetlenie LED. Dobór roślin został dostosowany do warunków słonecznych i gleby. Całość uzupełniono elementami małej architektury.',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    location: 'Wilanów, Warszawa',
    area: '500m²',
    duration: '3 tygodnie',
    tags: ['projektowanie ogrodów', 'trawnik', 'rabaty kwiatowe', 'altana', 'nawadnianie'],
    createdAt: '2024-03-15',
  },
  {
    id: '2',
    title: 'Bukiet ślubny - styl rustykalny',
    category: 'florystyka',
    description: 'Delikatny bukiet ślubny w stylu rustykalnym z polnymi kwiatami, różami ogrodowymi i naturalnymi zieleniami. Idealny na wesele w plenerze.',
    longDescription: 'Bukiet ślubny wykonany na zamówienie dla wesela w stylu rustykalnym. Kompozycja składała się z: róż ogrodowych w odcieniach pudrowego różu, polnych kwiatów (rumianek, lawenda), eukaliptusa, gipsówki oraz naturalnych traw. Bukiet został związany lnianą wstążką z koronkowym akcentem. Do kompletu wykonaliśmy również butonierki dla Pana Młodego i świadków oraz dekoracje na stoły weselne.',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    location: 'Konstancin-Jeziorna',
    tags: ['bukiet ślubny', 'wesele rustykalny', 'róże ogrodowe', 'florystyka ślubna'],
    createdAt: '2024-03-10',
  },
  {
    id: '3',
    title: 'Aranżacja tarasu z roślinami - Mokotów',
    category: 'kombinacja',
    description: 'Projekt i realizacja aranżacji tarasu 40m² z wykorzystaniem roślin doniczkowych, sezonowych kompozycji kwiatowych i elementów dekoracyjnych.',
    longDescription: 'Taras w apartamencie na Mokotowie został przekształcony w zieloną oazę. Projekt obejmował: dobór roślin odpornych na warunki balkonowe (hortensje, surfinie, pelargonie), duże donice ceramiczne i drewniane, rośliny pnące na pergolę (winobluszcz, clematis), sezonowe kompozycje kwiatowe, ziołowy ogródek (bazylia, rozmaryn, tymianek) oraz system nawadniania kropelkowego. Całość uzupełniono meblami ogrodowymi i oświetleniem.',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    location: 'Mokotów, Warszawa',
    area: '40m²',
    duration: '1 tydzień',
    tags: ['taras', 'rośliny doniczkowe', 'aranżacja balkonu', 'zioła'],
    createdAt: '2024-03-05',
  },
  {
    id: '4',
    title: 'Ogród japoński - Konstancin',
    category: 'ogrody',
    description: 'Minimalistyczny ogród w stylu japońskim z kamiennym ogrodem zen, stawem koi, mostkiem i starannie dobranymi roślinami orientalnymi.',
    longDescription: 'Ogród japoński w Konstancinie to projekt inspirowany tradycyjnymi ogrodami zen. Realizacja obejmowała: kamienny ogród zen z białym żwirem i głazami, staw z karpiami koi i systemem filtracji, drewniany mostek w stylu japońskim, rośliny orientalne (azalie, klony japońskie, bambusy, mchy), kamienne latarnie i rzeźby, ścieżki z płyt kamiennych oraz miejsce do medytacji. Projekt został wykonany zgodnie z zasadami feng shui.',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg', '/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    beforeAfterImages: {
      before: '/placeholder.svg',
      after: '/placeholder.svg',
    },
    location: 'Konstancin-Jeziorna',
    area: '300m²',
    duration: '5 tygodni',
    tags: ['ogród japoński', 'staw koi', 'ogród zen', 'rośliny orientalne'],
    createdAt: '2024-02-28',
  },
  {
    id: '5',
    title: 'Dekoracje kwiatowe na wesele - Pałac Jabłonna',
    category: 'florystyka',
    description: 'Kompleksowa oprawa florystyczna wesela w Pałacu Jabłonna - bukiety, dekoracje stołów, ściana kwiatowa, dekoracja sali i kościoła.',
    longDescription: 'Pełna oprawa florystyczna eleganckiego wesela w Pałacu Jabłonna. W skład realizacji wchodziły: bukiet ślubny Panny Młodej z białych róż i piwonii, butonierki dla Pana Młodego i świadków, kompozycje na stoły weselne (30 sztuk), ściana kwiatowa 3x2m jako tło do zdjęć, dekoracja kościoła (ołtarz, ławki, wejście), dekoracja sali weselnej, girlandy kwiatowe, dekoracja samochodu. Dominowały białe i kremowe kwiaty z akcentami zieleni.',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg', '/placeholder.svg', '/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    location: 'Jabłonna k. Warszawy',
    tags: ['wesele', 'ściana kwiatowa', 'dekoracje ślubne', 'bukiet ślubny', 'piwonie'],
    createdAt: '2024-02-20',
  },
  {
    id: '6',
    title: 'Balkon pełen zieleni - Śródmieście',
    category: 'kombinacja',
    description: 'Aranżacja małego balkonu miejskiego 8m² z wykorzystaniem roślin pnących, ziół kulinarnych i sezonowych kwiatów.',
    longDescription: 'Mały balkon w centrum Warszawy przekształcony w zieloną oazę. Projekt zakładał maksymalne wykorzystanie przestrzeni pionowej: rośliny pnące na kratach (bluszcz, winobluszcz), wiszące donice z surfinią i pelargonią, ogródek ziołowy w skrzynkach (bazylia, mięta, rozmaryn, tymianek, pietruszka), małe drzewko cytrusowe w donicy, sezonowe kwiaty (bratki, begonie), system nawadniania kropelkowego oraz składane meble balkonowe.',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    location: 'Śródmieście, Warszawa',
    area: '8m²',
    duration: '2 dni',
    tags: ['balkon', 'rośliny pnące', 'zioła', 'małe przestrzenie'],
    createdAt: '2024-02-15',
  },
  {
    id: '7',
    title: 'Ogród warzywny - Piaseczno',
    category: 'ogrody',
    description: 'Funkcjonalny ogród warzywny z wysokimi grządkami, systemem nawadniania, szklarnią i kompostownikiem.',
    longDescription: 'Ogród warzywny w Piasecznie zaprojektowany dla rodziny pragnącej uprawiać własne warzywa. Realizacja obejmowała: 8 wysokich grządek (1,2m x 3m) z drewna, system nawadniania kropelkowego z timerem, szklarnię tunelową 3x6m, kompostownik trzykomorowy, ścieżki z kory, ogrodzenie przed zwierzyną, miejsce na narzędzia oraz nasadzenia: pomidory, ogórki, papryka, sałaty, marchew, buraki, zioła. Dodatkowo posadzono krzewy owocowe (maliny, porzeczki).',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    location: 'Piaseczno',
    area: '150m²',
    duration: '2 tygodnie',
    tags: ['ogród warzywny', 'wysokie grządki', 'szklarnia', 'uprawa warzyw'],
    createdAt: '2024-02-10',
  },
  {
    id: '8',
    title: 'Kompozycje kwiatowe do biura - Mokotów',
    category: 'kombinacja',
    description: 'Regularne dostawy świeżych kompozycji kwiatowych do przestrzeni biurowej. Abonament miesięczny z wymianą co tydzień.',
    longDescription: 'Stała współpraca z biurem w Warszawie - cotygodniowa dostawa świeżych kompozycji kwiatowych. Usługa obejmuje: 5 dużych kompozycji do recepcji i sal konferencyjnych, 10 mniejszych bukietów na biurka, dobór kwiatów sezonowych w kolorystyce firmy (biel, zieleń), wymianę co 7 dni, donice ceramiczne w cenie, pielęgnację roślin doniczkowych w biurze (fikusy, monstery, zamiokulkasy). Kwiaty zawsze świeże, dopasowane do pory roku.',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    location: 'Mokotów, Warszawa',
    tags: ['kwiaty do biura', 'abonament kwiatowy', 'kompozycje firmowe'],
    createdAt: '2024-02-05',
  },
  {
    id: '9',
    title: 'Ogród przy domu jednorodzinnym - Józefów',
    category: 'ogrody',
    description: 'Projekt i wykonanie ogrodu 600m² z trawnikiem, rabatami, oczkiem wodnym i miejscem do grillowania.',
    longDescription: 'Kompleksowy projekt ogrodu przy nowo wybudowanym domu w Józefowie. Realizacja obejmowała: profesjonalne przygotowanie terenu i humusowanie, trawnik z rolki (400m²), rabaty kwiatowe z roślinami wieloletnimi, oczko wodne z kaskadą, miejsce do grillowania z kamiennym grillem, ścieżki z kostki brukowej, automatyczny system nawadniania, oświetlenie ogrodowe LED, nasadzenia drzew (brzoza, klon) i krzewów ozdobnych. Projekt uwzględniał strefę zabaw dla dzieci.',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    location: 'Józefów',
    area: '600m²',
    duration: '4 tygodnie',
    tags: ['projektowanie ogrodów', 'oczko wodne', 'trawnik z rolki', 'grill ogrodowy'],
    createdAt: '2024-01-25',
  },
  {
    id: '10',
    title: 'Bukiety okolicznościowe - Urodziny',
    category: 'florystyka',
    description: 'Seria bukietów urodzinowych w żywych kolorach z róż, gerber, alstromerii i zieleni dekoracyjnej.',
    longDescription: 'Bukiety urodzinowe wykonane na zamówienie dla dużej imprezy. Zrealizowaliśmy 15 bukietów w różnych rozmiarach, wszystkie w żywej kolorystyce: róże w odcieniach różu i czerwieni, gerbery pomarańczowe i żółte, alstromerie, eustomy, liście monstery, eukaliptus. Każdy bukiet zapakowany w elegancki papier z satynową wstążką. Dodatkowo przygotowaliśmy dekorację stołu urodzinowego z kwiatów i świec.',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    location: 'Warszawa',
    tags: ['bukiety okolicznościowe', 'urodziny', 'róże', 'gerbery'],
    createdAt: '2024-01-18',
  },
];
