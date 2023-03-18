import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJ0QbKhz1x-1H58sy10PVhh5g1sdlvBK4",

  authDomain: "superchat-bcd3d.firebaseapp.com",

  projectId: "superchat-bcd3d",

  storageBucket: "superchat-bcd3d.appspot.com",

  messagingSenderId: "522309959394",

  appId: "1:522309959394:web:28f92816631e0a785128bb",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
