import { Image, StyleSheet, Platform } from "react-native";
import { HelloWave } from "@/components/HelloWave";

import { View, Text } from "react-native-web";

export default function HomeScreen({ navigation }) {
  return (
    <View
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <View style={styles.stepContainer}>
        <Text onPress={() => navigation.navigate("Signup")}>Sign Up</Text>
        <Text onPress={() => navigation.navigate("Login")}>Login</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    // gap: 8,
    marginBottom: 8,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",

    // maxWidth:'50%',
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
