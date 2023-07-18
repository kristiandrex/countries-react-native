import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, Image } from 'react-native';
import { Text } from 'react-native-paper';

import { RootStackParamList } from 'App';

type Props = NativeStackScreenProps<RootStackParamList, 'Country'>;

export default function CountryScreen({ route }: Props) {
  const country = route.params.country;
  const nativeName = Object.values(country?.name.nativeName)[0].common;

  return (
    <View>
      <Image
        source={{ uri: country?.flags.png }}
        alt={country.flags.alt}
        style={{ width: 320, height: 213 }}
      />
      <Text style={{ fontFamily: 'NunitoSans-ExtraBold' }}>
        {country?.name.common}
      </Text>
      <CountryAttribute title='Native Name' value={nativeName} />
    </View>
  );
}

type CountryAttributeProps = {
  title: string;
  value: string;
};

function CountryAttribute({ title, value }: CountryAttributeProps) {
  return (
    <View style={{ display: 'flex', flexDirection: 'row' }}>
      <Text style={{ fontFamily: 'NunitoSans-SemiBold' }}>{title}: </Text>
      <Text>{value}</Text>
    </View>
  );
}
