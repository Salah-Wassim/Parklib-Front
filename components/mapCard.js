import React, {useEffect, useState} from "react";
import {Dimensions, StyleSheet, View, Text} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import { useSelector ,useDispatch} from 'react-redux'
import { addParking, addPrivateParking } from "../store/parking/action";
import COLOR from "../utils/color.constant";

const MapCard = ({isvisible,parkings,privateParkings,setVisible, latitude, longitude, zoom, searchInput , searchLabel})=>{

    const dispatch = useDispatch()

    // params to size the map area
    let {width, height} = Dimensions.get('window');
    const ASPECT_RATIO = width / height;
    const LATITUDE_DELTA = zoom; //Increase or decrease the zoom level dynamically
    const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}

                // params to center the map area
                region={{
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGITUDE_DELTA,
                }}
            >
                {
                    parkings.map(parking => (
                        <Marker
                            onPress={() => {
                                isvisible = true
                                setVisible(isvisible)
                                dispatch(addParking(parking))
                            }}
                            key={parking.properties.gid}
                            coordinate={{ latitude : parking.geometry.coordinates[1] , longitude : parking.geometry.coordinates[0] }}
                            title={parking.properties.nom}
                            pinColor={parking.properties.etat === "LIBRE" || parking.properties.etat === "OUVERT" ? "green" : "red"}
                        />
                    ))
                }
                {
                    privateParkings.map(privateParking => {
                        return (
                            <Marker
                                onPress={() => {
                                    isvisible = true
                                    setVisible(isvisible)
                                    dispatch(addPrivateParking(privateParking))
                                }}
                                key={privateParking.id}
                                coordinate={{latitude : privateParking.lattitude, longitude: privateParking.longitude}}
                                title={privateParking.Post.title}
                                pinColor={COLOR.indigo}
                            />
                        )
                    })
                }
                {searchInput ?
                <Marker
                key={0}
                coordinate={{ latitude : latitude , longitude : longitude }}
                title={searchLabel}
                pinColor={COLOR.belge}
                />    
                :    
                null
                }
                
            </MapView>
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
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },

});

export default MapCard;

