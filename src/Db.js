import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAThxjHGZT3gc68_APyaMkp8DkQWbdFBWY",
    authDomain: "form-131b2.firebaseapp.com",
    projectId: "form-131b2",
    storageBucket: "form-131b2.appspot.com",
    messagingSenderId: "501131040473",
    appId: "1:501131040473:web:c4b859052c3ce92c3190c8",
    measurementId: "G-9BMHJPY5YD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.auth().languageCode = 'es';

export const db = firebaseApp.firestore();