import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Home from './pages/Home';
import Register from './pages/RegisterPacient';

const Tab = createMaterialBottomTabNavigator();

function MyHomeTab() {

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Register" component={Register} />
    </Tab.Navigator>
  );
}

export default MyHomeTab;