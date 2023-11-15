import { createContext, useContext, useState } from 'react';

const AuthContext = createContext({
  _Login: () => {}, // provide a default value or the actual implementation
});

export default AuthContext;
