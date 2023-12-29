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

// Touchabelopacity using array (dynamic)

import React from  'react';
import {Text , View , TouchableOpacity, StyleSheet} from 'react-native'

const App =()=>{
  const skills =[
    {
      id:1,
      name:"java"
    },
    {
      id:2,
      name:"java"
    }
  ]

  const [selectedRadio, setselectedRadio] = useState(1)
  return (
    <View style = {styles.main}>
    {
      skills.map((item,index)=>
        <TouchableOpacity 
        key={index}
        onPress={()=>setselectedRadio(item.id)}>
        <View style = {styles.radioWrapper}>
          <View style={styles.radio}>
            {
              selectedRadio==item.id ? <View style={styles.radioBg}></View>:null
            }
          </View>
          <Text style={styles.radioText}>{item.name}</Text>
        </View>
      </TouchableOpacity>
      )
    }
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


// Loader 

import React, {useState} from  'react';
import {Text , View , ActivityIndicator, StyleSheet, Button} from 'react-native'

const App =()=>{

  const [show, setShow]=useState(false)
  const displayLoader=()=>{
    setShow(true);

  setTimeout(() =>{
setShow(false)
  }, 3000);
  }
return(
  <View style={styles.main}>
    <ActivityIndicator size="large" color="#000" animating={show}/>
    <Button title='show loader' onPress={displayLoader}></Button>
  </View>
)
}

const styles = StyleSheet.create({
  main:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
}
})

export default App;


// Modal 

import React, {useState} from  'react';
import {Text , View , StyleSheet, Modal, Button} from 'react-native'

const App =()=>{
  const [showModal, setShowModal] = useState(false)
  return(
  <View style={styles.main}>
    <Modal
    transparent={true}
    visible={showModal}
    animationType="slide">
      <View style={styles.centeredView}>
        <View style={styles.apoo}>
          <Text style={styles.pand}>Hello I am apoorv!!</Text>
          <Button title='close modal' onPress={()=>setShowModal(false)}></Button>
        </View>
      </View>
    </Modal>
   <View style={styles.buttonView}>
    <Button title = 'show Modal'onPress={()=>setShowModal(true)}></Button>
    </View> 
  </View>
  )
}

const styles = StyleSheet.create({
  main:{
    flex:1
  },
  buttonView:{
    flex:1,
    justifyContent:'flex-end'
  },
  centeredView:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  apoo:{
    backgroundColor:"#9acd32",
    padding:40,
    borderRadius:30,
    shadowColor: 'black',
    elevation:20
  },
  pand:{
    fontSize:20,
    marginBottom:10
  }
})



export default App;

// status bar for android 

import { StatusBar } from 'expo-status-bar';
import React, {useState} from  'react';
import {Text , View , StyleSheet, Modal, Button} from 'react-native'

const App =()=>{
  const [hide , setHide] = useState(false);
  const [barStyle, setBarStyle] = useState("default");
 return(
  <View style = {styles.container}>
    <StatusBar
    backgroundColor="orange"
    barStyle={barStyle}
    hidden={hide}
    >

    </StatusBar>
      <Button title='but' onPress={()=>setHide(!hide)}/>
      <Button title='but' onPress={()=>setBarStyle("dark-content")} />
      
  </View>
 );
};

const styles = StyleSheet.create({
container:{
  flex:1,
  justifyContent:'center'
} 
});



export default App;

// if you want to run any website on android or ios 

import { StatusBar } from 'expo-status-bar';
import React, {useState} from  'react';
import {Text , View , StyleSheet, Modal, Button} from 'react-native';
import {WebView} from 'react-native-webview'

const App =()=>{
 return(
<WebView source={{uri:"https://apoorvpandey9044.github.io/Portfolio-Website/"}}></WebView>
 )}



export default App;

// Navigations in React Native :- Stack Navigation 
First install:- For expo :- npm install @react-navigation/native
                            npx expo install react-native-screens react-native-safe-area-context
                            npm install @react-navigation/native-stack
For rest read documentation on :- React navigation 

import { StatusBar } from 'expo-status-bar';
import React, {useState} from  'react';
import {Text , View , StyleSheet, Modal, Button} from 'react-native';
import {WebView} from 'react-native-webview';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App =()=>{
 return(
<NavigationContainer>
<Stack.Navigator>
<Stack.Screen name='Login' component={Login}></Stack.Screen>
<Stack.Screen name='Home 1' component={Home}></Stack.Screen>
</Stack.Navigator>
</NavigationContainer>
 )};

 const Home=()=>{
  return (<View style = {{flex:1, justifyContent: 'center', alignItems: 'center' }}>
<Text style={{fontSize:30}}>Home Screen</Text>
  </View>
  )
  };

  const Login=(props)=>{
    return (<View style = {{flex:1, justifyContent: 'center', alignItems: 'center' }}>
  <Text style={{fontSize:30}}>Login Screen</Text>
  <View style={{margin:10}}>
  <Button title='Press-Here' onPress={()=> props.navigation.navigate("Home 1")}></Button>
  </View>

    </View>
    )
    }



export default App;
