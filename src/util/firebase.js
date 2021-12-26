import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCCCGiB3nLLTRll7gvvHpy_nAz5tGJP7OU",
    authDomain: "workshop-s5.firebaseapp.com",
    databaseURL: "https://workshop-s5-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "workshop-s5",
    storageBucket: "workshop-s5.appspot.com",
    messagingSenderId: "1068347442961",
    appId: "1:1068347442961:web:3a35c691884af8e0caeeb0"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase

