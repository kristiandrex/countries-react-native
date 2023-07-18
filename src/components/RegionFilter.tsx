import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Menu, useTheme } from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

type RegionFilterProps = {
  onChange: (region: string) => void;
};

export default function RegionFilter({ onChange }: RegionFilterProps) {
  const [visible, setVisible] = useState(false);
  const theme = useTheme();

  const handleChangeRegion = (region: string) => {
    onChange(region);
    setVisible(false);
  };

  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  const button = (
    <Button
      mode='contained'
      textColor={theme.colors.primary}
      icon={({ color, size }) => (
        <FontAwesome5 name='chevron-down' size={size} color={color} />
      )}
      onPress={() => setVisible(true)}
      contentStyle={{ flexDirection: 'row-reverse' }}
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
    backgroundColor: '#fff',
    padding: 8,
    marginBottom: 32,
    borderRadius: 8,
  },
  regionFilterMenu: {},
  regionFilterItemMenu: {},
});
