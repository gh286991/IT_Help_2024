/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Login';
import Register from './components/Register';
import Homepage from './components/Homepage'; // 引入 Homepage
import CreateReport from './components/CreateReport'; // 引入 CreateReport
import { NativeBaseProvider } from 'native-base';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NativeBaseProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login">
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Register" component={Register} />
                    <Stack.Screen name="Homepage" component={Homepage} />
                    <Stack.Screen name="CreateReport" component={CreateReport} />
                </Stack.Navigator>
            </NavigationContainer>
        </NativeBaseProvider>
    );
};

export default App;
