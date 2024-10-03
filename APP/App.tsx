import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';
import 'react-native-devsettings';
import { Provider } from 'react-redux';
import store from './src/store/store';
import Login from './src/components/Login';
import Register from './src/components/Register';
import Homepage from './src/components/Homepage';
import CreateReport from './src/components/CreateReport';

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
