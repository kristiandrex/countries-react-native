import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useMemo, useState } from "react";
import { FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CountryListItem from "~/components/CountryListItem";
import Header from "~/components/Header";
import RegionFilter from "~/components/RegionFilter";
import { getAllCountries } from "~/services/countries";
import { ICountry } from "~/types";
import NameFilter from "./components/NameFilter";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "NunitoSans-Light": require("assets/fonts/NunitoSans-Light.ttf"),
    "NunitoSans-SemiBold": require("assets/fonts/NunitoSans-SemiBold.ttf"),
    "NunitoSans-ExtraBold": require("assets/fonts/NunitoSans-ExtraBold.ttf"),
  });

  const [countries, setCountries] = useState<ICountry[]>([]);
  const [filters, setFilters] = useState({
    region: "",
    name: "",
  });

  const filteredCountries = useMemo(() => {
    const region = filters.region.trim().toLocaleLowerCase();
    let filtered = countries;

    if (region) {
      filtered = countries.filter(
        (country) => country.region.toLowerCase() === region
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

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  useEffect(() => {
    getAllCountries().then(setCountries).catch(console.error);
  }, []);

  const handleChangeRegion = (region: string) => {
    setFilters((current) => ({ ...current, region }));
  };

  const handleChangeName = (name: string) => {
    setFilters((current) => ({ ...current, name }));
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView
      onLayout={onLayoutRootView}
      style={{ backgroundColor: "#fafafa", flex: 1 }}
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
    </SafeAreaView>
  );
}
