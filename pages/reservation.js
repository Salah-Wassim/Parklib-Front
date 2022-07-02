import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {Button} from '@react-native-material/core';
import {Stack} from 'react-native-flex-layout';

const Reservation = ({navigation}) => {
    return (
        <Stack m={20} space={20} style={styles.reservationContainer}>
            <View style={styles.imageContainer}>
                <Image/>
            </View>
            <View style={styles.recapContainerExt}>
                <View style={styles.recapContainerInt}>
                    <Text>Parking Aquitaine</Text>
                    <Text>5 rue Paster 33000 Bordeaux</Text>
                </View>
            </View>
            <View>
                <Button title='Continuer' onPress={() => navigation.navigate('')}/>
            </View>
        </Stack>
    )
}

const styles = StyleSheet.create({
    reservationContainer: {
        height:'95%',
        justifyContent:'space-between'
    },
    recapContainerExt:{
        backgroundColor: '#157575',
        borderRadius:5,
        marginBottom:'15px'
    },
    recapContainerInt: {
        padding:9,
        height:211
    }
})

export default Reservation