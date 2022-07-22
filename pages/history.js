import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Flex } from "@react-native-material/core";
import BoxHistory  from '../components/boxHistory';
import BottomNavigationBar  from '../components/bottomNavigationBar';


export default function History() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Flex fill>
      <BoxHistory /> 
      </Flex>
      <ToolBar/>     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 150
  },
});

