import { Country } from '~/modules/countries/domain/Country';
import { CountryRepository } from '~/modules/countries/domain/CountryRepository';

const API_URL = 'https://restcountries.com/v3.1';

export function createAPIRestCountryRepository(): CountryRepository {
  return {
    getAll,
  };
}

async function getAll(): Promise<Country[]> {
  const fields = [
    'name',
    'capital',
    'population',
    'region',
    'subregion',
    'tld',
    'currencies',
    'languages',
    'borders',
    'flags',
  ];

  const response = await fetch(`${API_URL}/all?fields=${fields.join(',')}`);
  const countries = await response.json();
  return countries;
}
