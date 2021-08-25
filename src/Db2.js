import firebase from 'firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDhKa7WEht2gj3qnz2b_Gd0CpEe8BEKEZg",
    authDomain: "catproyect-33d43.firebaseapp.com",
    databaseURL: "https://catproyect-33d43-default-rtdb.firebaseio.com",
    projectId: "catproyect-33d43",
    storageBucket: "catproyect-33d43.appspot.com",
    messagingSenderId: "690415765097",
    appId: "1:690415765097:web:b4a887959def26c73004f8",
    measurementId: "G-4FTT79GSCS"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.auth().languageCode = 'es';
 
export const db = firebaseApp.firestore();


export const storage = firebase.storage()


