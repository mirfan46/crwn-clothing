import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD5dx1LstgP2uH6TrxWMQ7HUc5F3PVHZD8",
  authDomain: "crwn-db-cf220.firebaseapp.com",
  projectId: "crwn-db-cf220",
  storageBucket: "crwn-db-cf220.appspot.com",
  messagingSenderId: "627896873213",
  appId: "1:627896873213:web:2552693b47fc48aaa8ce94",
  measurementId: "G-4JD6RJQJ4C",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
