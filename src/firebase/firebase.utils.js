import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore/lite";
import { getAuth, sendEmailVerification } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUG8umNIzW3V_CWHcPm0FdiaZgrzEF2p8",
  authDomain: "thompsons-central.firebaseapp.com",
  projectId: "thompsons-central",
  storageBucket: "thompsons-central.appspot.com",
  messagingSenderId: "388238992464",
  appId: "1:388238992464:web:d3abd309cceb1c7eb39d55",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = doc(database, `/users/${userAuth.uid}`);

  const snapShot = await getDoc(userRef);

  if (!snapShot.exists()) {
    const { email } = userAuth;
    const createdAt = new Date().getTime();
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

export const confirmEmail = async () => {
  try {
    await sendEmailVerification(auth.currentUser);
    console.log("Email sent!");
  } catch (error) {
    console.log("email not sent!");
  }
};
