export interface ICountry {
  flags: Flags;
  name: Name;
  tld: string[];
  currencies: ICurrencies;
  capital: string[];
  region: string;
  subregion: string;
  languages: ILanguages;
  borders: string[];
  population: number;
}

interface Flags {
  png: string;
  alt: string;
}

interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}

interface NativeName {
  [key: string]: ILanguages;
}

interface ICurrencies {
  [key: string]: ICurrency;
}

interface ICurrency {
  name: string;
  symbol: string;
}

interface ILanguages {
  [key: string]: string;
}
