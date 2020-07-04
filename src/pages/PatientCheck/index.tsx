import React from 'react';
import { StyleSheet, View, Button, Text, SafeAreaView, Alert } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const PatientCheck = () => {
  let intervalId = setInterval(() => {
    this.GenerateRandomNumber();
    if (this.state.stopTimer) {
      clearInterval(intervalId);
    }
  }, 5000);

  this.state = {
    Temperatura: '----',
    Pressao: '----',
    Resultado: 'estado do paciente',
    stopTimer: false,
  };

  function GenerateRandomNumber() {
    let temp = this.getRandom(33.0, 43.0);
    let press = this.getRandom(70.0, 170.0);

    this.setState({
      Temperatura: temp.toFixed(1),
      Pressao: press.toFixed(2).replace('.', '/'),
    });

    this.verificarPressao(temp, press);
  }
  function getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }

  function createAlert() {
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('dang') },
      ],
      { cancelable: false }
    );
  }
  function verificarPressao(temperatura, pressao) {
    if (temperatura < 35.8 || temperatura > 37.8) {
      this.setState({
        Resultado:
          'O Paciente está precisando de Ajuda, Temperatura fora do padrão!',
          stopTimer: true,
      });
      this.createAlert();
    } else if (pressao < 90.6 || pressao > 120.8) {
      this.setState({
        Resultado:
          'O Paciente está precisando de Ajuda, Pressão fora do padrão',
        stopTimer: true,
      });
      this.createAlert();
    } else {
      this.setState({
        Resultado: 'O Paciente está bem',
      });
    }
  }

  return (
    <View style={styles.main}>
      <SafeAreaView>
        <View style={styles.row}>
          <Text style={styles.text}>
            Temperatura: {this.state.Temperatura}°C
          </Text>
        </View>

        <View style={styles.seperator} />

        <View style={styles.row}>
          <Text style={styles.text}>Pressão: {this.state.Pressao} mmHg</Text>
        </View>

        <View style={styles.seperator} />

        <View style={styles.MainContainer}>
          <Text style={styles.resultado}>{this.state.Resultado}</Text>
          {/* <Button title="Começar o Monitoramento" onPress={} /> */}
        </View>
      </SafeAreaView>
    </View>
  );
}


const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 30,
    paddingVertical: 16,
  },
  text: {
    fontSize: 18,
    color: '#343434',
  },
  MainContainer: {
    // flex: 1,
    paddingVertical: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  seperator: {
    backgroundColor: '#E2E2E2',
    height: StyleSheet.hairlineWidth,
    marginLeft: 20,
  },
  resultado: {
    fontSize: 14,
    color: '#343434',
  },
});

export default Login;