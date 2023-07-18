export type Country = {
  flags: CountryFlag;
  name: ContryName;
  tld: string[];
  currencies: CountryCurrencies;
  capital: string[];
  region: string;
  subregion: string;
  languages: CountryLanguage;
  borders: string[];
  population: number;
};

type CountryFlag = {
  png: string;
  alt: string;
};

type ContryName = {
  common: string;
  official: string;
  nativeName: CountryNativeName;
};

type CountryNativeName = {
  [key: string]: CountryLanguage;
};

type CountryCurrencies = {
  [key: string]: CountryCurrency;
};

type CountryCurrency = {
  name: string;
  symbol: string;
};

type CountryLanguage = {
  common: string;
};
