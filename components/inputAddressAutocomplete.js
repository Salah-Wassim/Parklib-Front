import React from "react";
import {ActivityIndicator, StyleSheet, Text, View, TouchableOpacity, Linking, Image } from "react-native";
import { Box, TextInput } from "@react-native-material/core";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import axios from "axios";
import { Ionicons } from '@expo/vector-icons';

const InputAddressAutocomplete = ({onChooseAddress}) => {

    const [isSearching, setIsSearching] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const [query, setQuery] = React.useState('');
    const [search, setSearch] = React.useState([]);

    const searchResults = (text) => {
        axios.get("https://api-adresse.data.gouv.fr/search/?q=" + encodeURI(text) + "&limit=6").then(r => {
            setIsLoading(false);
            setSearch(r.data.features);
        }).catch(e => {
            setIsLoading(false);
            // console.log(e);
        })
    }

    const [inputValue, setInputValue] = React.useState("");

    return(
        <View style={[styles.containerStyle]}>
            <TextInput
                variant="outlined"
                style={[styles.inputStyle]}
                onChangeText={(t) => {
                    setInputValue(t)
                    if(t.length === 0){
                        setQuery(t);
                        setIsSearching(false);
                        setIsLoading(false);
                        return;
                    }
                    setQuery(t);
                    setIsSearching(true);
                    setIsLoading(true);
                    searchResults(t);
                }}
                placeholder={"Rechercher"}
                value={inputValue}
                onBlur={() => {
                    searchResults(query);
                }}
            />

            {isSearching && (
                <View style={[styles.searchBoxContainer]}>
                    {isLoading ? (
                        <View style={{marginLeft: 20}}>
                            <ActivityIndicator/>
                        </View>
                    ) : search.map((a, i) => (
                        <TouchableOpacity onPress={() => {
                            setIsSearching(false);
                            onChooseAddress(a);
                            setInputValue(a.properties.label)
                        }} activeOpacity={0.9} key={"search-autocomplete-" + i} style={[styles.rowStyle]}>
                            <Text style={[styles.addressStyle]}>{a.properties.name}</Text>
                            <Text style={[styles.cityStyle]}>{a.properties.city} ({a.properties.postcode})</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    containerStyle: {
        position: "relative",
    },
    inputStyle: {
        backgroundColor: "white",
        borderColor: "lightgray"
    },
    searchBoxContainer: {
        zIndex: 1000,
        position: 'absolute',
        top: 30,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        minHeight: 75,
        marginTop: 20,
        marginBottom: 20,
        width: wp("100%"),
    },
    rowStyle: {
        flexDirection: 'row',
        width:wp("100%"),
        alignItems: 'baseline',
        paddingVertical: 20,
        paddingHorizontal: 30,
        borderBottomWidth: 1,
        borderColor: '#e7e7e7',
        backgroundColor: "white"
    },
    addressStyle: {
        fontSize: 14,
        fontWeight: "800"
    },
    placeholderStyle: {
        fontSize: 14,
        fontWeight: "800",
        marginBottom: 10,
        color: "#000",
        marginTop: 10
    },
    cityStyle: {
        fontSize: 10,
        marginLeft: 5,
        color: '#6b6b6b'
    }

});

export default InputAddressAutocomplete;