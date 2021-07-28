import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView} from 'react-native';
// import Navigation from './src/Navigation/navigation';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GoOn from './src/screens/goOn';
import JoinUS from './src/screens/joinUs';
import EnableLocation from './src/screens/enableLocation';
import UseEffect from './src/screens/useEffect';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // <Navigation />
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="GoOn" component={GoOn} />
          <Stack.Screen name="JoinUS" component={JoinUS} />
          <Stack.Screen name="EnableLocation" component={EnableLocation} />
          <Stack.Screen name="UseEffect" component={UseEffect} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
export default App;
