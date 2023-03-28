import { memo } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ICountry } from "~/types";

const numberFormatter = new Intl.NumberFormat("en-US");

type CountryListItemProps = {
  country: ICountry;
};

function CountryListItem({ country }: CountryListItemProps) {
  const attributes = {
    Population: numberFormatter.format(country.population),
    Region: country.region,
    Capital: country.capital,
  };

  return (
    <View style={styles.countryListItem}>
      <View style={styles.countryCard}>
        <Image
          source={{ uri: country.flags.png }}
          style={styles.countryFlag}
          alt={country.flags.alt}
        />
        <View style={styles.countryInfo}>
          <Text style={styles.countryName}>{country.name.common}</Text>
          {Object.entries(attributes).map(([key, value]) => (
            <Text key={key}>
              <Text style={styles.countryAttributeTitle}>{key}: </Text>
              <Text style={styles.countryAttribute}>{value}</Text>
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
}

const CountryListItemMemo = memo(CountryListItem, (prevProps, nextProps) => {
  return prevProps.country.name.common === nextProps.country.name.common;
});

export default CountryListItemMemo;

const styles = StyleSheet.create({
  countryListItem: {
    display: "flex",
    alignItems: "center",
  },
  countryCard: {
    width: 320,
    backgroundColor: "#fff",
    overflow: "hidden",
    borderRadius: 12,
  },
  countryInfo: {
    padding: 16,
  },
  countryFlag: {
    width: 320,
    height: 213,
  },
  countryName: {
    fontFamily: "NunitoSans-ExtraBold",
  },
  countryAttributeTitle: {
    fontFamily: "NunitoSans-SemiBold",
  },
  countryAttribute: {
    fontFamily: "NunitoSans-Light",
  },
});
