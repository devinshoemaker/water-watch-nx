import React, { useEffect, useState } from 'react';
import { auth } from '../../firebaseApp';

export const AuthContext = React.createContext<boolean>(false);

const AuthProvider: React.FC = ({ children }) => {
  const localAuthentication = localStorage.getItem('authenticated');
  const [authenticated, setAuthenticated] = useState<boolean>(
    JSON.parse(localAuthentication !== null ? localAuthentication : 'false')
  );

  useEffect(() => {
    const unsubscribeFromAuth: firebase.Unsubscribe = auth.onAuthStateChanged(
      user => {
        localStorage.setItem('authenticated', (!!user).toString());
        setAuthenticated(!!user);
      }
    );

    return function cleanup() {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <AuthContext.Provider value={authenticated}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
