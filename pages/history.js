import React from "react";
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import {Flex} from "@react-native-material/core";
import BoxHistory from '../components/boxHistory';


export default function History() {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#FFFFFF"/>
            <Flex fill>
                <BoxHistory/>
            </Flex>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 150
    },
});

