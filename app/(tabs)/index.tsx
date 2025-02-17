import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native'
import React, { useState } from 'react'
const icedCoffee = require('@/assets/images/iced-coffee.png')

const app = () => {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(count + 1)
  }

  return ( 
    <View style={styles.container}>
      <ImageBackground source={icedCoffee} style={styles.image}>
        <Text style={styles.text}>Count: {count}</Text>
        <Button title="Increment" onPress={handleIncrement} />
      </ImageBackground>
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
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
  }
})

export default app