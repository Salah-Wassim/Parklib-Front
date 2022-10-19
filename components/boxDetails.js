import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Linking } from "react-native";
import { Box } from "@react-native-material/core";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useDispatch, useSelector } from "react-redux";

import { Ionicons } from '@expo/vector-icons';

const BoxDetails = () => {
    const parkingClicked = useSelector((state) => state.tasks.parking);
    const isPlacesInformations =
        parkingClicked.properties.libres === "" || parkingClicked.properties.libres === null ? false : true;

    const isTarif = parkingClicked.properties.th_heur === null ? false : true;


    //OPEN GPS
    const lng = parkingClicked.geometry.coordinates[0]
    const lat = parkingClicked.geometry.coordinates[1]
    const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
    const latLng = `${lat},${lng}`;
    const label = parkingClicked.properties.nom;
    const url = Platform.select({
        ios: `${scheme}${label}@${latLng}`,
        android: `${scheme}${latLng}(${label})`
    });
    
    const dispatch = useDispatch();

    return (
        <View style={styles.container} >

            <Box style={styles.parkingBox}>
                <Text style={styles.parkingNom}>
                    {parkingClicked.properties.nom}
                </Text>
                <Text style={styles.parkingAdresse}>
                    {parkingClicked.properties.adresse}
                </Text>
                <View style={styles.parkingRow}>
                    <View>
                        <Text style={styles.parkingLabel}>Etat:</Text>
                        <Text style={styles.parkingInfos}>
                            {parkingClicked.properties.etat}
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.parkingLabel}>Secteur:</Text>
                        <Text style={styles.parkingInfos}>
                            {parkingClicked.properties.secteur}
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.parkingLabel}>Type:</Text>
                        <Text style={styles.parkingInfos}>
                            {parkingClicked.properties.type}
                        </Text>
                    </View>
                </View>

                {isPlacesInformations ? (
                    <View>
                        <Text style={styles.parkingPlacesLibres}>
                            Places disponibles: {parkingClicked.properties.libres}
                        </Text>
                        <Text style={styles.parkingPlacesTotales}>
                            (sur un total de {parkingClicked.properties.total}{" "}
                            places)
                        </Text>
                    </View>
                ) : (
                    <Text style={styles.parkingAdresse}>
                        Pas d'informations sur les places disponibles.
                    </Text>
                )}

                {isTarif ? (
                    <Text style={styles.parkingTarif}>
                        Tarif horaire: {parkingClicked.properties.th_heur.toFixed(2)}€
                    </Text>
                ) : (
                    <Text style={styles.parkingAdresse}>
                        Tarif horaire non renseigné
                    </Text>
                )}


                
            </Box>

            <View style={styles.buttonsContain} >

                <View style={styles.oneButtonContainer} >

                    <TouchableOpacity
                                style={styles.favoriteButtonContain}
                                onPress={() =>
                                    console.log('Click on button "Ajouter/Retirer des Favoris"')
                                }
                            >
                        <Ionicons name="heart-outline" size={40} color="#c70000" />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.gpsButtonContain}
                        onPress={() =>
                            Linking.openURL(url)
                        }
                    >
                        
                        <Ionicons name="map-outline" size={24} color="white" />
                        <Text style={styles.gpsTextButton}>
                            Ouvrir le GPS
                        </Text>
                    </TouchableOpacity>


                </View>
                

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: hp("100%"), // 70% of height device screen
        width: wp("100%"), // 90% of width device screen
    },

    parkingBox: {
        backgroundColor: "rgb(228, 207, 169)",
        // opacity: .5,
        borderRadius: 10,
        padding: 20,
        marginLeft: wp("2%"),
        height: hp("70%"), // 70% of height device screen
        width: wp("96%"), // 90% of width device screen
        flexDirection: "column",
        justifyContent: "space-between",
    },
    parkingRow: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    parkingNom: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18,
    },
    parkingAdresse: {
        textAlign: "center",
        fontStyle: "italic",
        marginTop: 10,
        marginBottom: 10,
        fontSize: 16,
    },
    parkingLabel: {
        fontWeight: "bold",
    },
    parkingInfos: {
        fontSize: 16,
    },
    parkingPlacesLibres: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: "bold",
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    parkingPlacesTotales: {
        marginTop: 5,
        marginBottom: 10,
        fontSize: 16,
        fontWeight: "normal",
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    parkingTarif: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
    },
    buttonsContain: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

        marginLeft: wp("2%"),
        height: hp("10%"), // 70% of height device screen
        width: wp("96%"), // 90% of width device screen
    },

    oneButtonContainer: {
        backgroundColor: "#157575",
        borderRadius: 10,
        borderColor: "#157575",
        borderWidth: 2,
        flexDirection: "row",
        justifyContent: "center" ,
        alignItems: "center",
    },

    favoriteButtonContain: {

        minWidth: wp("20%"),
        // height: hp("6%"),
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

        borderRadius: 10,
        // borderColor: "#c4c8c8",
        // borderWidth: 2,
        margin: 2
    },
    gpsButtonContain: {

        minWidth: wp("74%"),
        backgroundColor: "#157575",
        borderRadius: 10,
        // borderColor: "#157575",
        // borderWidth: 2,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

    },
    gpsTextButton: {
        color: "white",
        padding: 10,
        textAlign: "center",
    },
});
export default BoxDetails;
