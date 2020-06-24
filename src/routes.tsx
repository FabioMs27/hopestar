import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login';
import Register from './pages/Register';
import TabNavHome from './';

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
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
