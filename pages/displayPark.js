import {FlatList, StatusBar, Text} from "react-native";
import {ActivityIndicator, Flex} from "@react-native-material/core";
import ParkingItem from "../components/parkingItem";
import React, {useEffect, useState} from "react";
import {getPrivateParking} from "../api/api";


const FeatureList = ({data,navigation}) =>{
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <ParkingItem item={item} navigation={navigation}/>}
        />
    )
}

const DisplayPark = ({navigation})=>{

    const [parkings, setParkings ] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(()=>{
        setLoading(false)
        getPrivateParking().then(res=>{
            setParkings(res);
        })
    },[])


    return(
        <Flex>
            <StatusBar barStyle="light-content" backgroundColor="#E4CFA9" />
            {isLoading ?
                <ActivityIndicator size="large" color="#E4CFA9"/> :
                <FeatureList data={parkings} navigation={navigation}></FeatureList>
            }
        </Flex>
    )
}

export default DisplayPark;
