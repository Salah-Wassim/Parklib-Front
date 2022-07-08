import React from "react";
import {View, StyleSheet, Text, ActivityIndicator, FlatList} from 'react-native';

import {getParkingSearchedText} from '../api/api'
// import MapboxGL from "@rnmapbox/maps";
// MapboxGL.setAccessToken("pk.eyJ1Ijoic3R5dmVsaW91bWJhIiwiYSI6ImNsNTN2bGtlMzB0NTEzYnFxeHZuMnRmajcifQ.-y76qVK6qz-9BmgA5sthYw");

const Map = ({navigation, route}) => {
    const {
        text
    } = route.params;
    const [parkings, setParkings ] = React.useState([])
    const [loading, setloading] = React.useState(false)

    React.useEffect(() => {
        if(text.length > 0){
            setloading(true)
            getParkingSearchedText(text).then(data => {
                //console.log(data)
                const resultParking = data.features.map(feature => {
                    return {
                        geometry : {
                            coordinates : []
                        },
                        properties : {
                            gid : feature.properties.gid,
                            nom : feature.properties.nom,
                            libres : feature.properties.libres,
                            total : feature.properties.total,
                            etat : feature.properties.etat,
                            url : feature.properties.url,
                            adresse : feature.properties.adresse,
                            infor : feature.properties.infor,
                            secteur : feature.properties.secteur,
                            ta_type : feature.properties.ta_type,
                        }
                    }
                })
                setParkings(parking => parking.push({...resultParking}))
                console.log(parkings)
            })
        }
    }, [])
        
    //const displayLoading = () => {
    //        return(
    //            <View>
    //                <ActivityIndicator size="large"/>
    //            </View>
    //        )
    //} 
    // st_park_p
    //const displayDetailParking = (id) => {
    //    navigation.navigate('FicheParking', {id : id})
    //}

    return(
        <View style={styles.page}>
            {parkings.length > 0 ? <Text>COUCOU</Text> : <Text>Erreur</Text> }
        </View>
    )            
}

function List(){

    return(
        <Text>PARKINGS TROUVE</Text>
    )

}

const styles = StyleSheet.create({

})

export default Map;