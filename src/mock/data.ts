export interface Event {
  id: number;
  year: number;
  description: string;
}

export interface TimePeriod {
  id: number;
  title: string;
  startYear: number;
  endYear: number;
  events: Event[];
}

export const historicalPeriods: TimePeriod[] = [
  {
    id: 1,
    title: 'Технологии',
    startYear: 1980,
    endYear: 1986,
    events: [
      { id: 1, year: 1980, description: 'Выпуск Sinclair ZX80 — первого домашнего компьютера стоимостью менее 100 фунтов стерлингов.' },
      { id: 2, year: 1981, description: 'IBM представляет первый персональный компьютер IBM PC.' },
      { id: 3, year: 1982, description: 'Commodore 64 становится самым продаваемым компьютером всех времен.' },
      { id: 4, year: 1983, description: 'Motorola выпускает первый коммерческий мобильный телефон DynaTAC 8000X.' },
      { id: 5, year: 1984, description: 'Apple выпускает первый Macintosh.' },
      { id: 6, year: 1985, description: 'Microsoft выпускает Windows 1.0.' },
    ],
  },
  {
    id: 2,
    title: 'Кино',
    startYear: 1987,
    endYear: 1993,
    events: [
      { id: 7, year: 1987, description: 'Выход фильма "Хищник" с Арнольдом Шварценеггером.' },
      { id: 8, year: 1988, description: 'Премьера "Крепкого орешка", установившего новый стандарт боевиков.' },
      { id: 9, year: 1989, description: 'Тим Бертон выпускает "Бэтмена".' },
      { id: 10, year: 1990, description: 'Выход "Один дома", ставшего рождественской классикой.' },
      { id: 11, year: 1991, description: '"Терминатор 2: Судный день" революционизирует спецэффекты.' },
      { id: 12, year: 1993, description: '"Парк Юрского периода" Стивена Спилберга.' },
    ],
  },
  {
    id: 3,
    title: 'Литература',
    startYear: 1994,
    endYear: 2000,
    events: [
      { id: 13, year: 1994, description: 'Харуки Мураками публикует "Хроники заводной птицы".' },
      { id: 14, year: 1995, description: 'Выходит "Слепота" Жозе Сарамаго.' },
      { id: 15, year: 1996, description: 'Джордж Р. Р. Мартин выпускает "Игру престолов".' },
      { id: 16, year: 1997, description: 'Джоан Роулинг публикует "Гарри Поттер и философский камень".' },
      { id: 17, year: 1999, description: 'Дж. М. Кутзее получает Букеровскую премию за "Бесчестье".' },
      { id: 18, year: 2000, description: 'Дэн Браун выпускает "Ангелы и демоны".' },
    ],
  },
  {
    id: 4,
    title: 'Спорт',
    startYear: 2001,
    endYear: 2007,
    events: [
      { id: 19, year: 2001, description: 'Михаэль Шумахер выигрывает свой 4-й титул Формулы-1.' },
      { id: 20, year: 2002, description: 'Бразилия выигрывает Чемпионат мира по футболу в 5-й раз.' },
      { id: 21, year: 2004, description: 'Олимпийские игры возвращаются в Афины.' },
      { id: 22, year: 2005, description: 'Ливерпуль выигрывает Лигу Чемпионов в легендарном матче в Стамбуле.' },
      { id: 23, year: 2006, description: 'Италия побеждает Францию в финале ЧМ по футболу.' },
      { id: 24, year: 2007, description: 'Кими Райкконен становится чемпионом Формулы-1.' },
    ],
  },
  {
    id: 5,
    title: 'Музыка',
    startYear: 2008,
    endYear: 2014,
    events: [
      { id: 25, year: 2008, description: 'Lady Gaga выпускает дебютный альбом "The Fame".' },
      { id: 26, year: 2009, description: 'Майкл Джексон уходит из жизни, оставляя огромное наследие.' },
      { id: 27, year: 2010, description: 'Eminem выпускает альбом "Recovery".' },
      { id: 28, year: 2011, description: 'Adele выпускает альбом "21", ставший мировым бестселлером.' },
      { id: 29, year: 2012, description: 'PSY "Gangnam Style" становится первым видео с 1 млрд просмотров.' },
      { id: 30, year: 2013, description: 'Daft Punk выпускают хит "Get Lucky".' },
    ],
  },
  {
    id: 6,
    title: 'Наука',
    startYear: 2015,
    endYear: 2022,
    events: [
      { id: 31, year: 2015, description: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды' },
      { id: 32, year: 2016, description: 'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11' },
      { id: 33, year: 2017, description: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi' },
      { id: 34, year: 2019, description: 'Получено первое в истории изображение черной дыры.' },
      { id: 35, year: 2020, description: 'SpaceX запускает первый частный пилотируемый корабль к МКС.' },
      { id: 36, year: 2021, description: 'Марсоход Perseverance успешно приземляется на Марс.' },
    ],
  },
];
