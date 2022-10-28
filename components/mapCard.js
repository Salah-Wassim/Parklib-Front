import React, {useState} from "react";
import {Dimensions, StyleSheet, View, Text} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

import { useSelector ,useDispatch} from 'react-redux'
import {addParking} from "../store/parking/action";

const MapCard = ({isvisible,parkings,setVisible})=>{

    const dispatch = useDispatch()


    // params to size the map, params to have Bordeaux Area on the map
    // let {width, height} = Dimensions.get('window');
    // const ASPECT_RATIO = width / height;
    // const LATITUDE_DELTA = 0.5; //Increase or decrease the zoom level dynamically
    // const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}

                // params to zoom on Bordeaux when open the map
                // region={{
                //     latitude: 44.837789,
                //     longitude: -0.57918,
                //     latitudeDelta: LATITUDE_DELTA,
                //     longitudeDelta: LONGITUDE_DELTA,
                //    }}
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

