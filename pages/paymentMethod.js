import React from "react";
import {View, StyleSheet} from 'react-native';
import { Stack} from 'react-native-flex-layout';

import CreditCard from "../components/creditCard";

const PaymentMethod = () => {
    return (
        <Stack spacing={20} m={20} style={styles.mainNewCreditCardContainer}>
            <View>
                <View style={styles.logoContainer}>
                    <Icon style={styles.logoInformation} name="information"></Icon>
                    <Text style={styles.textInformation}>Vous pouvez sauvegarder une autre carte lors de votre prochaine réservation</Text>
                </View>
                <View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Ma carte bancaire</Text>
                    </View>
                    <View>
                        <CreditCard/>
                    </View>
                </View>
            </View>
            <View>
                <Button></Button>
            </View>
        </Stack>
    )
}

const styles = StyleSheet.create({

})

export default PaymentMethod;