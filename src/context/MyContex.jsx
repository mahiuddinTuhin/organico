import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { createContext, useState } from "react";
import { app } from "../authentication/Firebase.config";
const auth = getAuth(app);
export const userContext = createContext();

const MyContex = ({ children }) => {
  const [user, setUser] = useState("");

  const creatingUserWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInWithEmail = (auth, email, password) => {
    return signInWithEmailAndPassword(email, password);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const info = {
    creatingUserWithEmail,
    signInWithEmail,
    user,
    setUser,
  };
  return (
    <div>
      <userContext.Provider value={info}>{children}</userContext.Provider>
    </div>
  );
};

export default MyContex;
