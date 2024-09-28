import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAuxlUNmjk27lnG2K3HhpQD7Ksemv6EwYg",
    authDomain: "desafio-fb1.firebaseapp.com",
    projectId: "desafio-fb1",
    storageBucket: "desafio-fb1.appspot.com",
    messagingSenderId: "108278685625",
    appId: "1:108278685625:web:0f150884e5e66a8a74e068"
  };


const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };
