export const API_KEY = '059f018bc67d6911bc61dea7629e3b7f';

export const createURL = (type: string, city: string): string =>
  `https://api.openweathermap.org/data/2.5/${type}?q=${city}&appid=${API_KEY}&lang=ja&units=metric`;
