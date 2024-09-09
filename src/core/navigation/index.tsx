import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const hideHeader = { headerShown: false }

export function NavigationApp() {
  const Stack = createNativeStackNavigator()
  function AuthStack() {
    // funcion que renderiza stack de autenticacion
    return (
      <Stack.Navigator>
        <Stack.Screen
          name='Login'
          component={() => <Text>Hola desde Login</Text>}
          options={hideHeader}
        />
        <Stack.Screen
          name='Register'
          component={() => <Text>Hola desde Register</Text>}
          options={hideHeader}
        />
      </Stack.Navigator>
    )
  }

  const Tab = createBottomTabNavigator()
  function MainApp() {
    // funcion que renderiza stack de la aplicacion
    return (
      <Tab.Navigator>
        <Tab.Screen
          name='Home'
          component={() => <Text>Hola desde Home</Text>}
          options={hideHeader}
        />
        <Tab.Screen
          name='Profile'
          component={() => <Text>Hola desde Profile</Text>}
          options={hideHeader}
        />
      </Tab.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Authentication'>
        <Stack.Screen
          name='Authentication'
          component={AuthStack}
          options={hideHeader}
        />
        <Stack.Screen name='MainApp' component={MainApp} options={hideHeader} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
