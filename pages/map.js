import React from "react";
import {View, StyleSheet, Text} from 'react-native'

import MapboxGL from "@rnmapbox/maps";

MapboxGL.setAccessToken("pk.eyJ1Ijoic3R5dmVsaW91bWJhIiwiYSI6ImNsNTN2bGtlMzB0NTEzYnFxeHZuMnRmajcifQ.-y76qVK6qz-9BmgA5sthYw");

const Map = () => {
    return(
        <View style={styles.page}>
            <View style={styles.container}>
                <MapboxGL.MapView style={styles.map}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    container: {
        height: 300,
        width: 300,
        backgroundColor: "tomato"
    },
    map: {
        flex: 1
    }
})

export default Map;