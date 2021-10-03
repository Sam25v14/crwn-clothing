import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";


const config = {
    apiKey: "AIzaSyCZPEdcqWICgz8xlliOadzPSjynCg-Z2ws",
    authDomain: "crwn-db-b3c40.firebaseapp.com",
    projectId: "crwn-db-b3c40",
    storageBucket: "crwn-db-b3c40.appspot.com",
    messagingSenderId: "149931060192",
    appId: "1:149931060192:web:f4f5068120c2fd83dfd985",
    measurementId: "G-KCSGFD68XM"
};

const firebase = initializeApp(config);

export const auth = getAuth();
export const firestore = getFirestore(firebase);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => signInWithPopup(auth, provider);

export default firebase;