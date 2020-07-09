//Normal = 
  //Sistolica = 9 - 12
  //Diastolica = menor 8
  
  
  //menor q 12 por 8 ate 9 por 6

  //Temperatura = 35 -  37,8º
  
  
  import React, { Component } from 'react';

  import { StyleSheet, View, Button, Text, SafeAreaView, Alert} from 'react-native';

  class PatientCheck extends React.Component {

    constructor(){
 
      super();
      this.state={
          dicttempNormal: {min: 35.8, max: 37.8},
          dictpressNormal: {min: 90.6, max: 120.8},
          Temperatura : "----",
          Pressao : "----",
          ResultadoPressao: "Estado do paciente",
          ResultadoTemperatura: "Estado do paciente",
         

      }
    }


    GenerateRandomNumber() {

      console.log()
       let tempMin = this.state.dicttempNormal["min"] -= 2e-4
       let tempMax = this.state.dicttempNormal["max"] += 2e-4

       let pressMin = this.state.dictpressNormal["min"] -= 2e-2
       let pressMax = this.state.dictpressNormal["max"] += 2e-2

       console.log(tempMin)
       console.log(tempMax)
       console.log(pressMin)
       console.log(pressMax)



      // this.setState({
      //   tempNormal[min]
      //   // tempNormal["min"] : TempNormal["min"] +1,
      //   Pressao : press.toFixed(2).replace('.','/')
      // })
      // console.log(tempNormal["min"])
      let temp = this.getRandom(tempMin,tempMax)
      let press = this.getRandom(pressMin,pressMax)

      // tempNormal["min"] = 33.0
      // tempNormal["max"] = 44.0
      // console.log(tempNormal["min"])

      // let temp = this.getRandom(35.8,37.8)
      // let press = this.getRandom(90.60, 120.8)
      // let temp = this.getRandom(33.0,43.0)
      // let press = this.getRandom(70.00,170.00)



      this.setState({
        Temperatura : temp.toFixed(1),
        Pressao : press.toFixed(2).replace('.','/')
      })

      this.verificarPressao(temp, press)

    }
    getRandom(min, max) {
      
      // = (Math.floor(Math.random()*100) + ran_val)
      return ((Math.random() * (max - min)) + min);

    }

    createAlert() {
      if (this.timer) clearInterval(this.timer)
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

    verificarPressao(temperatura, pressao) {
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

    componentDidMount() {
      this.timer = setInterval(() => {
        this.GenerateRandomNumber()
      }, 2000);
    }

    render() {
      // this.GenerateRandomNumber()

      return (
     
        <SafeAreaView>

          <View style={styles.row}>
            <Text style={styles.text}>Temperatura:   {this.state.Temperatura}°C</Text>
          </View>

          <View style={styles.seperator}/>

          <View style={styles.row}>
            <Text style={styles.text}>Pressão:   {this.state.Pressao} mmHg</Text>
          </View>

          <View style={styles.seperator}/>

          <View style={styles.MainContainer} >
            <Text style={styles.resultado}>{this.state.ResultadoTemperatura}</Text>
            <Text style={styles.resultado}>{this.state.ResultadoPressao}</Text>    
          </View>
        </SafeAreaView>
        
      );
    }
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