import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { HStack } from "@react-native-material/core";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const BottomNavigationBar = () => {
  return (
    <HStack style={{ marginTop: 80}}>
      <View style={styles.bottomNavigationBar} > 
        <View style={styles.containerImg} > 
          <Image
            style={{ width: 24, height: 24}}
            source={require('../assets/loupe.png')}
          />
        </View>
      </View>
      <View style={styles.bottomNavigationBar} > 
        <View style={styles.containerImg} > 
          <Image
            style={{ width: 24, height: 24}}
            source={require('../assets/history.png')}
          />
        </View>
      </View>
      <View style={styles.bottomNavigationBar} > 
        <View style={styles.containerImg} > 
          <Image
            style={{ width: 24, height: 24}}
            source={require('../assets/setting.png')}
          />
        </View>
      </View>
    </HStack>
  );
}
const styles = StyleSheet.create({
    bottomNavigationBar: {
      display: "flex",
      justifyContent: "center",
      height: hp('6%'), // 70% of height device screen
      width: wp('35%'),   // 80% of width device screen
      borderWidth: 1,
      borderColor: "black"

    },
    textItemBar: {
      display: "flex",
      justifyContent: "center"
    },
    containerImg: {
      display: "flex",
      justifyContent: 'center',
      alignItems: 'center',
    }

  });
export default BottomNavigationBar;