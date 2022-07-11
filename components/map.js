import React from "react";
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

const MapOpenData = ()=>{
    return (
        <View style={styles.map} nativeID="map_area">
            <WebView
                source={{
                uri: 'https://github.com/facebook/react-native'
                }}
                style={{ marginTop: 20 }}
            />
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

