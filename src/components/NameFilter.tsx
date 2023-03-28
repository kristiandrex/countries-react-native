import { TextInput } from "react-native-paper";
import { useState } from "react";

type NameFilterProps = {
  onChange: (name: string) => void;
};

export default function NameFilter({ onChange }: NameFilterProps) {
  const [value, setValue] = useState("");

  const handleSearch = () => {
    onChange(value);
  };

  const button = <TextInput.Icon icon={"magnify"} onPress={handleSearch} />;

  return (
    <TextInput
      style={{ marginBottom: 32 }}
      placeholder="Search for a country"
      left={button}
      value={value}
      onChangeText={setValue}
    />
  );
}
