
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyA0wezfjBm7q2jelMPSCm2r8ejNZPdCEE8",
  authDomain: "tiktok-jornada-43977.firebaseapp.com",
  projectId: "tiktok-jornada-43977",
  storageBucket: "tiktok-jornada-43977.appspot.com",
  messagingSenderId: "917092754224",
  appId: "1:917092754224:web:868244b2a44f6614439ef5"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore (app);

export default db;