import { useRouter } from "expo-router";
import { Text, View, Button } from "react-native";


export default function Index() {
  const router = useRouter();
  const shift = () => {
    router.navigate("/Signup");
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Well Come To Home Page</Text>
      <Text style={{color:"blue",paddingVertical:10}}>Press the below button for signup page</Text>
      <Button title="continue" onPress={shift} />
     
    </View>
  );
}
