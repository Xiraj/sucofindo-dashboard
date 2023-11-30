import { createContext } from 'react';

const AuthContext = createContext({
  _Login: () => {}, // provide a default value or the actual implementation
  _Accept: () => {},
});

export default AuthContext;
