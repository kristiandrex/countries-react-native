import { useState } from 'react';
import { TextInput } from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

type NameFilterProps = {
  onChange: (name: string) => void;
};

export default function NameFilter({ onChange }: NameFilterProps) {
  const [value, setValue] = useState('');

  const handleSearch = () => {
    onChange(value);
  };

  const button = (
    <TextInput.Icon
      icon={({ color, size }) => (
        <FontAwesome5 name='search' size={size} color={color} />
      )}
      onPress={handleSearch}
    />
  );

  return (
    <TextInput
      style={{ marginBottom: 32 }}
      placeholder='Search for a country'
      left={button}
      value={value}
      onChangeText={setValue}
    />
  );
}
