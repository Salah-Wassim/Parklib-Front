import React from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import { Stack } from 'react-native-flex-layout';
import SideBar  from '../components/sideBar';
import ToolBar  from '../components/ToolBar';


export default function Home() {
  return (
  <View style={styles.container} className="App" id="outer-container">
    <SideBar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <Stack style={styles.container}>
        <View style={styles.containerView}>
          <Text style={styles.textPrimary}>Bonjour !</Text>
          <Text style={styles.textSecondary}>Ou souhaitez vous allez ?</Text>
          <TouchableOpacity style={styles.destinationBtn}>
            <Text>Entrez votre destination</Text>
          </TouchableOpacity>
      </View>
  </Stack>
      <ToolBar/> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    justifyContent: 'center'
  },
  containerView: {
    paddingLeft: 40,
    paddingRight: 40
  },
  destinationBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    border: "1px solid black",
    padding: 20,
    borderRadius: 20,
  },
  textPrimary: {
     marginTop: 5,
     fontSize: 20 
  },
  textSecondary: {
     marginTop: 5,
     fontSize: 16,
     marginBottom: 15 
  }
});





