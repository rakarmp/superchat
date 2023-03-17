import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCKlFrNJ_SZSbEiQQzhLstV42hDeP_Xaws",
  authDomain: "chat-c66da.firebaseapp.com",
  projectId: "chat-c66da",
  storageBucket: "chat-c66da.appspot.com",
  messagingSenderId: "910406475373",
  appId: "1:910406475373:web:9ef43d7b8d81239dae6964",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
