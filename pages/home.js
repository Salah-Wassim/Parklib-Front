import React from "react";
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {TextInput} from "@react-native-material/core";
import { Stack } from 'react-native-flex-layout';
import SideBar  from '../components/sideBar';
import ToolBar  from '../components/ToolBar';
import { Button } from "react-native-web";

import {getParkingSearchedText} from '../api/api'

export default function Home({navigation}) {

  const [SearchText, onSearchText] = React.useState('');
  const page = 0;
  const totalPage = 0
  const [state, setState] = React.useState({
      parkings: [],
      isLoading: false
  })

  const loadParkingResult =  () => {
    if(SearchText.length > 0){
        setState({isLoading : true})
        getParkingSearchedText(SearchText, page+1).then(data => {
            page = data.page
            totalPage = data.total_pages
            setState = {
                parkings : [...state.parkings, ...data.results],
                isLoading : false
            }
        })
    }
  }

  const searchParkings = () => {
      page = 0
      totalPage = 0
      setState({
          parkings : []
      }, () => {
          _loadParkingResult()
      })
  }

  const searchTextInputChanged = (text) => {
      SearchText = text
  }


  return (
  <View style={styles.container} className="App" id="outer-container">
    <SideBar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <Stack style={styles.container}>
        <View style={styles.containerView}>
          <Text style={styles.textPrimary}>Bonjour !</Text>
          <Text style={styles.textSecondary}>Ou souhaitez vous allez ?</Text>
          <TouchableOpacity style={styles.destinationBtn}>
            <TextInput
              label='Rechercher'
              onChangeText={(text) => searchTextInputChanged(text)}
              onSubmitEditing = {() => searchParkings()}
            />
            <Button title="rechercher" onPress={() => {
              loadParkingResult();
              navigation.navigate('Map', {
                parkings : state.parkings,
                isLoading : state.isLoading,
                page : page,
                totalPage : totalPage,
                loadParkings : loadParkingResult()
              }
            )}}/>
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





