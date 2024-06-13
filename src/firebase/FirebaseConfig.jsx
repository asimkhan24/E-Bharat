
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA1c13OObH-zcqzTMewGOf7PH-AFnao5cs",
  authDomain: "ecombharat-123.firebaseapp.com",
  projectId: "ecombharat-123",
  storageBucket: "ecombharat-123.appspot.com",
  messagingSenderId: "359023040499",
  appId: "1:359023040499:web:9bd491e8d0054bbfbda486"
};

const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB, auth} ;