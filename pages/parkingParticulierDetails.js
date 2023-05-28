import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Image, ScrollView } from "react-native";
import {Flex, Avatar, Text, Button, HStack, Box} from "@react-native-material/core";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { getOneUser } from "../api/user";
import { getRandomInt } from "../components/parkingItem";

const ParkingParticulierDetails = ({ route, navigation }) => {

    const { item, otherParam } = route.params;
    const [user, setUser] = useState([])
    console.log('item', item)

    const goToReservation=( data = item)=>{
        console.log("Reserver btn")
        navigation.navigate('Reservation', {data})
    }

    useEffect(() => {
        try{
            const userId = item.UserId
            if(userId){
                getOneUser(userId)
                .then(response => {
                    console.log("response", response)
                    if(response && response.data){
                        const _user = response.data
                        const formatedUser = {
                            firstName: _user.firstName,
                            lastName: _user.lastName,
                            picture: _user.picture
                        }
                        setUser(formatedUser)
                    }
                    else{
                        console.log('Une erreur s\'est produite au niveau de la reponse')
                    }
                })
                .catch(error => {
                    console.log('getOneUser error', error)
                })
            }
            else{
                console.log("Impossible de trouvé l'utilisateur concerné")
            }
        }
        catch(error){
            console.log("useffect getOneUser error", error)
        }
    }, [])

    return (
        <Flex fill>
            <StatusBar barStyle="light-content" backgroundColor="#E4CFA9" />
            <ScrollView>
                {/* <Image style={styles.pictureStyle} source={{ uri: `${API_URL}/post_picture/${item.Pictures[getRandomInt(item.Pictures.length)].url}`}} /> */}
                <Flex pl={16} pr={16}>
                    <Flex direction="row" items="center" justify="between" mt={8} mb={8}>
                        <Flex direction="row" items="center">
                            <Avatar image={{ uri: `${user.picture}` }} />
                            {/* <Box m={4}>{user.firstName} {user.lastName}</Box> */}
                            <Text variant="subtitle1"> {user.firstName} {user.lastName}</Text>
                        </Flex>
                        <Button
                            onPress={()=>console.log("signaler btn")}
                            variant="outlined"
                            title="Signaler"
                            color="#C70000" />
                    </Flex>
                    <Flex style={{ backgroundColor: '#E4CFA9' }} justify="between" items="center" p={8} mb={8} borderColor="#000" radius={8}>
                        <Text variant="h6">{item.Post.title}</Text>
                        <Text variant="subtitle2"> {item.address}, {item.zipCode} {item.city}</Text>
                    </Flex>
                    <Flex direction="row" items="center" justify="between" mb={8} mt={8} mr={16} ml={16}>
                        <Text variant="subtitle1"  style={[styles.center,styles.bold]}>Disponible </Text>
                        <Text variant="subtitle1"  style={styles.center}>du :</Text>
                        <Text variant="subtitle1"  style={[styles.center,styles.bold]}>02/02/2023</Text>
                        <Text variant="subtitle1"  style={styles.center}> au </Text>
                        <Text variant="subtitle1"  style={[styles.center,styles.bold]}>20/02/2023</Text>
                    </Flex>


                    <Flex  direction="row" justify="between" mb={8} mt={8}>
                        <Flex borderColor="#000" borderRight={1} style={{width:'50%'}} pr={4} justify="between">
                            <Text variant="h6">Informations</Text>
                            <Text variant="body2">Parking privé : {item.Post.typeOfPlace} </Text>
                            <Text variant="body2">1 place</Text>
                            <Text variant="body2">{item.Post.isAssured?"Assuré":"Non assuré"}</Text>
                        </Flex>

                        <Flex borderColor="#000" style={{width:'50%'}} pl={4} items="end" justify="between">
                            <Text variant="h6">Coordonnées</Text>
                            <Text variant="body2"></Text>
                            <Text variant="body2"></Text>
                        </Flex>
                    </Flex>

                    <Text variant="h6">Description</Text>

                    <Box borderColor="#000000" border={1} p={4} mt={8} mb={8}>
                        <Text variant="body2">{item.Post.description}</Text>
                    </Box>

                    <Box borderColor="#000000" border={1} p={8} mt={8} mb={8}>
                        <Text variant="h6" style={styles.center}>{item.Post.price},00 euros</Text>
                    </Box>

                    <Flex direction="row" mt={8} mb={8}>
                        <Box borderColor="#000000" border={1} p={8} style={{width:'50%'}}>
                            <Button
                                onPress={()=>console.log("Ajouter aux favoris btn")}
                                leading={props =>  <MaterialIcons name="favorite-border" size={16} color="#C70000"/>}
                                variant="text"
                                titleStyle={{fontSize:12}}
                                color="#000"
                                title="Ajouter aux favoris"
                            />
                        </Box>
                        <Box borderColor="#000000" border={1} p={8} style={{width:'50%'}}>
                            <Button
                                onPress={()=>goToReservation()}
                                variant="text"
                                title="Réserver"
                                color="#000"
                                titleStyle={{fontSize:12}}
                                leading={props =>  <MaterialIcons name="directions-car" size={16} color="#157575"/>}
                            />
                        </Box>
                    </Flex>

                </Flex>

            </ScrollView>
        </Flex>
    );
}

const styles = StyleSheet.create({
    center:{
        textAlign:"center",
    },
    bold:{
        fontWeight:"bold"
    },
    pictureStyle:{
        width: '100%',
        height:200
    },
});

export default ParkingParticulierDetails;
