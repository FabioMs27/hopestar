import React from 'react';
import { StyleSheet, View, Image, Text, TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();

  function handleNavigateToHome() {
    navigation.navigate('TabNavHome');
  }

  function handleNavigateToRegister() {
    navigation.navigate('Register');
  }

  return (
    <View style={styles.main}>
      <Image source={require('../../assets/logo.png')} />
      <Text style={styles.title}>HOPESTAR</Text>

      <View style={styles.footer}>
        <TextInput 
          style={styles.input}
          placeholder="username"
        />

        <TextInput 
          style={styles.input}
          placeholder="****"
        />

        <RectButton style={styles.buttonLogin} onPress={handleNavigateToHome}>
          <Text style={styles.buttonText}>Login</Text>
        </RectButton>

        <RectButton style={styles.buttonRegister} onPress={handleNavigateToRegister}>
          <Text style={styles.buttonText}>Registrar</Text>
        </RectButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 50,
    alignItems: 'center'
  },

  footer: {
    flex: 1,
    marginTop: 240
  },

  title: {
    color: '#000',
    fontSize: 32,
    fontWeight: "bold",
    maxWidth: 400,
    marginTop: 20,
  },

  input: {
    height: 60,
    width: 300,
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16
  },

  buttonLogin: {
    backgroundColor: '#1E90FF',
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center'
  },

  buttonRegister: {
    backgroundColor: '#32CD32',
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 30,
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default Login;