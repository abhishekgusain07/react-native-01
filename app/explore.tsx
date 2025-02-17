import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const explore = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Starbucks Coffee</Text>
      <Text style={styles.text}>123 Main Street</Text>
      <Text style={styles.text}>Seattle, WA 98101</Text>
      <Text style={styles.text}>(555) 123-4567</Text>
      <Text style={styles.text}>Open 6AM - 9PM</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  text:{
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  }
})
export default explore