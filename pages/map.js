import React, { useEffect, useState } from "react";
import {StyleSheet,FlatList, View} from 'react-native';
import {Flex, ActivityIndicator, FAB, Text} from "@react-native-material/core";
import {getParkingSearchedText } from '../api/api'
import { getAllPrivateParking } from "../api/parkingParticulier";
import MapCard from "../components/mapCard"
import DetailCardMarker from "../components/detailCardMarker";
import InputAddressAutocomplete from "../components/inputAddressAutocomplete";
import COLOR from "../utils/color.constant";

const Map = ({ route, navigation }) => {
    
    const {text} = route.params ? route.params : '';
    const [defaultText, setDefaultText] = useState('st_park_p');
    const [parkings, setParkings ] = useState([]);
    const [privateParkings, setPrivateParkings] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [visible, setVisible] = useState(false);

    const [adr, setAdr] = React.useState('');
    const [latitude, setLatitude] = React.useState(44.837789);
    const [longitude, setLongitude] = React.useState(-0.57918);
    const [zoom, setZoom] = React.useState(0.3);
    const [searchInput, setSearchInput] = React.useState(false);

    const onChooseAddress = (respAddress) => {
        setAdr(respAddress.properties.label);
        setLatitude(respAddress.geometry.coordinates[1]);
        setLongitude(respAddress.geometry.coordinates[0]);
        setZoom(0.02);
        setSearchInput(true);
    }

    useEffect(() => {
        if (defaultText.length > 0) {
            setParkings([]);
            getParkingSearchedText(defaultText)
            .then(data => {
                setLoading(false);
                data.features.map(_feature => {
                    const feature =   {
                        geometry : {
                            coordinates : _feature.geometry.coordinates
                        },
                        properties : {
                            gid : _feature.properties.gid,
                            nom : _feature.properties.nom,
                            libres : _feature.properties.libres,
                            total : _feature.properties.total,
                            etat : _feature.properties.etat,
                            url : _feature.properties.url,
                            adresse : _feature.properties.adresse,
                            infor : _feature.properties.infor,
                            secteur : _feature.properties.secteur,
                            ta_type: _feature.properties.ta_type,
                            th_heur: _feature.properties.th_heur,
                            type: _feature.properties.type,
                            
                        }
                    }
                    setParkings(parkings =>[...parkings,feature]);
                })
            })
            .catch(error => {
                console.log('getParkingSearchedText error', error)
            })
        }
    
        getAllPrivateParking()
        .then(response => {
            console.log("data", response)
            if(response && response.data && Array.isArray(response.data)){
                const formatedPrivateParking = response.data.map(_parkingPrivate => {
                    const parkingPrivate = {
                        id: _parkingPrivate.id,
                        address: _parkingPrivate.address,
                        zipCode: _parkingPrivate.zipCode,
                        city: _parkingPrivate.city,
                        lattitude: _parkingPrivate.lattitude,
                        longitude: _parkingPrivate.longitude,
                        createdAt: _parkingPrivate.createdAt,
                        updatedAt: _parkingPrivate.updatedAt,
                        UserId: _parkingPrivate.UserId,
                        Post: {
                            id: _parkingPrivate.Post.id,
                            title: _parkingPrivate.Post.title,
                            description: _parkingPrivate.Post.description,
                            price: _parkingPrivate.Post.price,
                            typeOfPlace: _parkingPrivate.Post.typeOfPlace,
                            contact: _parkingPrivate.Post.contact,
                            isAssured: _parkingPrivate.Post.isAssured,
                            createdAt: _parkingPrivate.Post.createdAt,
                            updatedAt: _parkingPrivate.Post.updatedAt,
                            ParkingParticulierId: _parkingPrivate.Post.ParkingParticulierId,
                            UserId: _parkingPrivate.Post.UserId
                        }
                    }
                    return parkingPrivate
                })
                setPrivateParkings(formatedPrivateParking);
            }
            else{
                console.log("Une erreur c'est produit dans le chargement de la réponse")
            }
        })
        .catch(error => {
            console.log('getAllPrivateParking1 error', error)
        })
    
    }, [])

    useEffect(() => {
        console.log("PrivateParkings", privateParkings)
    }, [privateParkings])
    
    
    return(
        <Flex fill style={styles.page}>
            <View style={[styles.formContainer, {zIndex: 4}]}>
                <InputAddressAutocomplete
                    style={styles.inputAddressAutocomplete}
                    isOpen={false}
                    onChooseAddress={onChooseAddress}
                />
            </View>
            {isLoading ?
                <ActivityIndicator size="large" /> :
                <MapCard style={{zIndex: 3}} parkings={parkings} privateParkings={privateParkings} isvisible={visible} setVisible={setVisible} latitude={latitude} longitude={longitude} zoom={zoom} searchInput={searchInput} searchLabel={adr} />
            }
            {visible ?
                <DetailCardMarker style={{zIndex: 2}} parkings={parkings} privateParkings={privateParkings} isvisible={visible} setVisible={setVisible} navigation={navigation} /> :
                null
            }
        </Flex>
    ) 
}

const styles = StyleSheet.create({
    header:{
        padding:5
    },
    page:{
    },
    inputAddressAutocomplete: {
        backgroundColor: COLOR.belge,
    },
    formContainer: {
        marginTop: 5,
        marginBottom: 5,
        marginRight: 15,
        marginLeft: 15,
    },
})

export default Map;
