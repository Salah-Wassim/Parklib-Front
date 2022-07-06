import React from 'react'
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

const ParkingItem = (props) => {

    const {parking, displayDetailParking} = props

    render(
        <TouchableOpacity onPress={() => displayDetailParking(parking.id)}>
            <View>
                <Text>{parking.nom}</Text>
                <Text>{parking.capacite}</Text>
                <Text>{parking.places_restantes}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

})

export default ParkingItem;