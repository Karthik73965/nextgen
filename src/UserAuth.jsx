import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "./firebase";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }
  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }
  const [options, setOptions] = useState("maths");

  const setOption = (optionName,) => {
    setOptions(optionName);
  }


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  function isAuthenticated() {
    if (user) {
      return true;
    } else {
      return false;
    }
  }

  function getUid() {
    if (user) {
      return user.uid;
    } else {
      return "none";
    }
  }

  return (
    <userAuthContext.Provider
      value={{ user, logIn, signUp, logOut, googleSignIn, isAuthenticated, getUid, options, setOption }}
    >
      {children}
    </userAuthContext.Provider>

  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
