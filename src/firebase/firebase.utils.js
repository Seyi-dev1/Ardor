import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUUzoe-5pnkprddtKnIOQgUolBYiWJUDk",
  authDomain: "tooth-fairy-7b6af.firebaseapp.com",
  projectId: "tooth-fairy-7b6af",
  storageBucket: "tooth-fairy-7b6af.appspot.com",
  messagingSenderId: "249359822897",
  appId: "1:249359822897:web:734431a0f4e0bd2e08a510",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = doc(database, `/users/${userAuth.uid}`);

  const snapShot = await getDoc(userRef);

  if (!snapShot.exists()) {
    const { email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userRef, {
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

export const getCurrentUser = async () => {
  return new Promise((resolve, reject) => {
    const unsubcribe = auth.onAuthStateChanged((userAuth) => {
      unsubcribe();
      resolve(userAuth);
    }, reject);
  });
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getFirestore(app);
export const auth = getAuth();
