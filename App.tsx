import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { Spinner } from '@core'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola mundo desde app usuarios</Text>
      <StatusBar style='auto' />
      <Spinner />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
