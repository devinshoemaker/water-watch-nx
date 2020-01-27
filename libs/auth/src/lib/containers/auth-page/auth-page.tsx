import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import firebase from 'firebase';
import * as firebaseui from 'firebaseui';
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

export interface AuthPageProps {
  firebaseAuth: firebase.auth.Auth;
}

export const AuthPage = (props: AuthPageProps) => {
  const uiConfig = {
    signInSuccessUrl: '/home',
    signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
    credentialHelper: firebaseui.auth.CredentialHelper.NONE
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={props.firebaseAuth}
        />
      </IonContent>
    </IonPage>
  );
};

export default AuthPage;
