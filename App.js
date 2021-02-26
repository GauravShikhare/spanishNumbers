import React, { Component } from 'react'
import { Text, View,Image,ScrollView, TouchableOpacity,StyleSheet } from 'react-native'

import Sound from "react-native-sound"

const  soundList = [
  require("./assets/one.wav"),
  require("./assets/two.wav"),
  require("./assets/three.wav"),
  require("./assets/four.wav"),
  require("./assets/five.wav"),
  require("./assets/six.wav"),
  require("./assets/seven.wav"),
  require("./assets/eight.wav"),
  require("./assets/nine.wav"),
  require("./assets/ten.wav")
]


const App =()=>{
const playSound =(sound)=>{
  const soundVar=new Sound(sound,Sound.MAIN_BUNDLE,(err)=>{
    if(err)
    console.log("SOUND CANNOT BE PLAYED")
  })
  setTimeout(()=>(
    soundVar.play()),500
  );
  soundVar.release();
}  
    return (
      <ScrollView style={styles.container}>
        <Image style={styles.logo} source={require('./assets/logo.png')}/>
        <View style={styles.gridContainer}>
        {soundList.map((sound)=>(
          <TouchableOpacity 
            style={styles.box}
            key={sound}
            onPress={()=>{playSound(sound)}}
            >
        <Text style={styles.text}>{sound}</Text>
          </TouchableOpacity>
        ))}
        </View>
      </ScrollView>
    )
  }

  const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor:"#03203C"
    },
    logo:{
      alignSelf:"center",
      marginTop:20
    },
    gridContainer:{
      flex:1,
      margin:5,
      flexDirection:"row",
      flexWrap:"wrap",
      alignItems:"flex-start",
      justifyContent:"space-around"


    },
    box:{
     height:110,
     justifyContent:"center",
     alignItems:"center",
     width:"46%",
     marginVertical:6,
     backgroundColor:"#FF9347",
     borderRadius:6,
     shadowColor:"#393e46",
     elevation:5

    },
    text:{
      fontSize:50,
      color:"#5737D6",
      fontWeight:"bold",
    }

  })

export default App  