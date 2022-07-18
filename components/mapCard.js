import React from "react";
import {Dimensions, StyleSheet, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {Text} from "@react-native-material/core";

const MapCard = (props)=>{
    console.log("mapOpenData  " , props.data)
    return (
        <View style={styles.container}>
            <Text>Props :{props.data}  </Text>
            <MapView
                style={styles.map}
                region={this.state.region}
                onRegionChange={this.onRegionChange}>

                {this.state.markers.map((marker, index) => (
                    <Marker
                        key={index}
                        coordinate={marker.latlng}
                        title={marker.title}
                        description={marker.description}
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

