import React from "react";
import AuthContext from "../context/AuthContext";
import { createUserWithEmailAndPassword, deleteUser } from "firebase/auth";
import auth from "../firebase/firebase.init";

const AuthProvider = ({ children }) => {
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const removeUser = (user) => {
    return deleteUser(user);
  };

  const userInfo = {
    createUser,
    removeUser,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
