import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Headlines from './src/Headlines'
import page from './src/page'
import Settingscreen from './src/Settingscreen'


const Stack = createStackNavigator();

export default App=()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Headlines' component={Headlines} />
        <Stack.Screen name='Settingscreen' component={Settingscreen}/>
        <Stack.Screen name='page' component={page} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}