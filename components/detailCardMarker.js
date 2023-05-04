import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Button, Flex} from '@react-native-material/core';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import {useDispatch, useSelector} from "react-redux";
import {deleteParking, deletePrivateParking} from "../store/parking/action";

const DetailCardMarker = ({ isvisible, setVisible, navigation }) => {

    const parkingClicked = useSelector(state => state.tasks.parking)
    const privateParkingClicked = useSelector(state => state.tasks.privateParking)

    const dispatch = useDispatch()

    return (
        <View style={isvisible === false ? styles.hiddenDetailcard : styles.mainDetailCard}>
            { parkingClicked ?
                <View style={styles.detailCard}>
                    <Flex style={[styles.parking_container, styles.parking_container_top]}>
                        <View>
                            <TouchableOpacity style={styles.icon} onPress={()=> {
                                if (isvisible){
    
                                    isvisible = false
                                    setVisible(isvisible)
                                    dispatch(deleteParking())
                                }
                            }}>
                                <Icon style={styles.iconCloseBox} name="close-box"/>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={styles.parking_nom}>{parkingClicked.properties.nom}</Text>
                            <Text style={styles.parking_adress}>{parkingClicked.properties.adresse}</Text>
                        </View>
                    </Flex>
                    <Flex style={[styles.parking_container, styles.parking_container_bottom]}>
                        <Text style={styles.parking_ta_type}>{parkingClicked.properties.ta_type}</Text>
                        <Text>{parkingClicked.properties.etat}</Text>
                    </Flex>
                    <View style={[styles.buttonDetailCard, styles.buttonClose]}>
                        <Button title="En savoir plus" color="#157575" onPress={() => {
                            navigation.navigate('ParkingDetails',{item:parkingClicked})
                        }
                        }/>
                    </View>
                </View>
                :
                <View style={styles.detailCard}>
                    <Flex style={[styles.parking_container, styles.parking_container_top]}>
                        <View>
                            <TouchableOpacity style={styles.icon} onPress={()=> {
                                if (isvisible){

                                    isvisible = false
                                    setVisible(isvisible)
                                    dispatch(deletePrivateParking())
                                }
                            }}>
                                <Icon style={styles.iconCloseBox} name="close-box"/>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={styles.parking_nom}>{privateParkingClicked.Post.title}</Text>
                            <Text style={styles.parking_adress}>{privateParkingClicked.address} {privateParkingClicked.zipCode} {privateParkingClicked.city}</Text>
                        </View>
                    </Flex>
                    <Flex style={[styles.parking_container, styles.parking_container_bottom]}>
                        <Text style={styles.parking_ta_type}>{privateParkingClicked.Post.updatedAt}</Text>
                        <Text style={styles.parking_price}>Montant : {privateParkingClicked.Post.price}€</Text>
                    </Flex>
                    <View style={[styles.buttonDetailCard, styles.buttonClose]}>
                        <Button title="Détail" color="#157575" onPress={() => {
                            navigation.navigate('ParkingParticulierDetails',{item:privateParkingClicked})
                        }
                        }/>
                    </View>
                </View>
            }
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
    parking_container_top: {
        display : 'flex',
        flexDirection: 'row-reverse',
        justifyContent : 'space-between',
        paddingLeft : 3,
        paddingRight:3,
        marginTop:10,
    },
    parking_container_bottom : {
        display : 'flex',
        flexDirection: 'row',
        justifyContent : 'space-between',
        marginTop : 45,
        paddingLeft : 3,
        paddingRight:3,
    },
    parking_nom : {
        fontWeight : "bold" ,
        fontSize : 20,
    } ,
    parking_price : {
        fontWeight: "bold",
        fontSize : 17,
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
    },

})

export default DetailCardMarker;
