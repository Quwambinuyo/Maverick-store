import { type AuthState } from "../types/authDataTypes";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Auth/firebaseconfig";
import { create } from "zustand";

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  rememberMe: false,

  setRememberMe: (value) => {
    set({ rememberMe: value });
    if (value) {
      localStorage.setItem("rememberMe", "true");
    } else {
      localStorage.removeItem("rememberMe");
    }
  },

  login: async (email, password, remember) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      set({ user, rememberMe: remember });

      if (remember) {
        localStorage.setItem("user", JSON.stringify(user));
      } else {
        localStorage.removeItem("user");
      }

      return {};
    } catch (error: any) {
      let message = "Something went wrong";

      if (error.code === "auth/invalid-email") {
        message = "Invalid email address";
      } else if (error.code === "auth/user-not-found") {
        message = "User not found";
      } else if (error.code === "auth/wrong-password") {
        message = "Incorrect password";
      }

      return { error: message };
    }
  },

  logout: () => {
    auth.signOut();
    localStorage.removeItem("user");
    set({ user: null, rememberMe: false });
  },
}));
