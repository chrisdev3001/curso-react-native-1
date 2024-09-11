import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { makeHttpRequest, URL_API_REST } from '@core'

interface User {
  id: number
  name: string
  email: string
}

export const HomeScreen = ({ route }: any) => {
  const token = route.params?.token

  console.log(token, 'token')

  const [users, setUsers] = useState<User[]>([])
  const { top } = useSafeAreaInsets()

  useEffect(() => {
    // primera vez que se renderiza nuestro componente (HomeScreen)
    makeHttpRequest({
      host: URL_API_REST,
      path: '/user',
      method: 'GET',
      token,
    })
      .then(response => setUsers(response.users))
      .catch(error => Alert.alert('Ha ocurrido un error', error.message))
  }, [])

  console.log(JSON.stringify(users, null, 2))

  return (
    <View style={[styles.container, { paddingTop: top }]}>
      <Text style={styles.title}>Hola Jonh Doe</Text>

      <Text>Lista de usuarios</Text>

      <FlatList
        data={users}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', gap: 16 }}>
            <Text>{item.name}</Text>
            <Text>{item.email}</Text>
            <TouchableOpacity>
              <Text>Editar</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>Eliminar</Text>
            </TouchableOpacity>
          </View>
        )}
        contentContainerStyle={{ gap: 30 }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 24,
  },
  title: {
    fontSize: 24,
    fontFamily: 'PlaypenSans-Bold',
    textAlign: 'center',
  },
})
