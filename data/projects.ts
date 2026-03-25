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
    images: [
      'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80',
      'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80',
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
      'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&q=80',
      'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=800&q=80'
    ],
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
    images: [
      'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?w=800&q=80',
      'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80',
      'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&q=80'
    ],
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
    images: [
      'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80',
      'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=800&q=80',
      'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=800&q=80',
      'https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=800&q=80'
    ],
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
    images: [
      'https://images.unsplash.com/photo-1519408299519-b7a0274f7d67?w=800&q=80',
      'https://images.unsplash.com/photo-1604684161718-0e4b8c1f7e7e?w=800&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
      'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=800&q=80',
      'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=800&q=80',
      'https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=800&q=80'
    ],
    beforeAfterImages: {
      before: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80',
      after: 'https://images.unsplash.com/photo-1519408299519-b7a0274f7d67?w=800&q=80',
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
    images: [
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80',
      'https://images.unsplash.com/photo-1470137430626-983cc4f6e0c7?w=800&q=80',
      'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800&q=80',
      'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=800&q=80',
      'https://images.unsplash.com/photo-1522057306606-cd132a00f701?w=800&q=80'
    ],
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
    images: [
      'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80',
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&q=80',
      'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&q=80'
    ],
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
    images: [
      'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80',
      'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80',
      'https://images.unsplash.com/photo-1592419044706-39796d40f98c?w=800&q=80',
      'https://images.unsplash.com/photo-1595855759920-86582396756a?w=800&q=80'
    ],
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
    images: [
      'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=800&q=80',
      'https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=800&q=80',
      'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=800&q=80'
    ],
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
    images: [
      'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80',
      'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=800&q=80',
      'https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=800&q=80',
      'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&q=80',
      'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80'
    ],
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
    images: [
      'https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=800&q=80',
      'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=800&q=80',
      'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=800&q=80'
    ],
    location: 'Warszawa',
    tags: ['bukiety okolicznościowe', 'urodziny', 'róże', 'gerbery'],
    createdAt: '2024-01-18',
  },
];
