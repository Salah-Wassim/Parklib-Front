import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Linking } from "react-native";
import { Box } from "@react-native-material/core";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useDispatch, useSelector } from "react-redux";

import { Ionicons } from '@expo/vector-icons';

const BoxParkingParticulierDetails = () => {
    const parkingClicked = useSelector((state) => state.tasks.parking);
    const isPlacesInformations =
        parkingClicked.properties.libres === "" || parkingClicked.properties.libres === null ? false : true;

    const isTarif = parkingClicked.properties.th_heur === null ? false : true;


    //OPEN GPS
    // const lng = parkingClicked.geometry.coordinates[0]
    // const lat = parkingClicked.geometry.coordinates[1]
    // const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
    // const latLng = `${lat},${lng}`;
    // const label = parkingClicked.properties.nom;
    // const url = Platform.select({
    //     ios: `${scheme}${label}@${latLng}`,
    //     android: `${scheme}${latLng}(${label})`
    // });
    
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

                {isTarif ? (
                    <Text style={styles.parkingTarif}>
                        Tarif journalier: {parkingClicked.properties.th_heur.toFixed(2)}€
                    </Text>
                ) : (
                    <Text style={styles.parkingAdresse}>
                        Tarif journalier non renseigné
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
                        <Ionicons name="heart-outline" size={24} color="#c70000" />
                        {/* <Ionicons name="heart" size={40} color="#c70000" /> */}
                        <Text style={styles.bookingTextButton}>
                            Ajouter aux Favoris
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.bookingButtonContainer}
                        onPress={() =>
                            console.log('Click on button "Réserver"')
                        }
                    >
                        
                        <Ionicons name="car" size={24} color="#157575" />
                        <Text style={styles.bookingTextButton}>
                            Réserver
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
        height: hp("45%"), // 70% of height device screen
        width: wp("96%"), // 90% of width device screen
        flexDirection: "column",
        justifyContent: "space-around",
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
        marginTop: 15,
        marginBottom: 15,
        textAlign: "center",
        fontSize: 22,
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
        backgroundColor: "#fff",
        borderRadius: 10,
        // borderColor: "#fff",
        // borderWidth: 2,
        flexDirection: "row",
        justifyContent: "center" ,
        alignItems: "center",
    },

    favoriteButtonContain: {

        minWidth: wp("47%"),
        // height: hp("6%"),
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

        borderRadius: 10,
        // borderColor: "#c4c8c8",
        // borderWidth: 2,
        margin: 2
    },
    bookingButtonContainer: {

        minWidth: wp("47%"),
        // backgroundColor: "#157575",
        // borderRadius: 10,
        // borderColor: "#157575",
        // borderWidth: 2,
        borderLeftWidth: 1,
        borderLeftColor: "#aaa",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

    },
    bookingTextButton: {
        color: "#aaa",
        padding: 10,
        textAlign: "center",
    },
});
export default BoxParkingParticulierDetails;
