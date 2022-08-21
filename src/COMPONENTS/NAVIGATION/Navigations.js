import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import { Connect } from '../Connect';
import { Staff } from '../Staff';
import { MAIN } from '../Main';
import { TIME } from '../TIME';
import { SERVICE } from '../SERVIS';

const Stack = createNativeStackNavigator();

export default function Navigations() {
  return (

    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Connect"
          component={Connect}
          options={{ title: 'Connect' }}

        />
         <Stack.Screen
          name="MAIN"
          component={MAIN}
          options={{ title: 'MAIN' }}

        />
        <Stack.Screen
          name="Staff"
          component={Staff}
          options={{ title: 'Сотрудники' }}
        />
             
             <Stack.Screen
          name="SERVICE"
          component={SERVICE}
          options={{ title: 'Услуги' }}
        />

    <Stack.Screen
          name="TIME"
          component={TIME}
          options={{ title: 'Запись по времени' }}
        />

      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  )
}



