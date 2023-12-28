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
import React from  'react';
import {Text , View , TouchableOpacity, StyleSheet} from 'react-native'

const App =()=>{

  const [selectedRadio, setselectedRadio] = useState(1)
  return (
    <View style = {styles.main}>
      <TouchableOpacity onPress={()=>setselectedRadio(1)}>
        <View style = {styles.radioWrapper}>
          <View style={styles.radio}>
            {
              selectedRadio===1 ? <View style={styles.radioBg}></View>:null
            }
          </View>
          <Text style={styles.radioText}>Radio 1</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>setselectedRadio(2)}>
        <View style = {styles.radioWrapper}>
          <View style={styles.radio}>
          {
              selectedRadio===2 ? <View style={styles.radioBg}></View>:null
            }
          </View>
          <Text style={styles.radioText}>Radio 1</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex:1,
    alignItems: 'center',
    justifyContent:'center'
},
radioText:{
  fontSize:20,
},
radio:{
  height:40,
  width:40,
  borderColor:'black',
  borderWidth:3,
  borderRadius:20,
  margin:10
},
radioBg:{
  backgroundColor:'balck',
  height:25,
  width:25,
  borderRadius:(20),
  margin:4
},
radioWrapper:{flexDirection:'row', alignItems:'centre'}
})

export default App;

