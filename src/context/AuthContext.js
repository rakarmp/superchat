import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { db } from "../firebase";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);

      // update user status to online
      if (user) {
        const userRef = doc(db, "users", user.uid);
        await setDoc(userRef, { online: true }, { merge: true });
      }
    });

    return () => {
      // update user status to offline on logout
      if (currentUser && currentUser.uid) {
        const userRef = doc(db, "users", currentUser.uid);
        setDoc(userRef, { online: false }, { merge: true });
      }
      unsub();
    };
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
