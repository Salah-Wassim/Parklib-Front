import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Button} from '@react-native-material/core';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const DetailCardMarker = ({isvisible,setVisible}) => {
    return (
        <View style={isvisible === false ? styles.hiddenDetailcard : styles.mainDetailCard}>
            <View style={styles.detailCard}>
                <TouchableOpacity style={styles.icon} onPress={()=> {
                    if (isvisible){
                        isvisible = false
                        setVisible(isvisible)
                    }
                }}>
                    <Icon style={styles.iconCloseBox} name="close-box"></Icon>
                </TouchableOpacity>
                <View>
                    <Text>{}</Text>
                    <Text>{}</Text>
                    <Text>{}</Text>
                </View>
            </View>
            <View style={[styles.buttonDetailCard, styles.buttonClose]}>
                <Button title="En savoir plus" color="#157575" onPress={() => navigation.navigate('#')}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainDetailCard: {
        borderColor: "#000",
        height:200,
        backgroundColor: '#FFF',
        flexDirection:'column'
    },
    hiddenDetailcard:{
        borderColor: "#000",
        height:0,
        backgroundColor: '#FFF',
        flexDirection:'column'
    },
    detailCard : {
        height:163,
    },
    icon:{
        alignItems:'flex-end'
    },
    iconCloseBox:{
        fontSize:25
    },
    infoDetailCard: {
        padding:5,
    },
    buttonDetailCard : {
        justifyContent:'flex-end',
    }
})

export default DetailCardMarker;