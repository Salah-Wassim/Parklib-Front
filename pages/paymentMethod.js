import React from "react";
import {View, StyleSheet} from 'react-native';
import { Stack} from 'react-native-flex-layout';
import { FlatList } from "react-native-gesture-handler";

import CreditCard from "../components/creditCard";

const PaymentMethod = () => {

    const creditCards = [
        {
            id:'',
            image: '',
            typeText: '',
            lasDigits: '',
            expiresDate: '',
        }
    ]

    const renderItem = ({creditCard}) => {
        <CreditCard 
            image={creditCard.image} 
            typeText={creditCard.typeText} 
            lastDigits={creditCard.lasDigits} 
            expiresDate={creditCard.expiresDate}
        />
    }

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
                    <FlatList
                        data={creditCards}
                        renderItem={renderItem}
                        keyExtractor={(creditCard) => creditCard.id}
                    />
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