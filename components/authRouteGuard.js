import React, { useContext, useEffect } from 'react';
import AuthContext from '../store/authentification/authContext';

const AuthRouteGuard = ({ children, navigation, ...props }) => {
    const { isAuthenticated } = useContext(AuthContext);
  
    useEffect(() => {
      if (isAuthenticated) {
        navigation.replace("DrawerNav");
      }
    }, [isAuthenticated]);
  
    return React.cloneElement(children, { ...props, navigation });
};
  
export default AuthRouteGuard;
  
