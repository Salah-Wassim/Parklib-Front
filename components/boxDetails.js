import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Box } from "@react-native-material/core";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {useDispatch, useSelector} from "react-redux";




const BoxDetails = () => {

    // const parkingClicked = useSelector(state => state.tasks.parking)

    const dispatch = useDispatch();

    return (
        <Box style={styles.box}>
            <Text>nom du parking</Text>
            <Text>public, privé, payant, gratuit ....</Text>
            <Text>adresse du parking</Text>
            <Text>prix du parking</Text>
        </Box>
    );
};

const styles = StyleSheet.create({
    box: {
        backgroundColor: "rgb(228, 207, 169)",
        // opacity: .5,
        borderRadius: 20,
        padding: 20,
        marginLeft: wp("5%"),
        height: hp("40%"), // 70% of height device screen
        width: wp("90%"), // 80% of width device screen
    },

});
export default BoxDetails;
