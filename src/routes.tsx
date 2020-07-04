import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login';
import Register from './pages/Register';
import TabNavHome from './';
import PatientCheck from './pages/PatientCheck'

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator 
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: '#fff'
          }
        }}
      >
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="Register" component={Register} />
        <AppStack.Screen name="TabNavHome" component={TabNavHome} />
        <AppStack.Screen name="PatientCheck" component={PatientCheck} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
