import React from "react";
import {Dimensions, StyleSheet, View, Text} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

const MapCard = ({parkings})=>{
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}>
                {parkings.map(parking => (
                    <Marker
                        onPress={() => {
                            // On itinitialise visible avec setVisible(!visible)
                            // Faire passé un nouvelle objet contenant les infos qu'on veut afficher dans 
                            // la modale
                        }}
                        key={parking.properties.gid}
                        coordinate={{ latitude : parking.geometry.coordinates[1] , longitude : parking.geometry.coordinates[0] }}
                        title={parking.properties.nom}
                    />
                ))}
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

