import { Country } from './Country';

export type CountryRepository = {
  getAll: () => Promise<Country[]>;
};
