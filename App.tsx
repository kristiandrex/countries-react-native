import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';

import { expo } from 'app.json';
import { Country } from '~/modules/countries/domain/Country';
import CountryScreen from '~/screens/CountryScreen';
import HomeScreen from '~/screens/HomeScreen';

export type RootStackParamList = {
  Home: undefined;
  Country: { country: Country };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

SplashScreen.preventAutoHideAsync();

export default function Main() {
  const [fontsLoaded] = useFonts({
    'NunitoSans-Light': require('assets/fonts/NunitoSans-Light.ttf'),
    'NunitoSans-SemiBold': require('assets/fonts/NunitoSans-SemiBold.ttf'),
    'NunitoSans-ExtraBold': require('assets/fonts/NunitoSans-ExtraBold.ttf'),
  });

  useEffect(() => {
    async function hideSplashScreen() {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }

    hideSplashScreen().catch(console.error);
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='Country' component={CountryScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(expo.name, () => Main);
