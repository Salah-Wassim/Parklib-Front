import React from "react";
import { StatusBar } from "expo-status-bar";
import {StyleSheet, Image, ScrollView, Linking, Platform} from "react-native";
import {Flex, Avatar, Text, Button, HStack, Box} from "@react-native-material/core";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const ParkingDetails=({ route, navigation })=> {
    const { item, otherParam } = route.params;
    console.log(item)
    return (
        <Flex fill>
            <StatusBar barStyle="light-content" backgroundColor="#E4CFA9" />
            <ScrollView>
                <Image style={styles.pictureStyle} source={{ uri: 'https://picsum.photos/200'}} />

                <Flex pl={16} pr={16}>
                    <Flex direction="row" items="center" justify="between" mt={8} mb={8}>
                        <Text variant="subtitle1">{item.properties.secteur}</Text>
                        <Button
                            onPress={()=>console.log("voir le site btn")}
                            variant="outlined"
                            title="Voir le site"
                            color="#C70000" />
                    </Flex>

                    <Flex style={{ backgroundColor: '#E4CFA9' }} justify="between" items="center" p={8} mb={8} borderColor="#000" radius={8}>
                        <Text variant="h6">{item.properties.nom}</Text>
                        <Text variant="subtitle2">{item.properties.adresse}</Text>
                    </Flex>

                    <Text variant="subtitle1"  style={styles.center}>{item.properties.etat}</Text>

                    <Flex justify="center" items="center" mt={8} mb={8} >
                        <HStack spacing={8} divider={true} style={styles.center}>
                            <Flex>
                                <Text variant="h6">Description</Text>
                                <Text variant="body2">TYPE : {item.properties.type}</Text>
                                <Text variant="body2">Niveau 1 </Text>
                                <Text variant="body2">Équipé de place handicapé  </Text>
                            </Flex>

                            <Flex>
                                <Text variant="h6">Places</Text>
                                <Text variant="body2">LIBRE : {item.properties.libres}</Text>
                                <Text variant="body2">TOTAL : {item.properties.total}</Text>
                            </Flex>
                        </HStack>
                    </Flex>

                    <Text variant="h6">Information</Text>

                    <Box borderColor="#000000" border={1} p={8} mt={8} mb={8}>
                        <Text variant="body2">{item.properties.infor}</Text>
                    </Box>

                    <Box borderColor="#000000" border={1} p={8} mt={8} mb={8}>
                        <Text variant="h6" style={styles.center}>{item.properties.ta_type}</Text>
                    </Box>

                    <Flex direction="row" mt={8} mb={8}>
                        <Box borderColor="#000000" border={1} pt={8} pb={8} pr={4} pl={4}>
                            <Button
                                onPress={()=>console.log("Ajouter aux favoris btn")}
                                leading={props =>  <MaterialIcons name="favorite" size={16}/>}
                                variant="text"
                                titleStyle={{fontSize:12}}
                                color="#000"
                                title="Ajouter aux favoris"
                            />
                        </Box>
                        <Box borderColor="#000000" border={1} pt={8} pb={8} pr={4} pl={4} >
                            <Button
                                onPress={()=>{
                                    console.log("GPS btn")

                                    const lng = item.geometry.coordinates[0]
                                    const lat = item.geometry.coordinates[1]
                                    const latLng = `${lat},${lng}`;
                                    const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
                                    const url = Platform.select({
                                        ios: `${scheme}${item.properties.nom}@${latLng}`,
                                        android: `${scheme}${latLng}(${item.properties.nom})`
                                    });
                                    Linking.openURL(url).then(r => {console.log(r)})
                                }
                            }
                                variant="text"
                                title="Ouvrir le GPS"
                                color="#000"
                                titleStyle={{fontSize:10}}
                                leading={props =>  <MaterialIcons name="gps-fixed" size={16} color="#157575"/>}
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

export default ParkingDetails;
