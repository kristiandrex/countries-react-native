import { useState } from "react";
import { StyleSheet } from "react-native";
import { Button, Menu } from "react-native-paper";

type RegionFilterProps = {
  onChange: (region: string) => void;
};

export default function RegionFilter({ onChange }: RegionFilterProps) {
  const [visible, setVisible] = useState(false);

  const handleChangeRegion = (region: string) => {
    onChange(region);
    setVisible(false);
  };

  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  const button = (
    <Button
      icon={"chevron-down"}
      onPress={() => setVisible(true)}
      contentStyle={{ flexDirection: "row-reverse" }}
      style={styles.regionFilterButton}
    >
      Filter by Region
    </Button>
  );

  return (
    <Menu
      visible={visible}
      onDismiss={() => setVisible(false)}
      anchor={button}
      style={styles.regionFilterMenu}
    >
      {regions.map((region) => (
        <Menu.Item
          key={region}
          title={region}
          onPress={() => handleChangeRegion(region)}
          style={styles.regionFilterItemMenu}
        />
      ))}
    </Menu>
  );
}

const styles = StyleSheet.create({
  regionFilterButton: {
    backgroundColor: "#fff",
    padding: 8,
    marginBottom: 32,
    borderRadius: 8,
  },
  regionFilterMenu: {},
  regionFilterItemMenu: {},
});
