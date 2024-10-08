import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import axios from "axios";
import Toast from "react-native-toast-message";
import { Link, useRouter } from "expo-router";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignup = async () => {
    try {
      // const response = await axios.post(
      //   "http://localhost:4000/api/v1/auth/signup",
      const response = await axios.post('https://native-backend-w04p.onrender.com/api/v1/auth/signup',
        {
          firstName,
          lastName,
          email,
          password,
        }
      );
      Toast.show({
        text1: "Success",
        text2: response.data.message,
        position: 'top', 
        visibilityTime: 4000,
      });
      router.navigate("/Login");
    } catch (error) {
      console.log(error);
      Toast.show({
        text1: "Error",
        text2: error.response.data.message,
      });
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
        style={styles.input}
      />
      <TextInput
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Sign Up" onPress={handleSignup} />
      <Toast ref={(ref) => Toast.setRef(ref)} />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Already have an account?</Text>
        <Link href={"/Login"} style={{ color: "blue" }}>
          Login
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default Signup;
