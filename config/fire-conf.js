import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCPNqFGdwpv1pnnVgJB3kdDBQNm1719Rkk',
  authDomain: 'gulag-anthem.firebaseapp.com',
  projectId: 'gulag-anthem',
  storageBucket: 'gulag-anthem.appspot.com',
  messagingSenderId: '612898051445',
  appId: '1:612898051445:web:cdec7dcb2dcd2f4e96ef3c',
};

try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack);
  }
}
const fire = firebase;
const db = firebase.firestore();
const storage = firebase.storage();

export { fire as default, db, storage };
