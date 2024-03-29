import React from "react";
import {ActivityIndicator, StyleSheet, Text, View, TouchableOpacity, Linking, Image } from "react-native";
import { Box, TextInput } from "@react-native-material/core";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import axios from "axios";
import COLOR from "../utils/color.constant";

const InputAddressAutocomplete = ({onChooseAddress}) => {

    const [isSearching, setIsSearching] = React.useState(false); // used to display or not result list
    const [isLoading, setIsLoading] = React.useState(false); // used to display or not ActivityIndicator
    const [query, setQuery] = React.useState(''); // used to store user suery
    const [search, setSearch] = React.useState([]); // used to store search result
    const [inputValue, setInputValue] = React.useState(""); // used to display result in input after  search is completed

    const searchResults = (text) => {
        axios.get("https://api-adresse.data.gouv.fr/search/?q=" + encodeURI(text) + "&limit=8")
            .then(r => {
                setIsLoading(false);
                setSearch(r.data.features);
            }).catch(e => {
                setIsLoading(false);
                // console.log(e);
            })
    }

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
                placeholder={"Rechercher une adresse, une rue, etc..."}
                value={inputValue}
                onBlur={() => {
                    searchResults(query);
                }}
            />
            {isSearching && (
                <View style={[styles.searchBoxContainer]}>
                    {isLoading ? (
                        <View style={styles.activityIndicatorView}>
                            <ActivityIndicator  size="large" color="#575DFB"  />
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
        backgroundColor: COLOR.blanc,
        borderColor: COLOR.grisclair
    },
    searchBoxContainer: {
        position: 'absolute',
        top: 30,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        minHeight: 75,
        marginTop: 20,
        marginBottom: 20,
        // backgroundColor: COLOR.blanc
        width:wp("90%"),

    },
    activityIndicatorView: {
        paddingRight: 10,
        width: wp("90%"),
        position: "relative",
        top: -55,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',

    },
    rowStyle: {
        flexDirection: 'row',
        width:wp("90%"),
        alignItems: 'baseline',
        paddingVertical: 20,
        paddingHorizontal: 30,
        borderBottomWidth: 1,
        borderColor: COLOR.grisfonce,
        backgroundColor: COLOR.grisclair
    },
    addressStyle: {
        fontSize: 14,
        fontWeight: "800"
    },
    placeholderStyle: {
        fontSize: 14,
        fontWeight: "800",
        marginBottom: 10,
        color: COLOR.noir,
        marginTop: 10
    },
    cityStyle: {
        fontSize: 10,
        marginLeft: 5,
        color: COLOR.grisfonce
    }

});

export default InputAddressAutocomplete;