import React, { createContext, useEffect, useState } from "react";
import auth from "../Firesbase/firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  const createUserAccount = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    setLoader(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoader(false);
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const signInWithGoogle = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };

  const updateProfileInfo = (profile) => {
    setLoader(true);
    return updateProfile(auth.currentUser, profile);
  };

  const info = {
    user,
    setUser,
    signInUser,
    signOutUser,
    createUserAccount,
    signInWithGoogle,
    loader,
    setLoader,
    updateProfileInfo,
  };

  return (
    <div>
      <AuthContext.Provider value={info}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
