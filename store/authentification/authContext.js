import { createContext } from 'react';

const AuthContext = createContext({
  isAuthenticated: false,
  setAuthenticated: () => {},
});

export default AuthContext;
