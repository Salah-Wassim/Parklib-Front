import React from "react";
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from '@react-native-material/core';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const CreditCard = (props) => {
    return(
        <View style={styles.crediCardContainerExt}>
            <View style={styles.crediCardContainerInt}>
                <View style={styles.crediCardLogoContainer}>
                    <Image style={styles.crediCardLogo}></Image>
                </View>
                <View style={styles.informationCreditCardContentContainer}>
                    <View style={styles.numberCreditCardTextContainer}>
                        <Text style={styles.informationCreditCard}> - #### #### #### </Text>
                    </View>
                    <TouchableOpacity style={styles.logoNextContainer}>
                        <Icon style={styles.logoNext}></Icon>
                    </TouchableOpacity>
                </View>
                <View style={styles.informationContentContainer}>
                    <Icon style={styles.logoInformation} name="information"></Icon>
                    <Text style={styles.textInformation}>Expire le </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default CreditCard;