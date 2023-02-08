import React from "react";
import {StyleSheet, View, Text, TouchableOpacity, StatusBar} from 'react-native';
import {TextInput,Stack,FAB, Button, Flex} from "@react-native-material/core";

export default function Home({navigation}) {

    const [SearchText, onSearchText] = React.useState('st_park_p');

    return (
        <View style={styles.container} id="outer-container">
            <StatusBar barStyle="light-content" backgroundColor="#E4CFA9" />
            <Stack style={styles.container}>
                <View style={styles.containerView}>
                    <Text style={styles.textPrimary}>Bonjour !</Text>
                    <Text style={styles.textSecondary}>Où souhaitez vous aller ?</Text>
                    <TouchableOpacity style={styles.destinationBtn}>
                        <Flex fill>
                            <TextInput
                                label='Rechercher'
                                onChangeText={(text)=>{
                                    onSearchText(text)
                                }}
                            />
                            <Button title="rechercher" onPress={() => {
                                navigation.navigate('DisplayPark', {
                                    text : SearchText
                                })
                            }
                            }/>
                        </Flex>
                    </TouchableOpacity>
                </View>
            </Stack>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection:'column',
        justifyContent: 'center'
    },
    containerView: {
        paddingLeft: 40,
        paddingRight: 40
    },
    destinationBtn: {
        alignItems: 'center',
        flexDirection:'row',
        borderWidth: 1,
        borderColor: "black",
        padding: 10,
        borderRadius: 20,
    },
    textPrimary: {
        marginTop: 5,
        fontSize: 20
    },
    textSecondary: {
        marginTop: 5,
        fontSize: 16,
        marginBottom: 15
    }
});
