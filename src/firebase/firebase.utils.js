import { initializeApp } from "firebase/app";
import * as firestore from "firebase/firestore";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";

const config = {
  apiKey: "AIzaSyCZPEdcqWICgz8xlliOadzPSjynCg-Z2ws",
  authDomain: "crwn-db-b3c40.firebaseapp.com",
  projectId: "crwn-db-b3c40",
  storageBucket: "crwn-db-b3c40.appspot.com",
  messagingSenderId: "149931060192",
  appId: "1:149931060192:web:f4f5068120c2fd83dfd985",
  measurementId: "G-KCSGFD68XM",
};

const firebase = initializeApp(config);

export const firestoreInstance = firestore.getFirestore(firebase);
export const auth = getAuth(firebase);

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(firestoreInstance, `users/${userAuth.uid}`);
  const snapShot = await firestore.getDoc(userRef);

  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await firestore.setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(firestoreInstance, collectionKey);
  const batch = firestore.writeBatch(firestoreInstance);
  objectsToAdd.forEach((obj) => {
    const newDocRef = firestore.doc(collectionRef);
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertColletionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {})
};

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);

export default firebase;
