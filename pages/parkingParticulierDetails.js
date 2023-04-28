import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Image, ScrollView } from "react-native";
import {Flex, Avatar, Text, Button, HStack, Box} from "@react-native-material/core";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { getRandomInt } from "../components/parkingItem";
import { API_URL } from "../api/api";

const ParkingParticulierDetails = ({ route, navigation }) => {
    const { item, otherParam } = route.params;
    const goToReservation=( data = item)=>{
        console.log("Reserver btn")
        navigation.navigate('Reservation', {data})
    }

    return (
        <Flex fill>
            <StatusBar barStyle="light-content" backgroundColor="#E4CFA9" />
            <ScrollView>
                <Image style={styles.pictureStyle} source={{ uri: `${API_URL}/post_picture/${item.Pictures[getRandomInt(item.Pictures.length)].url}`}} />

                <Flex pl={16} pr={16}>
                    <Flex direction="row" items="center" justify="between" mt={8} mb={8}>
                        <Flex direction="row" items="center">
                            <Avatar image={{ uri: `${API_URL}/profile_picture/${item.User.picture}` }} />
                            <Box m={4}></Box>
                            <Text variant="subtitle1">{item.User.firstName} {item.User.lastName}</Text>
                        </Flex>
                        <Button
                            onPress={()=>console.log("signaler btn")}
                            variant="outlined"
                            title="Signaler"
                            color="#C70000" />
                    </Flex>

                    <Flex style={{ backgroundColor: '#E4CFA9' }} justify="between" items="center" p={8} mb={8} borderColor="#000" radius={8}>
                        <Text variant="h6">{item.title}</Text>
                        <Text variant="subtitle2"> {item.ParkingParticulier.address}, {item.ParkingParticulier.zipCode} {item.ParkingParticulier.city}</Text>
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
                            <Text variant="body2">Parking privé : {item.typeOfPlace} </Text>
                            <Text variant="body2">1 place</Text>
                            <Text variant="body2">{item.isAssured?"Assuré":"Non assuré"}</Text>
                        </Flex>

                        <Flex borderColor="#000" style={{width:'50%'}} pl={4} items="end" justify="between">
                            <Text variant="h6">Coordonnées</Text>
                            <Text variant="body2">{item.User.email}</Text>
                            <Text variant="body2">{item.User.phone}</Text>
                        </Flex>
                    </Flex>

                    <Text variant="h6">Description</Text>

                    <Box borderColor="#000000" border={1} p={4} mt={8} mb={8}>
                        <Text variant="body2">{item.description}</Text>
                    </Box>

                    <Box borderColor="#000000" border={1} p={8} mt={8} mb={8}>
                        <Text variant="h6" style={styles.center}>{item.price},00 euros</Text>
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
