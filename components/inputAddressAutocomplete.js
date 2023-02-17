import React from "react";
import {ActivityIndicator, StyleSheet, Text, View, TouchableOpacity, Linking, Image } from "react-native";
import { Box, TextInput } from "@react-native-material/core";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Ionicons } from '@expo/vector-icons';

const InputAddressAutocomplete = () => {

    const [isSearching, setIsSearching] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const [query, setQuery] = React.useState('');
    const [search, setSearch] = React.useState([]);

    const searchResults = (text) => {
        axios.get("https://api-adresse.data.gouv.fr/search/?q=" + encodeURI(text) + "&limit=5").then(r => {
            setIsLoading(false);
            setSearch(r.data.features);
        }).catch(e => {
            setIsLoading(false);
            // this.onSearchError(e);
        })
    }

    return(
        <View style={[styles.containerStyle]}>
            <View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
                    {/* <TouchableOpacity activeOpacity={0.8} onPress={() => this.props.onCloseModal()}>
                        <Image source={require('../assets/loupe.png')} style={{width: 28, height: 28}}/>
                    </TouchableOpacity> */}
                </View>
                <TextInput
                    style={[styles.inputStyle]}
                    onChangeText={(t) => {
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
                    onBlur={() => {
                        searchResults(query);
                    }}
                />
            </View>

            {isSearching && (
                <View style={[styles.searchBoxContainer]}>
                    {isLoading ? (
                        <View style={{marginLeft: 20}}>
                            <ActivityIndicator/>
                        </View>
                    ) : search.map((a, i) => (
                        <TouchableOpacity onPress={() => {
                            setIsSearching(false);
                            console.log(a)
                            // this.props.onFindAddress(a);
                            // this.props.onCloseModal();
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
    // containerStyle: {
    //     flex: 1,
    //     width:wp("100%"),
    //     height: hp("100%"),
    //     // padding: 20,
    //     // zIndex: 1000,
    //     justifyContent: "flex-start",
    //     alignItems: "center",
    //     // backgroundColor: "#f5f5f5"
    // },
    // inputStyle: {
    //     height: 50,
    //     width:wp("100%"),
    //     paddingLeft: 20,
    //     paddingRight: 20,
    //     borderRadius: 5,
    //     backgroundColor: "white",
    //     shadowColor: "#000",
    //     shadowOffset: {
    //         width: 0,
    //         height: 2,
    //     },
    //     shadowOpacity: 0.06,
    //     shadowRadius: 5,
    //     elevation: 3,
    // },
    // searchBoxContainer: {
    //     zIndex: 1000,
    //     position: 'relative',
    //     justifyContent: 'flex-start',
    //     alignItems: 'flex-start',
    //     minHeight: 75,
    //     marginTop: 20,
    //     width: wp("100%")
    // },
    // rowStyle: {
    //     flexDirection: 'row',
    //     width:wp("100%"),
    //     alignItems: 'baseline',
    //     paddingVertical: 20,
    //     paddingHorizontal: 30,
    //     borderBottomWidth: 1,
    //     borderColor: '#e7e7e7'
    // },
    // addressStyle: {
    //     fontSize: 14,
    //     fontWeight: "800"
    // },
    // placeholderStyle: {
    //     fontSize: 14,
    //     fontWeight: "800",
    //     marginBottom: 10,
    //     color: "#000",
    //     marginTop: 10
    // },
    // cityStyle: {
    //     fontSize: 10,
    //     marginLeft: 5,
    //     color: '#6b6b6b'
    // }

});

export default InputAddressAutocomplete;