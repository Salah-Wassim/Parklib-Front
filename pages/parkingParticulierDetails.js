import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { Flex, Box } from "@react-native-material/core";
import BoxParkingParticulierDetails from "../components/boxParkingParticulierDetails";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function ParkingParticulierDetails(props) {
    return (
        <ScrollView style={styles.scrollViewContainer} >
            <View style={styles.container}>
                <StatusBar barStyle="light-content" backgroundColor="#FFFFFF" />

                <Flex style={styles.boxContainer}>
                    <Box style={styles.boxTopImage}>
                        <Image
                            style={styles.topImage}
                            source={require("../assets/parking_default.jpg")}
                        />
                    </Box>

                    <BoxParkingParticulierDetails />


                </Flex>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollViewContainer: {
    },
    container: {
        flex: 1,
        alignItems: "stretch",
        justifyContent: "space-between",
        paddingTop: 30,
    },
    boxContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    boxTopImage: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
    },
    topImage: {
        borderRadius: 0,
        width: wp("100%"),
    },

});
