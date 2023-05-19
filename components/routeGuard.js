import React ,{ useContext, useEffect } from 'react';
import AuthContext from '../store/authentification/authContext';

const RouteGuard = ({ children, navigation, ...props }) => {
  const { isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    if (!isAuthenticated) {
      navigation.replace("SignIn");
    }
  }, [isAuthenticated]);

  return React.cloneElement(children, { ...props, navigation });
};

export default RouteGuard;

