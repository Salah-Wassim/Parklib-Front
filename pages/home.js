import React from "react";
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {TextInput} from "@react-native-material/core";
import { Stack } from 'react-native-flex-layout';
import SideBar  from '../components/sideBar';
import ToolBar  from '../components/ToolBar';
import { Button } from "react-native-web";
import showToast from '../components/toast.components'

//import {getParkingSearchedText} from '../api/api'

export default function Home({navigation}) {

  const [SearchText, onSearchText] = React.useState('st_park_p');

  //const searchParkings = () => {
  //setState({
  //      parkings : []
  //  }, () => {
  //      loadParkingResult()
  //  })
  //}

  return (
  <View style={styles.container} className="App" id="outer-container">
    <SideBar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <Stack style={styles.container}>
        <View style={styles.containerView}>
          <Text style={styles.textPrimary}>Bonjour !</Text>
          <Text style={styles.textSecondary}>Où souhaitez vous aller ?</Text>
          <TouchableOpacity style={styles.destinationBtn}>
            <TextInput
              label='Rechercher'
              //onChangeText={(text) => searchTextInputChanged(text)}
              onChangeText={onSearchText}
              //onSubmitEditing = {() => searchParkings()}
            />
            <Button title="rechercher" onPress={() => {
                navigation.navigate('Map', {
                  text : SearchText
                })
              }
            }/>
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
    flexDirection:'row',
    border: "1px solid black",
    padding: 10,
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