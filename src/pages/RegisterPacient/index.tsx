import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather as Icon } from '@expo/vector-icons';

const RegisterPacient = () => {
  const navigation = useNavigation();

  function handleGoBackToLogin() {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }]
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={handleGoBackToLogin}
        >
          <Icon name="arrow-left" color="#3390ff" size={35}/>
        </TouchableOpacity>
        <Text style={styles.titleHeader}>Registro de Paciente</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    height: '8%',
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#f1f1f1'
  },
  titleHeader: {
    fontSize: 22,
    fontWeight: '700',
    color: '#3390ff',
    paddingLeft: '20%'
  },
});

export default RegisterPacient;