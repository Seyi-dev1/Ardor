import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore/lite";
import { getAuth, sendEmailVerification } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDAxT-zlN0u7CGIX4cwIATAKF-x4NzREvQ",
  authDomain: "ardor-finances.firebaseapp.com",
  projectId: "ardor-finances",
  storageBucket: "ardor-finances.appspot.com",
  messagingSenderId: "635239525184",
  appId: "1:635239525184:web:23dbd8662678c36535e8a5",
};

export const handleDeposit = async (userAuth, data) => {
  const userRef = doc(database, `/users/${userAuth}`);
  const snapShot = await getDoc(userRef);
  const prevData = snapShot.data();
  console.log(prevData);
  // const deposits = prevData.deposits;
  try {
    setDoc(userRef, {
      ...prevData,
      deposits: [...prevData.deposits, data],
    });
  } catch (error) {
    console.log(error);
  }
};
export const handleWithdrawals = async (userAuth, data) => {
  const userRef = doc(database, `/users/${userAuth}`);
  const snapShot = await getDoc(userRef);
  const prevData = snapShot.data();
  console.log(prevData);
  try {
    setDoc(userRef, {
      ...prevData,
      withdrawals: [...prevData.withdrawals, data],
    });
  } catch (error) {
    console.log(error);
  }
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
