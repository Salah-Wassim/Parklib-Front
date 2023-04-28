import React, {useState, useEffect} from "react";
import {StyleSheet, View, Text, Button} from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

import {deletePost, editPost} from '../api/post';

const PostCard = (post, {navigation}) => {

    const showPictoValidationStatus = (validationStatusTitle) => {
        const VALIDATION_STATUS_ATTENTE = "En attente de modération";
        const VALIDATION_STATUS_VALIDE = "Validé";
        const VALIDATION_STATUS_REFUSE = "Refusé"
        if(validationStatusTitle === VALIDATION_STATUS_ATTENTE){
            return (
                <Icon name="clock" size={20} color="orange"/>
            )
        }
        else if(validationStatusTitle === VALIDATION_STATUS_VALIDE){
            return (
                <Icon name="check-circle" size={36} color="green"/>
            )
        }
        else if(validationStatusTitle === VALIDATION_STATUS_REFUSE){
            return (
                <Icon name="stop-circle" size={36} color="red"/>
            )
        }
    }
    
    return (
        <View style={styles.cardContainer}>
            <View style={styles.topRow}>
                <View style={styles.leftPartTopRow}>
                    <Text style={styles.title}>{post.post.title}</Text>
                    <Text style={styles.validationStatus}>{showPictoValidationStatus(post.post.ValidationStatus.title)}</Text>
                </View>
                <Text style={styles.price}>{post.post.price}€</Text>
            </View>
            <View style={styles.secondRow}>
                <Text style={styles.address}>{post.post.ParkingParticulier.address}</Text>
                <Text style={styles.zipCode}> {post.post.ParkingParticulier.zipCode}</Text>
                <Text style={styles.city}> {post.post.ParkingParticulier.city}</Text>
            </View>
            <Text style={styles.thirdline}>{post.post.description}</Text>
            <View style={styles.fourthRow}>
                <Text style={styles.typeOfPlace}>{post.post.typeOfPlace}</Text>
                <Text style={styles.isAssured}>{post.post.isAssured}</Text>
            </View>
            <View style={styles.buttonsRow}>
                <Button
                    style={styles.detail}
                    title="Détail"
                    accessibilityLabel="Détail"
                    //Rediriger vers la page En savoir plus du parking correspondant
                />
                <View style={styles.righttButtonsRow}>
                    <Button
                        style={styles.delete}
                        title="Supprimer"
                        color="#C70000"
                        accessibilityLabel="Supprimer"
                        onPress={() => deletePost(post.post.id)}
                    />
                    <Button
                        style={styles.edit}
                        title="Modifier"
                        color="#157575"
                        accessibilityLabel="Modifier"
                        onPress={() => editPost(post.post.id, post)}
                    />
                </View>
            </View>              
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#fff',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        margin: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
    },
    topRow: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    leftPartTopRow:{
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    secondRow:{
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    fourthRow:{
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginRight: 10,
    },
    price: {
        fontSize: 30,
        fontWeight: "bold",
        marginLeft: '25%'
    },
    validationStatus: {
        fontSize: 16,
        marginTop: 5,
    },
    description: {
        marginTop: 10,
        marginBottom: 5,
    },
    typeOfPlace: {
        marginBottom: 5,
        marginRight:10
    },
    isAssured: {
        marginBottom: 10,
        marginLeft: 5
    },
    address: {
        marginBottom: 15
    },
    buttonsRow: {
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },
    righttButtonsRow: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "baseline"
    },
})

export default PostCard