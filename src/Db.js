import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDwo4ifaRcpPTOx4GBi6D5XAHauei_4bmA",
    authDomain: "wayv-ec975.firebaseapp.com",
    projectId: "wayv-ec975",
    storageBucket: "wayv-ec975.appspot.com",
    messagingSenderId: "711400063915",
    appId: "1:711400063915:web:8178684a46ee78f5aec8ee",
    measurementId: "G-XGGCZTFD0V"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.auth().languageCode = 'es';

export const db = firebaseApp.firestore();