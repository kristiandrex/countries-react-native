import { useEffect, useMemo, useState } from 'react';
import { FlatList, View } from 'react-native';

import CountryListItem from '~/components/CountryListItem';
import Header from '~/components/Header';
import NameFilter from '~/components/NameFilter';
import RegionFilter from '~/components/RegionFilter';
import { Country } from '~/modules/countries/domain/Country';
import { createAPIRestCountryRepository } from '~/modules/countries/infrastructure/APIRestCountryRepository';

const repository = createAPIRestCountryRepository();

export default function HomeScreen() {
  const [countries, setCountries] = useState<Country[]>([]);

  const [filters, setFilters] = useState({
    region: '',
    name: '',
  });

  const filteredCountries = useMemo(() => {
    const region = filters.region.trim().toLocaleLowerCase();
    let filtered = countries;

    if (region) {
      filtered = countries.filter(
        (country) => country.region.toLowerCase() === region,
      );
    }

    const name = filters.name.trim().toLocaleLowerCase();

    if (name) {
      filtered = filtered.filter((country) => {
        const common = country.name.common.toLowerCase();
        return common.startsWith(name);
      });
    }

    return filtered;
  }, [countries, filters]);

  useEffect(() => {
    repository.getAll().then(setCountries).catch(console.error);
  }, []);

  const handleChangeRegion = (region: string) => {
    setFilters((current) => ({ ...current, region }));
  };

  const handleChangeName = (name: string) => {
    setFilters((current) => ({ ...current, name }));
  };

  return (
    <View
      style={{
        backgroundColor: '#fafafa',
        flex: 1,
        height: '100%',
        width: '100%',
      }}
    >
      <Header />
      <View style={{ padding: 16 }}>
        <NameFilter onChange={handleChangeName} />
        <RegionFilter onChange={handleChangeRegion} />
        <FlatList
          data={filteredCountries}
          renderItem={({ item }) => <CountryListItem country={item} />}
          keyExtractor={({ name }) => name.common}
          ItemSeparatorComponent={() => <View style={{ height: 48 }} />}
        />
      </View>
    </View>
  );
}
