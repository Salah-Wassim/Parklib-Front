import React from 'react'
import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Box, Flex, Text} from "@react-native-material/core";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const ParkingItem = ({item,navigation}) => {
    return (
        <TouchableOpacity style={styles.container} 
            onPress={() =>{
                console.log(item)
                navigation.navigate('ParkingParticulierDetails', item)
            }
        }>
            <Flex direction='row' fill>
                <Image style={styles.pictureStyle} source={{ uri: 'https://picsum.photos/200'}} />
                <Flex p={8} justify="around">
                    <Text variant="h6">{item.title}</Text>
                    <Text style={styles.paragraphe}>{item.price} € / Jour</Text>
                    <Text style={styles.paragraphe}>
                        <MaterialIcons name="location-pin" size={16}/>
                        {item.adress}
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
