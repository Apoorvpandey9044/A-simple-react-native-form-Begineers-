import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


// TouchableHighlight button code 
import React from  'react';
import {Text , View , TouchableHighlight, StyleSheet} from 'react-native'

const App =()=>{
  return (
    <View style = {styles.main}>
      <TouchableHighlight onPress={() => alert('You pressed the button!')}>
        <Text style={[styles.button, styles.primary]}>primary</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => alert('You pressed the button!')}>
        <Text style={[styles.button, styles.success]}>Success</Text>
      </TouchableHighlight>
      
      <TouchableHighlight onPress={() => alert('You pressed the button!')}>
        <Text style={styles.button}>Button</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex:1
},
button:{
  backgroundColor: '#bbb',
  color: "#fff",
  fontSize:24,
  textAlign:'center',
  padding:10,
  margin:10,
  borderRadius:10,
  shadowColor:'black',
  elevation:10,
  shadowOpacity:1
},
success:{backgroundColor:'red'},
primary:{backgroundColor:'blue'}
})

export default App;


//TouchableOpacity button code 


