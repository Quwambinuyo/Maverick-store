import { auth } from "../Auth/firebaseconfig";
import { useEffect, useState, type ReactNode } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { type SignUpData, type SignInData } from "../types/authDataTypes";

export const signUp = async ({ email, password }: SignUpData) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return { user: userCredential.user };
  } catch (error: any) {
    let message = "Something went wrong";

    if (error.code === "auth/email-already-in-use") {
      message = "Email already exists";
    } else if (error.code === "auth/invalid-email") {
      message = "Invalid email address";
    } else if (error.code === "auth/weak-password") {
      message = "Password should be at least 6 characters";
    }

    return { error: message };
  }
};

export const signIn = async ({ email, password }: SignInData) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return { user: userCredential.user };
  } catch (error: any) {
    let message = "Something went wrong";

    if (error.code === "auth/user-not-found") {
      message = "No account found with this email";
    } else if (error.code === "auth/wrong-password") {
      message = "Incorrect password";
    } else if (error.code === "auth/invalid-email") {
      message = "Invalid email address";
    }

    return { error: message };
  }
};

export interface ProtectedRouteProps {
  children: ReactNode;
}

// export const useAuthStatus = () => {
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [checkingStatus, setCheckingStatus] = useState(true);

//   useEffect(() => {
//     const auth = getAuth();

//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setLoggedIn(!!user);
//       setCheckingStatus(false);
//     });

//     return () => unsubscribe();
//   }, []);

//   return { loggedIn, checkingStatus };
// };
