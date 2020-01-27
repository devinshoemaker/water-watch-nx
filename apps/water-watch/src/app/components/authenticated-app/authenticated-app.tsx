import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { HomePage } from '@water-watch/home';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Settings from '../../pages/Settings/Settings';
import Menu from '../menu/menu';

export const AuthenticatedApp = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/settings" component={Settings} />
            <Redirect to="/home" />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default AuthenticatedApp;
