import React from "react";
import {Dimensions, StyleSheet, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

const MapCard = ({datas})=>{
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}>

                {datas.map((data, index) => (
                    <Marker
                        key={index}
                        coordinate={{ latitude : data.geometry.coordinates[1] , longitude : data.geometry.coordinates[0] }}
                        title={data.properties.nom}
                        description={data.properties.infor}
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

