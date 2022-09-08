import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth,signInWithPopup} from "firebase/auth";

import { getFirestore,query,getDocs,collection,where,addDoc,} from "firebase/firestore";

const firebaseConfig = {
 apiKey: "AIzaSyCTmH20LXO0T4UmhqN-eijHeI2jhFdJ6gQ",
 authDomain: "mamaput-964fe.firebaseapp.com",
 projectId: "mamaput-964fe",
 storageBucket: "mamaput-964fe.appspot.com",
 messagingSenderId: "341529817038",
 appId: "1:341529817038:web:46c9be032474f2a5b7859f",
 measurementId: "G-EH9L6KYJGC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
 try {
   const res = await signInWithPopup(auth, googleProvider);
   const user = res.user;
   const q = query(collection(db, "users"), where("uid", "==", user.uid));
   const docs = await getDocs(q);
   if (docs.docs.length === 0) {
    await addDoc(collection(db, "users"), {
     uid: user.uid,
     name: user.displayName,
     authProvider: "google",
     email: user.email,
    });
  }
 } catch (err) {
  console.error(err);
  alert(err.message);
 }
};



export {auth, db, signInWithGoogle};