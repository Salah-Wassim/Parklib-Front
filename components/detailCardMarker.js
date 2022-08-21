import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Button, Flex} from '@react-native-material/core';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import {useDispatch, useSelector} from "react-redux";
import {deleteParking} from "../store/parking/action";

const DetailCardMarker = ({isvisible,setVisible}) => {

    const parkingClicked = useSelector(state => state.tasks.parking)

    const dispatch = useDispatch()

    return (
        <View style={isvisible === false ? styles.hiddenDetailcard : styles.mainDetailCard}>
            <View style={styles.detailCard}>
                <TouchableOpacity style={styles.icon} onPress={()=> {
                    if (isvisible){

                        isvisible = false
                        setVisible(isvisible)
                        dispatch(deleteParking())
                    }
                }}>
                    <Icon style={styles.iconCloseBox} name="close-box"></Icon>
                </TouchableOpacity>
                <Flex>
                    <Text>{parkingClicked.properties.nom}</Text>
                    <Text>{parkingClicked.properties.adresse}</Text>
                    <Text>{parkingClicked.properties.secteur}</Text>
                </Flex>
            </View>
            <View style={[styles.buttonDetailCard, styles.buttonClose]}>
                <Button title="En savoir plus" color="#157575" onPress={() =>console.log('clicked')}/>
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