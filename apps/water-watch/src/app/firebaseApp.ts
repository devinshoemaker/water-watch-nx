import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: '<api-key>',
  authDomain: '<auth-domain>',
  databaseURL: '<database-url>',
  projectId: '<project-id>',
  storageBucket: '<storage-bucket>',
  messagingSenderId: '<messaging-sender-id>',
  appId: '<app-id>',
  measurementId: '<measurement-id>'
};

const firebaseApp: firebase.app.App = firebase.initializeApp(firebaseConfig);
export const auth = firebaseApp.auth();

export default firebaseApp;
