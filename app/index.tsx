import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
const icedCoffee = require('@/assets/images/iced-coffee.png')

const app = () => {
  return ( 
    <View style={styles.container}>
      <ImageBackground 
        source={icedCoffee}
        style={styles.image}
        resizeMode='cover'
        >
        <Text style={styles.text}>Iced out Cafe</Text>
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
    backgroundColor: 'rgba(0,0,0,0.5)',
  }
})

export default app