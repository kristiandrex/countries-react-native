import { View, Text } from "react-native";

export default function Header() {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        paddingHorizontal: 16,
        paddingVertical: 32,
      }}
    >
      <Text style={{ fontFamily: "NunitoSans-ExtraBold" }}>
        Where in the world?
      </Text>
    </View>
  );
}
