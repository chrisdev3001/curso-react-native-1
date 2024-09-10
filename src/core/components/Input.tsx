import { StyleSheet, TextInput } from 'react-native'
import React from 'react'

interface InputProps {
  value: string
  onChange: (text: string) => void
}

export const Input = ({ value, onChange }: InputProps) => {
  return (
    <TextInput
      value={value}
      onChangeText={text => onChange(text)}
      style={styles.input}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    padding: 16,

    backgroundColor: '#fff', // Fondo blanco para un look más limpio
    borderRadius: 8, // Bordes redondeados
    borderWidth: 1, // Borde más definido
    borderColor: '#ddd', // Color del borde

    // sombras
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4, // Sombra para un efecto de profundidad
    elevation: 3, // Para Android, da una sombra similar a la de iOS
  },
})
