import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { AuthPage } from '@water-watch/auth';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { auth } from '../../firebaseApp';

export const UnauthenticatedApp = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route
            exact
            path="/login"
            render={() => <AuthPage firebaseAuth={auth} />}
          />
          <Redirect to="/login" />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default UnauthenticatedApp;
