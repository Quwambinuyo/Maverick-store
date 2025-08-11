import { create } from "zustand";
import { signUp } from "../Auth/userAuth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Auth/firebaseconfig";
import { type SignUpData, type AuthStore } from "../types/authDataTypes";

export const useAuthStore = create<AuthStore>((set) => {
  const storedUser = localStorage.getItem("user");

  return {
    user: storedUser ? JSON.parse(storedUser) : null,
    error: null,
    loading: false,
    rememberMe: localStorage.getItem("rememberMe") === "true",

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

      // Save user in localStorage
      localStorage.setItem("user", JSON.stringify(user));
      set({ user, loading: false, error: null });
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

        // Save user in localStorage if remember is true
        if (remember) {
          localStorage.setItem("user", JSON.stringify(user));
          localStorage.setItem("rememberMe", "true");
        }

        set({ user, rememberMe: remember, loading: false });
        return {};
      } catch (error: any) {
        let message = "Something went wrong";
        if (error.code === "auth/invalid-email")
          message = "Invalid email address";
        else if (error.code === "auth/user-not-found")
          message = "User not found";
        else if (error.code === "auth/wrong-password")
          message = "Incorrect password";

        set({ loading: false, error: message });
        return { error: message };
      }
    },

    logout: () => {
      auth.signOut();
      localStorage.removeItem("user");
      localStorage.removeItem("rememberMe");
      set({ user: null, rememberMe: false });
    },
  };
});
