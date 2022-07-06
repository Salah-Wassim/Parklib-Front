import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { slide as Menu } from 'react-burger-menu';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import '../css/App.module.css';


export default props => {
  return (
    <Menu>
      <div className="div-container">
      <View style={{marginLeft: 22}}>
      <h1  className="top-title">Park'Lib</h1>
      </View>
      <TouchableOpacity style={{marginLeft: 22}}>
        <Text>Profil</Text>
      </TouchableOpacity>
      <View>
      <div className="selector-center">
      <Image style={styles.stretch}
      source={require('../assets/profil.jpg')}
      />
      </div>
      </View>
      </div>
      <div className="div-container">
      <TouchableOpacity style={{marginBottom: 170}}>
        <Text style={styles.labels}>Tous les libellés</Text>
        <Text style={styles.paddingTextSideBar}>Se connecter</Text>
        <Text style={styles.paddingTextSideBar}>S'inscrire</Text>
        <Text style={styles.paddingTextSideBar}>Contactez-nous</Text>
      </TouchableOpacity>
      </div>
      <div className="div-container">
      <TouchableOpacity style={styles.lastContainer}>
        <a href="" className="mt-25-mb-40">Mentions légales</a>
        <Text style={{marginBottom: 10}}>CGU</Text>
        <Text style={{marginBottom: "auto"}}>V1.0</Text>
        <View style={styles.deleteContain}>
        <Text style={styles.deleteBtn}>Déconnecter</Text>
      </View>
      </TouchableOpacity>
      </div>
    </Menu>
  );
};



const styles = StyleSheet.create({
  stretch: {
    width: 160,
    height: 160,
    resizeMode: 'stretch',
    alignItems: "center",
    justifyContent: "center"
  },
  paddingTextSideBar: {
    marginLeft: 22,
    marginTop: 14
  },
  labels: {
    marginLeft: 22,
    marginTop: 14,
    fontStyle: "italic",
  },
  deleteContain: {
    backgroundColor: "#C70000",
    borderRadius: 25,
  },
  deleteBtn: {
    textAlign: "center",
    color: "white",
    padding: 10,
  },
  lastContainer: {
    textAlign: "center",
    height: hp('29%')

  }
});
