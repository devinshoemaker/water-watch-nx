import {
  IonAlert,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import firebase from 'firebase';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export interface SettingsPageProps {
  firebaseAuth: firebase.auth.Auth;
}

export const SettingsPage = (props: SettingsPageProps) => {
  const [showLogOutAlert, setShowLogOutAlert] = useState<boolean>(false);
  const history = useHistory();

  const logOutHandler = () => {
    props.firebaseAuth.signOut();
    history.push('/login');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem button onClick={() => setShowLogOutAlert(true)}>
            <IonLabel>Log out</IonLabel>
            <IonAlert
              isOpen={showLogOutAlert}
              header={'Are you sure?'}
              buttons={[
                {
                  text: 'Confirm',
                  handler: logOutHandler
                },
                {
                  text: 'Cancel',
                  role: 'cancel',
                  handler: () => setShowLogOutAlert(false)
                }
              ]}
            />
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default SettingsPage;
