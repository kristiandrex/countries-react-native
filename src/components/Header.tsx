import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Header() {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        paddingVertical: 32,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          fontFamily: 'NunitoSans-ExtraBold',
        }}
      >
        Where in the world?
      </Text>
      <Button
        icon={({ color, size }) => (
          <FontAwesome5 name='moon' size={size} color={color} />
        )}
      >
        Dark mode
      </Button>
    </View>
  );
}
