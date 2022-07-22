import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Box } from "@react-native-material/core";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const BoxHistory = () => {
  return (
    <Box style={styles.box}>
      <View style={styles.row}>
        <Text>Parking Aquitaine</Text>
        <Text style={{ }}>Public / Payant</Text>
      </View>
      <Text>5 rue Pasteur 33000 Bordeaux</Text>
      <Text style={styles.bottomText}>6 euros</Text>
      <TouchableOpacity style={styles.deleteContain} onPress={() => navigation.navigate('History')}>
        <Text style={styles.deleteBtn}>Supprimer</Text>
      </TouchableOpacity>
    </Box>
  );
}
const styles = StyleSheet.create({
  box: {
    backgroundColor: 'rgba(21, 117, 117, 0.4)',
    // opacity: .5,
    borderRadius: 20,
    padding: 20,
    height: hp('23%'), // 70% of height device screen
    width: wp('80%')   // 80% of width device screen
  },
  row: {
    flexDirection: "row",
    height: 30, 
    justifyContent: 'space-between'
  },
  bottomText: {
    position: 'absolute', //Here is the trick
    bottom: 20, //Here is the trick
    right: 20
  },
  deleteContain: {
    position: 'absolute', //Here is the trick
    bottom: 10, //Here is the trick
    left: 20,
    backgroundColor: "#C70000",
    borderRadius: 20,
  },
  deleteBtn: {
    color: "white",
    padding: 10,
  }

});
export default BoxHistory;

