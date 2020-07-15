import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather as Icon } from '@expo/vector-icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Home = () => {
  const navigation = useNavigation();

  function handleGoBackToLogin() {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }]
    });
  }

  function handleNavigateToPacientCheck(patient: String) {
    navigation.navigate('PatientCheck', { patient: patient });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={handleGoBackToLogin}
        >
          <Icon name="arrow-left" color="#3390ff" size={35}/>
        </TouchableOpacity>
        <Text style={styles.titleHeader}>Lista de Pacientes</Text>
      </View>
      
      <View style={styles.list}>
        <FlatList
          data={[
            {key: 'Amanda'},
            {key: 'Shevchenko'},
            {key: 'Paulo Ricardo'},
            {key: 'Braga'},
            {key: 'Joel'}
          ]}
          renderItem={
            ({item}) => (
              <TouchableOpacity
                onPress={() => handleNavigateToPacientCheck(item.key)}
              >
                <View style={styles.item}>
                  <MaterialCommunityIcons name="account" size={35} />
                  <Text style={styles.textItem}>{item.key}</Text>
                </View>
              </TouchableOpacity>
            )
          }
        />
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
  list: {
    height: '80%',
    width: '100%',
    marginTop: '10%',
    //alignItems: 'center'
    //backgroundColor: 'red'
  },
  item: {
    flexDirection: 'row',
    fontSize: 28,
    padding: 15,
    marginBottom: 30,
    borderColor: '#f3f3f3',
    borderBottomWidth: 2
  },
  textItem: {
    marginLeft: 20,
    fontSize: 28,
  }
});

export default Home;