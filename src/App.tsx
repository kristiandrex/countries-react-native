import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CountryListItem from "~/components/CountryListItem";
import Header from "~/components/Header";
import { getAllCountries } from "~/services/countries";
import { ICountry } from "~/types";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "NunitoSans-Light": require("assets/fonts/NunitoSans-Light.ttf"),
    "NunitoSans-SemiBold": require("assets/fonts/NunitoSans-SemiBold.ttf"),
    "NunitoSans-ExtraBold": require("assets/fonts/NunitoSans-ExtraBold.ttf"),
  });

  const [countries, setCountries] = useState<ICountry[]>([]);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  useEffect(() => {
    getAllCountries()
      .then((countries) => setCountries(countries.slice(0, 10)))
      .catch(console.error);
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView onLayout={onLayoutRootView}>
      <Header />
      <View style={{ backgroundColor: "#fafafa", padding: 16 }}>
        <FlatList
          data={countries}
          renderItem={({ item }) => <CountryListItem country={item} />}
          keyExtractor={({ name }) => name.common}
          ItemSeparatorComponent={() => <View style={{ height: 48 }} />}
        />
      </View>
    </SafeAreaView>
  );
}
