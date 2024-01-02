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
import {Text , View , StyleSheet, Modal, Button, TextInput} from 'react-native';
import {WebView} from 'react-native-webview';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App =()=>{
  const btnAction=()=>{
    console.warn("Button Pressed");
  }
 return(
<NavigationContainer>
<Stack.Navigator  
screenOptions={{   /*for all screens */
  headerStyle:{
  backgroundColor:'orange',
},
headerTintColor: "white",
headerTitleStyle:{
  fontSize:15
}
}}>
<Stack.Screen name='Login' component={Login}
options={{
  headerTitle:()=><Button title='Left' onPress={btnAction}></Button>,
  // headerRight:()=><Button title='Right'></Button>, for right side button
  headerRight:()=><Header></Header>,
  title:'Login',  /* for particular screen */
  headerStyle:{
  backgroundColor:'red',
}, 
headerTintColor: "white",
headerTitleStyle:{
  fontSize:15
}
}}
>
</Stack.Screen>
<Stack.Screen name='Home 1' component={Home}></Stack.Screen>
</Stack.Navigator>
</NavigationContainer>
 )};

 const Header=()=>{
  return(
    <TextInput placeholder='name'></TextInput>
  )
 }

 const Home=(props)=>{
  const {name,age} = props.route.params;
  return (<View style = {{flex:1, justifyContent: 'center', alignItems: 'center' }}>
    
<Text style={{fontSize:30}}>Home Screen</Text>
<Text>Name: {name}</Text>
<Text>Age: {age}</Text>
  </View>
  )
  };

  const Login=(props)=>{
    const [name, setName ]= useState("");
    const [age, setAge] = useState("");
    return (<View style = {{flex:1, justifyContent: 'center', alignItems: 'center' }}>

  <Text style={{fontSize:30}}>Login Screen</Text>
  <TextInput onChangeText={(text)=>setName(text)} placeholder='Enter name'></TextInput>
  <TextInput onChangeText={(text)=>setAge(text)} placeholder='Enter age'></TextInput>
  <View style={{margin:10}}>
  <Button title='Press-Here' onPress={()=> props.navigation.navigate("Home 1", {name,age})}></Button>
  </View>

    </View>
    )
    }



export default App;

// Tab navigation (Bottom part)
install:- npm install @react-navigation/bottom-tabs
import { StatusBar } from 'expo-status-bar';
import React, {useState} from  'react';
import {Text , View , StyleSheet, Modal, Button, TextInput} from 'react-native';
import {WebView} from 'react-native-webview';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const App =()=>{
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Signup" component={Signup}/>
      </Tab.Navigator>
    </NavigationContainer>
  )}

const Login =()=>{
  return<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <Text style={{fontSize:20}}>Login</Text>
  </View>
}

const Signup =()=>{
  return<View>
    <Text>Login</Text>
  </View>
}

export default App;

// Tab navigation for upper part
install:- 1)npx expo install react-native-pager-view
          2)npm install @react-navigation/material-top-tabs react-native-tab-view
import { StatusBar } from 'expo-status-bar';
import React, {useState} from  'react';
import {Text , View , StyleSheet, Modal, Button, TextInput} from 'react-native';
import {WebView} from 'react-native-webview';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
const App =()=>{
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Signup" component={Signup}/>
      </Tab.Navigator>
    </NavigationContainer>
  )}

const Login =()=>{
  return<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <Text style={{fontSize:20}}>Login</Text>
  </View>
}

const Signup =()=>{
  return<View>
    <Text>Login</Text>
  </View>
}

export default App;

//Api calling (calling by GET function simple way only one data) using map function
import React, { useEffect,useState } from "react";
import { Text, Button, View } from "react-native";

const App = () => {
  const [data, setData] = useState(undefined);

  const getAPIData = async () => {
    //api call
    const url = "https://jsonplaceholder.typicode.com/posts/1";
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };

  useEffect(() => {
    getAPIData();
  }, []);
  return (
    <View style={{top:30}}>
      <Text style={{fontSize:40}}>Api call</Text>
      {
        data ? <View style={{}}>
            <Text style={{fontSize:30}}>{data.userId}</Text>
            <Text style={{fontSize:30}}>{data.id}</Text>
            <Text style={{fontSize:15}}>{data.title}</Text>
            <Text style={{fontSize:12}}>{data.body}</Text>
        </View>:null
      }
    </View>
  );
};

export default App;
//Api calling (GET {bhut sara data } multiple data)
import React, { useEffect,useState } from "react";
import { Text, Button, View, ScrollView } from "react-native";

const App = () => {
  const [data, setData] = useState(undefined);

  const getAPIData = async () => {
    //api call
    const url = "https://jsonplaceholder.typicode.com/posts";
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };

  useEffect(() => {
    getAPIData();
  }, []);
  return (
    <ScrollView style={{top:30}}>
      <Text style={{fontSize:20}}>Mutiple data Api call</Text>
      {
        data ?
        data.map((item)=><View style={{padding:10, borderBottomColor:"#ccc", borderBottomWidth:1}}>
          <Text>UserId: {item.userId}</Text>
          <Text>Id: {item.id}</Text>
          <Text>Title: {item.title}</Text>
          <Text>Body: {item.body}</Text>
        </View>):null
      }
    </ScrollView>
  );
};

export default App;

//Api calling using Flatlist (GET)
import React, { useEffect,useState } from "react";
import { Text, Button, View, ScrollView , FlatList} from "react-native";

const App = () => {
  const [data, setData] = useState(undefined);

  const getAPIData = async () => {
    //api call
    const url = "https://jsonplaceholder.typicode.com/posts";
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };

  useEffect(() => {
    getAPIData();
  }, []);
  return (
    <View style={{top:30}}>
      <Text style={{fontSize:20}}>Mutiple data Api call</Text>
      {
        data ?
        <FlatList
        data={data}
        renderItem={({item})=><View>
          <Text style={{fontSize:20}}>{item.userId}</Text>
          <Text style={{fontSize:20}}>{item.id}</Text>
          <Text style={{fontSize:20}}>{item.title}</Text>
          <Text style={{fontSize:10}}>{item.body}</Text>
        </View>} /> : null
}
        
    </View>
  );
};

export default App;
// api calling with ip address 
import React, { useEffect,useState } from "react";
import { Text, Button, View, ScrollView , FlatList} from "react-native";

const App = () => {
  const [data, setData] = useState(undefined);

  const getAPIData = async () => {
    //api call
    const url = "http://system ip address:3000/users";
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };

  useEffect(() => {
    getAPIData();
  }, []);
  return (
    <View style={{top:30}}>
      <Text style={{fontSize:20}}>Mutiple data Api call</Text>
      {
        data ?
        <FlatList
        data={data}
        renderItem={({item})=><View>
          <Text style={{fontSize:20}}>{item.email}</Text>
          <Text style={{fontSize:20}}>{item.id}</Text>
          <Text style={{fontSize:20}}>{item.name}</Text>
          <Text style={{fontSize:20}}>{item.age}</Text>
        </View>} /> : null
}
        
    </View>
  );
};

export default App;
// api calling using Static data (POST api
import React from 'react';
import {Text, View , Button} from 'react-native';

const App = () =>{
 const saveAPIData = async () => {
  const data ={

    name:"Apoorv",
    age:"22",
    email:"pandey@gmail.com"
  }
  const url = "http://192.168.1.3:3000/users";
  let result = await fetch(url, {
   method:"POST",
   headers:{
    "Content-Type": "application/json"
   },
   body: JSON. stringify(data)
  })
  result = await result.json();
  console.warn(result);
 }

 return (
  <View>
    <Text style={{fontSize: 20, top:30}}>
     Post APi call  
    </Text>
    <View style = {{top:40}}>
    <Button title='Save data' onPress={saveAPIData}></Button>
    </View>
   
  </View>
 )
};

export default App;

// api calling using dynamic data (login form using POST api with validations)
import React, { useState } from 'react';
import {Text, View , Button, TextInput, StyleSheet} from 'react-native';

const App = () =>{
  const [name,setName] = useState('');
  const [age,setAge] = useState('');
  const [email,setEmail] = useState('');

  const  [nameError, setNameError] = useState('false');
  const  [ageError, setAgeError] = useState('false');
  const  [emailError, setEmailError] = useState('false');
 const saveAPIData = async () => {
  if(!name){
    setNameError(true)
  }
  else{
    setNameError(false)
  }

  if(!age){
    setAgeError(true)
  }
  else{
    setAgeError(false)
  }

  if(!email){
    setEmailError(true)
  }else{
    setEmailError(false)
  }
  if(!name || !age || !email){
    return false
  }
  const url = "http://192.168.1.3:3000/users";
  let result = await fetch(url, {
   method:"POST",
   headers:{
    "Content-Type": "application/json"
   },
   body: JSON. stringify({name,age,email})
   });
   result = await result.json();
   if(result){
    console.warn("Data added")
   }
 }

 return (
  <View>
    <Text style={{fontSize: 20, top:30}}>
     Post APi call  
    </Text>
    <TextInput style={styles.input} value={name} onChangeText={(text)=> setName(text)} placeholder='Enter name'></TextInput>
    { nameError ? <Text style={styles.error}>Please enter a valid text</Text>:null}
   
    <TextInput style={styles.input} value={age} onChangeText={(text)=> setAge(text)} placeholder='Enter Age'></TextInput>
    { ageError ? <Text style={styles.error}>Please enter a valid Age</Text>:null}
  
    <TextInput style={styles.input} value={email} onChangeText={(text)=> setEmail(text)} placeholder='Enter Email'></TextInput>
    { emailError ? <Text style={styles.error}>Please enter a valid Email</Text>:null}
    
    <Button title='Save data' onPress={saveAPIData}></Button>
  
    
   
  </View>
 )
};
const styles=StyleSheet.create({
  input :{
    borderColor: 'skyblue',
    borderWidth: 2,
    margin:30,
    marginBottom:5,
    padding:5
    },
    error: {
     color:'red',
     marginLeft:30
    },
})

export default App;

// form of api calling (update(PUT api) and delete )

import React, { useEffect, useState } from 'react';
import {Text, View , Button, TextInput, StyleSheet, ScrollView, Modal} from 'react-native';

const App = () =>{
  const [data,setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser,setSelectedUser] = useState(undefined)
  const getAPIData  = async () =>{
  const url = "http://192.168.1.3:3000/users";
  let result = await fetch(url); 
   result = await result.json();
   if(result){
    setData(result)
   }
 }

 const deleteUser = async (id) =>{
  const url = "http://192.168.1.3:3000/users";
  let result = await fetch(`${url}/${id}`,{
    method:"delete"
  });
  result = await result.json();
   if(result){
    console.warn("user deleted");
    getAPIData();
   }
 }

 useEffect(()=>{
  getAPIData();
 },[])

 const updateUser=(data)=>{
  setShowModal(true)
  setSelectedUser(data)
 }

 return (
  <ScrollView style={styles.container}>
    <View style={styles.dataWrapper}>
    <View style={{flex:1}}><Text>Name</Text></View>
        <View style={{flex:1}}><Text>Age</Text></View>
        <View style={{flex:1}}><Text>Operations</Text></View>
    </View>
    {
      data.length? 
      data.map((item)=><View style = {styles.dataWrapper}>
        <View style={{flex:1}}><Text>{item.name}</Text></View>
        <View style={{flex:1}}><Text>{item.age}</Text></View>
        <View style={{flex:1}}><Text>{item.email}</Text></View>
        <View ><Button onPress={()=>updateUser(item)} title='Update'></Button></View>
        <View ><Button onPress={()=>deleteUser(item.id)} title='Delete'></Button></View>
        </View>):null
    }
    <Modal visible={showModal} transparent={true}>
      <UserModal setShowModal={setShowModal} selectedUser={selectedUser} getAPIData={getAPIData}/>
    </Modal>
    </ScrollView>
 )
 };
 const UserModal = (props)=>{
  const [name,setName] = useState();
  const [age,setAge] = useState();
  const [email,setEmail] = useState();

  useEffect(()=>{
    if(props.selectedUser){
    setName(props.selectedUser.name);
    setAge(props.selectedUser.age.toString());
    setEmail(props.selectedUser.email);
  }
  },[props.selectedUser])

  const updateUser = async()=>{
    console.warn(name,age,email);
    const url = "http://192.168.1.3:3000/users";
    const id = props.selectedUser.id;
    let result = await fetch(`${url}/${id}`,{
      method:"Put",
      headers:{
        "Content-Type" : "application/json"
      },
      body:JSON.stringify({name,age,email})
    });
    result = await result.json();
    if(result){
      props.getAPIData();
      props.showModal(false);
    }
  }

  return(
  <View style={styles.centeredView}>
        <View style = {styles.modalview}>
          <TextInput style={styles.input} placeholder='Enter Name' value={name} onChangeText={(text)=>setName(text)}></TextInput>
          <TextInput style={styles.input} placeholder='Enter Age' value={age} onChangeText={(text)=>setAge(text)}></TextInput>
          <TextInput style={styles.input} placeholder='Enter Email' value={email} onChangeText={(text)=>setEmail(text)}></TextInput>
          <View style = {{marginBottom:15}}><Button onPress={updateUser}title='Update'></Button></View>
          <Button title='close' onPress={()=>props.setShowModal(false)}></Button>
        </View>
      </View>
 )}
const styles=StyleSheet.create({
  container :{
    flex:1,
    top:30
    },
    dataWrapper: {
     
     flexDirection:'row',
     justifyContent:'space-around',
     backgroundColor:'skyblue',
     padding:8,
     margin:5

    },
    centeredView:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      
    },
    modalview:{
      backgroundColor:'#fff',
      padding:40,
      borderRadius:10,
      shadowColor:"#000",
      shadowOpacity:0.70,
      elevation:5
    },
    input :{
      borderColor: 'skyblue',
      borderWidth: 2,
      margin:30,
      marginBottom:5,
      padding:5
      },     
})

export default App;

// Search icon with api integration 

import React, { useState } from 'react';
import {Text, View, Button, TextInput} from 'react-native';

const App =()=>{
  const [data,setData] = useState([]);
  const searchUser = async (text)=>{
   const url=`http://192.168.1.3:3000/users?q=${text}`;
   let result = await fetch(url);
   result = await result.json();
   if(result){
     setData(result)
   }

  }
  return(
    <View style={{flex:1}}>
      <TextInput style={{borderColor:"skyblue", borderWidth:1, margin:15, fontSize:25, top:22}} placeholder={"Search"} onChangeText={(text)=>searchUser(text)}></TextInput>
      {
        data.length ? 
        data.map((item)=><View style={{padding:10, flexDirection:'row', justifyContent:'space-between'}}>
          <Text>{item.name}</Text>
          <Text>{item.age}</Text>
          <Text>{item.email}</Text>
        </View>):null
      }
    </View>
  )
};


export default App;
