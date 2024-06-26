import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Register from './screens/Register';
import Dashboard from './screens/Dashboard';
import Login from './screens/Login';
import SetPassword from './screens/SetPassword';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyAYv1_-N-ypuk_ZXf9qSMHCJLEYi478xD8",
  authDomain: "projob-4b74b.firebaseapp.com",
  projectId: "projob-4b74b",
  storageBucket: "projob-4b74b.appspot.com",
  messagingSenderId: "794028456726",
  appId: "1:794028456726:web:168500cdd4f82065426e37",
  measurementId: "G-PMLTK1NPFR"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="SetPassword" component={SetPassword} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
