import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const dummy_users = [
  { id: 1, name: 'Jonh Doe', email: 'jonhdoe@test.com' },
  { id: 2, name: 'Chris Vil', email: 'chrisvil@test.com' },
  { id: 2, name: 'Danilo Lobos', email: 'danilo@test.com' },
]

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets()

  return (
    <View style={[styles.container, { paddingTop: top }]}>
      <Text style={styles.title}>Hola Jonh Doe</Text>

      <Text>Lista de usuarios</Text>

      <FlatList
        data={dummy_users}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', gap: 16 }}>
            <Text style={{}}>{item.name}</Text>
            <Text style={{}}>{item.email}</Text>
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
