import {Box, Button, Flex, Text, TextInput} from "@react-native-material/core";
import {ScrollView, StatusBar, StyleSheet, TouchableOpacity} from "react-native";
import React,{useState} from "react";
import Checkbox from 'expo-checkbox';
import {DateTimePickerAndroid} from "@react-native-community/datetimepicker";
import moment from "moment";

const Reservation=({route, navigation })=>{

    const { data, otherParam } = route.params;
    const [isChecked, setCheckbox] = useState(false);
    const [departureDate, onSetDepartureDate] = useState(new Date());
    const [endDate, onSetEndDate] = useState(new Date());

    const showDeparture = () => {
        const currentMode ="date"
        const onChange = (event, selectedDate) => {
            onSetDepartureDate(selectedDate);
        };
        DateTimePickerAndroid.open({
            value: departureDate,
            onChange,
            mode: currentMode,
            is24Hour: true,
        });
    };

    const showEnd = () => {
        const currentMode ="date"
        const onChange = (event, selectedDate) => {
            onSetEndDate(selectedDate);
        };
        DateTimePickerAndroid.open({
            value: departureDate,
            onChange,
            mode: currentMode,
            is24Hour: true,
        });
    };

    const validateReservation=()=>{
        if (!isChecked){
            console.log("you must checked checkbox")
          return
        }
        //TODO : la requet de reservation
        console.log("reserved")
    }

    return (
        <Flex fill>
            <StatusBar barStyle="light-content" backgroundColor="#E4CFA9" />
            <ScrollView style={styles.scrollContainer}>

                <Box mb={8} mt={8}></Box>

                <Text variant="h6">Vous occuperez la place de parking</Text>

                <Flex direction="row" mt={16} mb={16}>
                    <TouchableOpacity
                        style={styles.formInput} onPress={showDeparture}>
                        <TextInput
                            placeholder='Du'
                            variant="outlined"
                            editable={false}
                            onChangeText={onSetDepartureDate}
                            value={moment(departureDate.toLocaleDateString()).format("DD/MM/YYYY")}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.formInput} onPress={showEnd}>
                        <TextInput
                            placeholder='Au'
                            variant="outlined"
                            editable={false}
                            onChangeText={onSetEndDate}
                            value={ moment(endDate.toLocaleDateString()).format("DD/MM/YYYY")}
                        />
                    </TouchableOpacity>


                </Flex>

                <Flex direction="row" mb={16} justify="between" items="start" fill>
                    <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setCheckbox}
                        color={isChecked ? '#E4CFA9' : undefined}
                    />

                    <Flex w="90%">
                        <Text variant="body2" color="#6b7280">
                            Votre réservation est sur le point d'être
                            confirmée. En cochant cette case, vous
                            reconnaissez avoir reçu toutes les
                            informations ainsi que tous les documents
                            nécessaires pour continuer la procédure de
                            réservation de parking entre particuliers.

                            Merci de votre confiance en notre service.
                        </Text>
                        <Box mb={8} mt={8}></Box>
                        <Text variant="body2" color="#6b7280">
                            Merci de votre confiance en notre service.
                        </Text>
                    </Flex>

                </Flex>

                <Button title="Continuer" color="#157575" tintColor="white" onPress={validateReservation}/>

            </ScrollView>
        </Flex>
    )
}
const styles=StyleSheet.create({
    scrollContainer:{
        padding:16
    },
    checkbox: {
    },
    formInput:{
        width:'50%'
    },
})
export default Reservation
