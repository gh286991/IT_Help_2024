import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';
import { Provider } from 'react-redux';
import store from './store/store';
import Login from './components/Login';
import Register from './components/Register';
import Homepage from './components/Homepage';
import CreateReport from './components/CreateReport';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <Provider store={store}>
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
        </Provider>
    );
};

export default App;