import { StyleSheet, Text, View, Button as RNButton } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import React from 'react'
import { Button, Input } from '@core'

export const LoginScreen = () => {
  const { top } = useSafeAreaInsets()

  return (
    <View style={[styles.container, { paddingTop: top + 100 }]}>
      <Text style={styles.title}>Login</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <Input value='' onChange={() => null} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <Input value='' onChange={() => null} />
      </View>

      <View style={styles.buttonsContainers}>
        <Button title='Iniciar sesión' onPress={() => null} />
        <RNButton title='Crear cuenta' onPress={() => null} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 24,
    paddingTop: 100,
  },
  title: {
    fontSize: 24,
    fontFamily: 'PlaypenSans-Bold',
    textAlign: 'center',
    marginBottom: 90,
  },
  inputContainer: {},
  label: {
    fontSize: 16,
    fontFamily: 'PlaypenSans-Regular',
    marginBottom: 8,
  },
  buttonsContainers: {
    marginTop: 90,
    gap: 24,
  },
})
