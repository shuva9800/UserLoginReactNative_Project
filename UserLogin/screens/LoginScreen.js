import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import Toast from 'react-native-toast-message';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    axios.post('http://localhost:4000/api/v1/auth/login', { email, password })
      .then((response) => {
        if (response.data.token) {
          Toast.show({
            type: 'success',
            text1: 'Login successful',
          });
        } else {
          Toast.show({
            type: 'error',
            text1: 'Login failed',
            text2: response.data.message,
          });
        }
      })
      .catch(() => {
        Toast.show({
          type: 'error',
          text1: 'Login failed',
          text2: 'Please try again',
        });
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: { borderWidth: 1, marginBottom: 10, padding: 8 },
  header: { fontSize: 24, marginBottom: 10 },
});
