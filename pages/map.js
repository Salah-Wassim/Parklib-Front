import React, { useEffect, useState } from "react";
import {View, StyleSheet, Text,FlatList} from 'react-native';
import { Flex,ActivityIndicator } from "@react-native-material/core";
import {getParkingSearchedText, getParkingMap } from '../api/api'
import ParkingItem from "../components/parkingItem";
import MapOpenData from "../components/map";

const Map = ({navigation, route}) => {
    console.log(route)
    const {text} = route.params;
    const [parkings, setParkings ] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        if(text.length > 0){
            getParkingSearchedText(text).then(data => {
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
                            ta_type : _feature.properties.ta_type,
                        }
                    }
                    setParkings(parkings =>[...parkings,feature]);
                })
            })
            console.log(route)
            getParkingMap().then(
                // CUB.ready(function() {
                //     CUB.init('map_area');
                // })
            )
            .catch(error => {console.log(error)})
        }
    }, [])
        
    const FeatureList = () =>{
        return (
            <FlatList
                data={parkings}
                keyExtractor={({ properties }) => properties.gid.toString()}
                renderItem={({ item }) => <ParkingItem item={item}/>}
            />
        )
    }

    return(
        <Flex fill style={styles.page}>
            <MapOpenData/>
            <Text style={styles.header}>Résultat de votre recherche : {parkings.length} {parkings.length>1?  'Elements trouvés':'Element trouvé' } </Text>
            {isLoading ? <ActivityIndicator size="large"/> : <FeatureList/>}
        </Flex>
    ) 
    
   
}

const styles = StyleSheet.create({
    header:{
        padding:5
    },
    page:{
    }
})

export default Map;