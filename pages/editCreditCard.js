import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput, Button} from '@react-native-material/core';
import { Stack} from 'react-native-flex-layout';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const EditCreditCard = () => {
    
    const [titulaire, onChangeTitulaire] = React.useState('');
    const [nbCard, onChangeNbCard] = React.useState('');
    const [expires, onChangeExpires] = React.useState('');
    const [cvv, onChangeCvv] = React.useState('');

    return (
        <Stack style={styles.stackContainer}>
            <View>
                <View style={styles.formContainer}>
                    <TextInput
                        trailing={<Icon style={styles.iconInput} name="account"/>}
                        style={styles.formInput}
                        placeholder='Titulaire'
                        autoCorrect={false}
                        autoCapitalize='none'
                        variant="outlined"
                        onChange={onChangeTitulaire}
                    ></TextInput>
                </View>
                <View style={styles.formContainer}>
                    <TextInput
                        trailing={<Icon style={styles.iconInput} name="credit-card"/>}
                        style={styles.formInput}
                        placeholder='Numero de la carte'
                        autoCorrect={false}
                        keyboardType="number-pad"
                        variant="outlined"
                        onChange={onChangeNbCard}
                    ></TextInput>
                </View>
                <View style={styles.formContainer}>
                    <TextInput
                        trailing={<Icon style={styles.iconInput} name="calendar" />}
                        style={styles.formInput}
                        placeholder='MM/AA'
                        autoCorrect={false}
                        variant="outlined"
                        onChange={onChangeExpires}
                    ></TextInput>
                </View>
                <View style={styles.formContainer}>
                    <TextInput
                        trailing={<Icon style={styles.iconInput} name="" />}
                        style={styles.formInput}
                        placeholder='CVV'
                        autoCorrect={false}
                        keyboardType="number-pad"
                        variant="outlined"
                        onChange={onChangeCvv}
                    ></TextInput>
                </View>
            </View>
            <View>
                <Button style={styles.addButton} title="Ajouter" color="#157575"></Button>
                <Button style={styles.deleteButton} title="Supprimer" color="#C70000"></Button>
            </View>
        </Stack>
    )
}

const styles = StyleSheet.create({
    iconInput:{
        fontSize:25
    },
    addButton:{
        marginTop: 30,
        borderRadius: 25
    },
    deleteButton: {
      marginTop: 30,
      borderRadius: 25  
    },
    stackContainer: {
        margin: 20,
        marginTop: 100
    },
})

export default EditCreditCard;