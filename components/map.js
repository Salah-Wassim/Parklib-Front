import React from "react";
import { StyleSheet, View } from 'react-native';

export const MapOpenData = ()=>{
    return (
        <View style={styles.map} nativeID="map_area">
        </View>
    );
}

const styles = StyleSheet.create({
    map:{
        width: 256,
        height: 256,
        borderWidth: 1,
        borderColor: "black",
        borderStyle: "solid",
    }
});

export default MapOpenData;

