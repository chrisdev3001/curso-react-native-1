import { StatusBar } from 'expo-status-bar'
import * as SplashScreen from 'expo-splash-screen'
import {
  StyleSheet,
  Text,
  View,
  Button,
  ActivityIndicator,
  TextInput,
  Alert,
  TouchableOpacity,
} from 'react-native'
import { COLORS, Spinner } from '@core'
import { useFonts } from 'expo-font'
import { useEffect } from 'react'

export default function App() {
  const [loaded, error] = useFonts({
    'PlaypenSans-Bold': require('./assets/fonts/PlaypenSans-Bold.ttf'),
    'PlaypenSans-Light': require('./assets/fonts/PlaypenSans-Light.ttf'),
    'Regular-Bold': require('./assets/fonts/PlaypenSans-Regular.ttf'),
  })

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync()
    }
  }, [loaded, error])

  if (!loaded && !error) {
    return null
  }

  return (
    <View style={styles.container}>
      <Button title='Presioname!' onPress={() => Alert.alert('Hola mundo')} />
      <TouchableOpacity
        style={{
          backgroundColor: COLORS.primary,
          padding: 16,
          borderRadius: 5,
          marginTop: 10,
        }}
        onPress={() => Alert.alert('Hola mundo')}>
        <Text style={{ color: COLORS.white, fontSize: 24 }}>
          Hola soy un botón custom
        </Text>
      </TouchableOpacity>
      <ActivityIndicator size='large' color='blue' />
      <TextInput style={{ backgroundColor: 'pink', width: 300, padding: 16 }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
})
