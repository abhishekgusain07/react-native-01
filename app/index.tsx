import { View, Text, Button, StyleSheet, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
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
        <Link href="/explore" style={{ marginHorizontal: 'auto'}} asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>address</Text>
        </Pressable>
        </Link>
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
  },
  link:{
    marginTop: 15,
    paddingVertical: 15,
    color: 'white',
    fontWeight: "bold",
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 4,
    textDecorationLine: 'underline',
  },
  button:{
    backgroundColor: 'rgba(0,0,0,0.75)',
    marginTop:50,
    height: 60,
    borderRadius: 20,
    padding: 6,
    justifyContent: 'center',
  },
  buttonText:{
    fontSize: 16,
    color: 'white',
    fontWeight: "bold",
    textAlign: 'center',
    padding: 4,
  },
})

export default app