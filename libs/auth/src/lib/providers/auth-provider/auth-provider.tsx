import firebase from 'firebase';
import React, { ReactNode, useEffect, useState } from 'react';

export const AuthContext = React.createContext<boolean>(false);

export interface AuthProviderProps {
  firebaseAuth: firebase.auth.Auth;
  children: ReactNode;
}

export const AuthProvider = (props: AuthProviderProps) => {
  const localAuthentication = localStorage.getItem('authenticated');
  const [authenticated, setAuthenticated] = useState<boolean>(
    JSON.parse(localAuthentication !== null ? localAuthentication : 'false')
  );

  useEffect(() => {
    const unsubscribeFromAuth: firebase.Unsubscribe = props.firebaseAuth.onAuthStateChanged(
      user => {
        localStorage.setItem('authenticated', (!!user).toString());
        setAuthenticated(!!user);
      }
    );

    return function cleanup() {
      unsubscribeFromAuth();
    };
  }, [props.firebaseAuth]);

  return (
    <AuthContext.Provider value={authenticated}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
