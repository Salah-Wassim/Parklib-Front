import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const ParkingItem = ({item}) => {

    const {properties} = item;

    return (
        <TouchableOpacity style={styles.container} 
            onPress={() =>{
                console.log(`${properties.nom} clicked ==> ${properties.gid}`);
                console.log(item.geometry.coordinates[0],item.geometry.coordinates[1]);
               // props.navigation.navigate('parking', {id: item.properties.gid})
            }
        }>
            <View>
                <Text style={styles.paragraphe}>{properties.nom}</Text>
                <Text style={styles.paragraphe}>{properties.libres}</Text>
                <Text style={styles.paragraphe}>{properties.adresse}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:10,
        margin:5,
        backgroundColor:'#68a0cf',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
    },
    paragraphe:{
        fontSize:16
    }
})

export default ParkingItem;