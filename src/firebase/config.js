import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDHghlPN5qFZREmr1_6vQhJduW-RJnxjPc',
  authDomain: 'field-area-measure-380f8.firebaseapp.com',
  databaseURL: 'https://field-area-measure-380f8.firebaseio.com',
  projectId: 'field-area-measure-380f8',
  storageBucket: 'field-area-measure-380f8.appspot.com',
  messagingSenderId: '406095126310',
  appId: '1:406095126310:android:3863cfd1ad65398511abe7',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };