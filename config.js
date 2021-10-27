import firebase from 'firebase';
require('@firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyC5MhpHO2Q261muB2YoBNoFcKX9usFLUtw",
  authDomain: "bedtime-stories-33221.firebaseapp.com",
  projectId: "bedtime-stories-33221",
  storageBucket: "bedtime-stories-33221.appspot.com",
  messagingSenderId: "964265428701",
  appId: "1:964265428701:web:8a0db46d66bf8107247d34"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
