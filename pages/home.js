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
  //const page = 0;
  //const totalPage = 0
  const [state, setState] = React.useState({
      parkings: [],
      isLoading: false
  })

  const loadParkingResult =  () => {
    console.log(SearchText)
    if(SearchText.length > 0){
      setState({isLoading : true})
      getParkingSearchedText(SearchText).then(data => {
          //page = data.page
          //totalPage = data.total_pages
          const resultParking = data.features.map(feature => {
            return {
              geometry : {
                coordinates : []
              },
              properties : {
                gid : feature.properties.gid,
                nom : feature.properties.nom,
                libres : feature.properties.libres,
                total : feature.properties.total,
                etat : feature.properties.etat,
                url : feature.properties.url,
                adresse : feature.properties.adresse,
                infor : feature.properties.infor,
                secteur : feature.properties.secteur,
                ta_type : feature.properties.ta_type,
              }
            }
          })
          console.log(typeof resultParking)
          setState({
            parkings : [...state.parkings, ...resultParking],
            isLoading : false
          })
          console.log(state.parkings)
      })
    }
  }

  const searchParkings = () => {
      //page = 0
      //totalPage = 0
      setState({
          parkings : []
      }, () => {
          loadParkingResult()
      })
  }

  //const searchTextInputChanged = (text) => {
  //  SearchText = text;
  //}

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
              //onChangeText={(text) => searchTextInputChanged(text)}
              onChangeText={onSearchText}
              onSubmitEditing = {() => searchParkings()}
            />
            <Button title="rechercher" onPress={() => {
              loadParkingResult()
              navigation.navigate('Map', {
                parkings : state.parkings,
                isLoading : state.isLoading,
                //page : page,
                //totalPage : totalPage,
                //loadParkings : loadParkingResult(),
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





