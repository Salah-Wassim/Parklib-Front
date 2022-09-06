import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Box } from "@react-native-material/core";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useDispatch, useSelector } from "react-redux";

const BoxDetails = () => {
    const parkingClicked = useSelector((state) => state.tasks.parking);
    console.log(parkingClicked)
    const isPlacesInformations =
        parkingClicked.properties.libres === "" || parkingClicked.properties.libres === null ? false : true;

    const isTarif = parkingClicked.properties.th_heur === null ? false : true;

    const dispatch = useDispatch();

    return (
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
    );
};

const styles = StyleSheet.create({
    parkingBox: {
        backgroundColor: "rgb(228, 207, 169)",
        // opacity: .5,
        borderRadius: 20,
        padding: 20,
        marginLeft: wp("5%"),
        height: hp("40%"), // 70% of height device screen
        width: wp("90%"), // 80% of width device screen
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
});
export default BoxDetails;
