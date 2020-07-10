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
          stopTimer: false

      }
    }


    GenerateRandomNumber() {

      console.log()
       let tempMin = this.state.dicttempNormal["min"] -= 2e-2
       let tempMax = this.state.dicttempNormal["max"] += 2e-2

       let pressMin = this.state.dictpressNormal["min"] -= 2e-2
       let pressMax = this.state.dictpressNormal["max"] += 2e-2

      let temp = this.getRandom(tempMin,tempMax)
      let press = this.getRandom(pressMin,pressMax)

      this.setState({
        Temperatura : temp.toFixed(1),
        Pressao : press.toFixed(2).replace('.','/')
      })

      this.verificarPressao(temp, press)

    }
    getRandom(min, max) {
      
      return ((Math.random() * (max - min)) + min);

    }

    async verificarPressao(temperatura, pressao){

      if (temperatura < 35.8 || temperatura > 37.8 ) {
        console.log("entrou no primeiro")
        this.setState({
          ResultadoTemperatura : "Temperatura fora do padrão!",
          stopTimer: true,      

        })
        this.createAlert(temperatura, pressao);

      }else{
        this.setState({
          ResultadoTemperatura : "Temperatura normal"
        })
      }
      
      if (pressao < 90.60 || pressao > 120.8){
        console.log("entrou no segundo")
        this.setState({
          ResultadoPressao : "Pressão fora do padrão",   
          stopTimer: true,      
        })
        this.createAlert(temperatura, pressao);
      }else{
        this.setState({
          ResultadoPressao : "Pressão normal"
        })
      }


    }

    createAlert(temp, press) {
      Alert.alert(
        'Alert Title',
        'My Alert Msg',
        [
          {
            text: 'OK',
            onPress: () => this.setState({stopTimer: false}),
            style: 'cancel',
          },
          { text: 'History', onPress: () => console.log('dang') },
        ],
        { cancelable: false }
      );
    }

    componentDidMount() {
      setInterval(() => {
        console.log(this.state.stopTimer)
        if(!this.state.stopTimer){
          this.GenerateRandomNumber()
        }
      }, 1500);
    }

    render() {

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