import React, { useContext, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AuthContext from '../store/authentification/authContext';

const RouteGuard = ({ children }) => {
  const { isAuthenticated, loading } = useContext(AuthContext);
  const navigation = useNavigation();

  useEffect(() => {
    if (!isAuthenticated) {
      navigation.navigate('SignIn');
    }
  }, [isAuthenticated, navigation]);

  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return isAuthenticated ? children : null;
};

export default RouteGuard;
