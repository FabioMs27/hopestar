import React from 'react';
import { Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './pages/Home';
import Register from './pages/RegisterPacient';

const Tab = createMaterialBottomTabNavigator();

function MyHomeTab() {
  const size = 26;

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home" 
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="Register" 
        component={Register}
        options={{
          tabBarLabel: 'Registrar',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-plus" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyHomeTab;