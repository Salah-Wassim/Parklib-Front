import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Image, ScrollView } from "react-native";
import {Flex, Avatar, Text, Button, HStack, Box} from "@react-native-material/core";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const ParkingParticulierDetails = ({ route, navigation }) => {
    const { item, otherParam } = route.params;
    console.log(item)
    return (
        <Flex fill>
            <StatusBar barStyle="light-content" backgroundColor="#E4CFA9" />
            <ScrollView>
                <Image style={styles.pictureStyle} source={{ uri: 'https://picsum.photos/200'}} />

                <Flex pl={16} pr={16}>
                    <Flex direction="row" items="center" justify="between" mt={8} mb={8}>
                        <Avatar image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }} />
                        <Text variant="subtitle1">Pierre Dupond</Text>
                        <Button
                            onPress={()=>console.log("signaler btn")}
                            variant="outlined"
                            title="Signaler"
                            color="#C70000" />
                    </Flex>

                    <Flex style={{ backgroundColor: '#E4CFA9' }} justify="between" items="center" p={8} mb={8} borderColor="#000" radius={8}>
                        <Text variant="h6">{item.title}</Text>
                        <Text variant="subtitle2">{item.adress}</Text>
                    </Flex>

                    <Text variant="subtitle1"  style={styles.center}>Disponible du : 02/02/2023 au 20/02/2023</Text>

                    <Flex justify="center" items="center" mt={8} mb={8} >
                        <HStack spacing={8} divider={true} style={styles.center}>
                            <Flex>
                                <Text variant="h6">Informations</Text>
                                <Text variant="body2">Parking privé (sous-sol) </Text>
                                <Text variant="body2">1 place</Text>
                                <Text variant="body2">Assuré</Text>
                            </Flex>

                            <Flex>
                                <Text variant="h6">Coordonnées</Text>
                                <Text variant="body2">pierredupond@gmail.com</Text>
                                <Text variant="body2">06 40 56 78 96</Text>
                            </Flex>
                        </HStack>
                    </Flex>

                    <Text variant="h6">Description</Text>

                    <Box borderColor="#000000" border={1} p={8} mt={8} mb={8}>
                        <Text variant="body2">Contrary to popular belief, Lorem Ipsum is not simply random
                            text. It has roots in a piece of classical Latin literature from 45
                            BC, making it over 2000 years old. Richard McClintock, a Latin
                            professor at Hampden-Sydney College in Virginia, looked up
                            one of the more obscure Latin words, consectetur, from a Lor
                            e cites of the word in classical literature, discovered the</Text>
                    </Box>

                    <Box borderColor="#000000" border={1} p={8} mt={8} mb={8}>
                        <Text variant="h6" style={styles.center}>{item.price},00 euros</Text>
                    </Box>

                    <Flex direction="row" mt={8} mb={8}>
                        <Box borderColor="#000000" border={1} p={8}>
                            <Button
                                onPress={()=>console.log("Ajouter aux favoris btn")}
                                leading={props =>  <MaterialIcons name="favorite" size={16}/>}
                                variant="text"
                                titleStyle={{fontSize:12}}
                                color="#000"
                                title="Ajouter aux favoris"
                            />
                        </Box>
                        <Box borderColor="#000000" border={1} p={8}>
                            <Button
                                onPress={()=>console.log("Reserver btn")}
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
    pictureStyle:{
        width: '100%',
        height:200
    },
});

export default ParkingParticulierDetails;
