import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

interface Params {
  patientName: string;
}

const PatientHistory = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const routeParams = route.params as Params;

  const [name, setName] = useState<string>(routeParams.patientName);

  const temperatures = [
    { id: '1', value: '36°C' },
    { id: '2', value: '37.8°C' },
    { id: '3', value: '34.7°C' },
    { id: '4', value: '35°C' },
    { id: '5', value: '38°C' }
  ];

  const pressures = [
    { id: '1', value: '100/98 mmHg' },
    { id: '2', value: '80/88 mmHg' },
    { id: '3', value: '100/70 mmHg' },
    { id: '4', value: '99/60 mmHg' },
    { id: '5', value: '98/87 mmHg' }
  ];

  function handleGoBackToHome() {
    navigation.reset({
      index: 0,
      routes: [{ name: 'TabNavHome' }]
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={handleGoBackToHome}
        >
          <Icon name="arrow-left" color="#3390ff" size={35}/>
        </TouchableOpacity>
        <Text style={styles.titleHeader}>Histórico do Paciente</Text>
      </View>

      <Text style={styles.head}>
        {name}
      </Text>
      <Text style={styles.listTitle}>
        Listagem de Temperaturas
      </Text>
      <FlatList
        data={temperatures}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.textItem}>{item.value}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
      <Text style={styles.listTitle}>
        Listagem de Pressões
      </Text>
      <FlatList
        data={pressures}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.textItem}>{item.value}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  head: {
    padding: 8,
    marginVertical: 10,
    marginHorizontal: 16,
    fontSize: 30,
    fontWeight: '700',
    alignSelf: 'center'
  },
  listTitle: {
    padding: 8,
    marginVertical: 2,
    //marginHorizontal: 16,
    fontSize: 24,
    fontWeight: '500',
    color: '#3390ff',
    backgroundColor: '#f1f1f1'
  },
  item: {
    padding: 8,
    marginVertical: 2,
    marginHorizontal: 16,
    borderColor: '#f1f1f1',
    borderBottomWidth: 2,
  },
  textItem: {
    fontSize: 20,
  },
});
export default PatientHistory;
