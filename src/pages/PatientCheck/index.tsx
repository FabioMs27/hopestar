import React from 'react';
import { StyleSheet, View, Button, Text, SafeAreaView, Alert } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const PatientCheck = () => {
  setInterval(() => {
    GenerateRandomNumber();
    if (stopTimer) {
      clearInterval(intervalId);
    }
  }, 5000);

  //const DATA = [
    //{
      //Pressao: ' ',
      //Temperatura: ' ',
    //},
  //];

  let Temperatura = "----";
  let Pressao = "----";
  const dicttempNormal = {min: 35.8, max: 37.8};
  const dictpressNormal = {min: 90.6, max: 120.8};
  const ResultadoPressao = "Estado do paciente";
  const ResultadoTemperatura = "Estado do paciente";
  const stopTimer = false;

  function GenerateRandomNumber() {

    let tempMin = dicttempNormal["min"] -= 2e-4
    let tempMax = dicttempNormal["max"] += 2e-4

    let pressMin = dictpressNormal["min"] -= 2e-2
    let pressMax = dictpressNormal["max"] += 2e-2

    let temp = getRandom(tempMin,tempMax)
    let press = getRandom(pressMin,pressMax)

    
    Temperatura = temp.toFixed(1)
    Pressao = press.toFixed(2).replace('.','/')

    console.log(Temperatura);
    updateView();
    verificarPressao(temp, press);

  }

  function getRandom(min, max) {

    // = (Math.floor(Math.random()*100) + ran_val)
    return ((Math.random() * (max - min)) + min);

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
      
      Resultado =
        'O Paciente está precisando de Ajuda, Temperatura fora do padrão!'
      stopTimer = true
      
      createAlert();
    } else if (pressao < 90.6 || pressao > 120.8) {
      
      Resultado =
        'O Paciente está precisando de Ajuda, Pressão fora do padrão'
      stopTimer = true
      
      createAlert();
    } else {
      
      Resultado = 'O Paciente está bem'

    }
  }

  function updateView(){
    <View style={styles.main}>
      <SafeAreaView>
          <View style={styles.row}>
            <Text style={styles.text}>Temperatura:   {Temperatura}°C</Text>
          </View>

          <View style={styles.seperator}/>

          <View style={styles.row}>
            <Text style={styles.text}>Pressão:   {Pressao} mmHg</Text>
          </View>

          <View style={styles.seperator}/>

          <View style={styles.MainContainer} >
            <Text style={styles.resultado}>{ResultadoTemperatura}</Text>
            <Text style={styles.resultado}>{ResultadoPressao}</Text>
          </View>
        </SafeAreaView>
    </View>
  }

  return null
}


const styles = StyleSheet.create({

  row:{
    paddingHorizontal:30,
    paddingVertical: 16
  },
  text: {
    fontSize: 18,
    color: "#343434"
  },
  MainContainer: {
    // flex: 1,
    paddingVertical: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  seperator:{
    backgroundColor:'#E2E2E2',
    height: StyleSheet.hairlineWidth,
    marginLeft: 20
  },
  resultado:{
    fontSize: 30,
    color: "#343434",
    paddingVertical: 16

  }
 
});

export default PatientCheck;


///////////////////////////////////////////
