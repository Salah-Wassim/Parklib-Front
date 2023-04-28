import React from 'react'
import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Box, Flex, Text} from "@react-native-material/core";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { API_URL } from '../api/api';

export const getRandomInt= (max)=> {
    return Math.floor(Math.random() * max);
}

const ParkingItem = ({item,navigation}) => {
    return (
        <TouchableOpacity style={styles.container} 
            onPress={() =>{
                navigation.navigate('ParkingParticulierDetails', {item:item})
            }
        }>
            <Flex direction='row' fill>
                <Image style={styles.pictureStyle} source={{ uri: `${API_URL}/post_picture/${item.Pictures[getRandomInt(item.Pictures.length)].url}`}} />
                <Flex p={8} justify="around">
                    <Text variant="h6">{item.title}</Text>
                    <Text style={styles.paragraphe}>{item.price} € / Jour</Text>
                    <Text style={styles.paragraphe}>
                        <Flex>
                            <Text style={styles.paragraphe}>
                                <MaterialIcons name="location-pin" size={16}/>
                                {item.ParkingParticulier.address},
                            </Text>
                            <Text style={styles.paragraphe}>
                                {item.ParkingParticulier.zipCode} {item.ParkingParticulier.city}
                            </Text>
                        </Flex>
                    </Text>

                    <Text variant="subtitle2">Description</Text>
                    <Text variant="body2">{item.description}</Text>
                </Flex>
            </Flex>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        margin:5,
        backgroundColor:'#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#000',
    },
    paragraphe:{
        fontSize:16
    },
    pictureStyle:{
        width: 150,
        height: 150,
    }
})

export default ParkingItem;
