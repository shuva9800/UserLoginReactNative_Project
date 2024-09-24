import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet,Text} from 'react-native';
import axios from 'axios';
import Toast from 'react-native-toast-message';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log(password, email)

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:4000/api/v1/auth/login', {
        email,
        password,
      });
      Toast.show({
        text1: 'Success',
        text2: response.data.message,
      });
      navigation.navigate('Home');
    } catch (error) {
      Toast.show({
        text1: 'Error',
        text2: error.response.data.message,
      });
    }
  };

  return (
    <View style={styles.container}>
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
      <Button title="Login" onPress={handleLogin} />
      <Toast ref={(ref) => Toast.setRef(ref)} />
      <View style={{display:'flex',flexDirection:'row', justifyContent:'center',alignItems:'center'}}>
        <Text>Dont have an account?</Text>
        <Text onPress={() => navigation.navigate('Signup')} style={{color:'blue'}}>
          SignUp
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default LoginScreen;
