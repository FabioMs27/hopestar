import React from 'react';
import { StyleSheet, View, Image, Text, TextInput, Alert } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';


const Login = () => {
  const navigation = useNavigation();
  var username: string;
  var password: string;

  function handleNavigateToHome() {
    console.log(username, password)
    if (username == "admin" && password == "123") {
      // navigation.navigate('PatientCheck');
      navigation.navigate('TabNavHome');
    } else {
      Alert.alert(
        "Erro no Login",
        "Usuário ou senha incorretos",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );
    }
  }

  function handleNavigateToRegister() {
    navigation.navigate('Register');
  }

  function onChangeUsername(text: string) {
    username = text;
  }

  function onChangePassword(text: string) {
    password = text;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Image source={require('../../assets/logo.png')} />
        <Text style={styles.title}>HOPESTAR</Text>
      </View>
      

      <View style={styles.footer}>
        <TextInput 
          style={styles.input}
          placeholder="admin"
          onChangeText={text => onChangeUsername(text)}
        />

        <TextInput 
          style={styles.input}
          placeholder="123"
          autoCorrect={false}
          secureTextEntry={true}
          onChangeText={text => onChangePassword(text)}
        />

        <RectButton style={styles.buttonLogin} onPress={handleNavigateToHome}>
          <Text style={styles.buttonText}>Login</Text>
        </RectButton>

        <RectButton style={styles.buttonRegister} onPress={handleNavigateToRegister}>
          <Text style={styles.buttonText}>Registrar</Text>
        </RectButton>

        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    height: '45%',
    alignItems: 'center',
  },
  title: {
    color: '#000',
    fontSize: 32,
    fontWeight: "500",
    marginTop: 20,
  },
  footer: {
    flexDirection: 'column',
    height: '40%',
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center'
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
    width: 300,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonRegister: {
    backgroundColor: '#32CD32',
    height: 60,
    width: 300,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '700'
  }
});

export default Login;