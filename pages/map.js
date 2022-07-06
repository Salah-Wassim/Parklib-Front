import React from "react";
import {View, StyleSheet, Text, ActivityIndicator, FlatList} from 'react-native';

import ParkingItem from "../components/parkingItem";
// import MapboxGL from "@rnmapbox/maps";

// MapboxGL.setAccessToken("pk.eyJ1Ijoic3R5dmVsaW91bWJhIiwiYSI6ImNsNTN2bGtlMzB0NTEzYnFxeHZuMnRmajcifQ.-y76qVK6qz-9BmgA5sthYw");

const Map = ({navigation, route}) => {
    const {
        films, 
        isLoading, 
        page, 
        totalPage, 
        loadParkings
    } = route.params;

    const displayLoading = () => {
        if(isLoading){
            return(
                <View>
                    <ActivityIndicator size="large"/>
                </View>
            )
        }
    }

    const displayDetailParking = (id) => {
        navigation.navigate('FicheParking', {id : id})
    }

    return(
        <View style={styles.page}>
            {/* <Text>{JSON.stringify(text)}</Text> */}
            <FlatList
                data={films}
                keyExtractor = {(item) => item.id.toString()}
                renderItem={({item}) => <ParkingItem parking={item} displayDetailParking={displayDetailParking}/> }
                onEndReachedThreshold={0.5}
                onEndReached={() => {
                    if(page < totalPage){
                        loadParkings
                    }
                }}
            />
            {displayLoading()}
        </View>
    )            
}

const styles = StyleSheet.create({

})

export default Map;