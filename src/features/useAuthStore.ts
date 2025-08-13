import { create } from "zustand";
import { signUp } from "../Auth/userAuth";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  type User,
} from "firebase/auth";
import { auth } from "../Auth/firebaseconfig";
import { type SignUpData, type AuthStore } from "../types/authDataTypes";

export const useAuthStore = create<
  AuthStore & {
    loggedIn: boolean;
    checkingStatus: boolean;
    initAuth: () => void;
  }
>((set) => {
  const storedUser = localStorage.getItem("user");

  return {
    user: storedUser ? JSON.parse(storedUser) : null,
    error: null,
    loading: false,
    rememberMe: localStorage.getItem("rememberMe") === "true",

    // NEW: Firebase auth status
    loggedIn: !!storedUser,
    checkingStatus: true,

    setRememberMe: (value) => {
      set({ rememberMe: value });
      if (value) {
        localStorage.setItem("rememberMe", "true");
      } else {
        localStorage.removeItem("rememberMe");
      }
    },

    registerUser: async (data: SignUpData) => {
      set({ loading: true, error: null });
      const { user, error } = await signUp(data);

      if (error) {
        set({ loading: false, error });
        return;
      }

      localStorage.setItem("user", JSON.stringify(user));
      set({ user, loading: false, error: null, loggedIn: true });
    },

    login: async (email, password, remember) => {
      try {
        set({ loading: true, error: null });

        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;

        if (remember) {
          localStorage.setItem("user", JSON.stringify(user));
          localStorage.setItem("rememberMe", "true");
        }

        set({ user, rememberMe: remember, loading: false, loggedIn: true });
        return {};
      } catch (error: any) {
        let message = "Something went wrong";
        if (error.code === "auth/invalid-email")
          message = "Invalid email address";
        else if (error.code === "auth/user-not-found")
          message = "User not found";
        else if (error.code === "auth/wrong-password")
          message = "Incorrect password";

        set({ loading: false, error: message, loggedIn: false });
        return { error: message };
      }
    },

    logout: () => {
      auth.signOut();
      localStorage.removeItem("user");
      localStorage.removeItem("rememberMe");
      set({ user: null, rememberMe: false, loggedIn: false });
    },

    // NEW: Initialize Firebase auth listener
    initAuth: () => {
      onAuthStateChanged(auth, (user: User | null) => {
        if (user) {
          localStorage.setItem("user", JSON.stringify(user));
          set({ user, loggedIn: true, checkingStatus: false });
        } else {
          localStorage.removeItem("user");
          set({ user: null, loggedIn: false, checkingStatus: false });
        }
      });
    },
  };
});
