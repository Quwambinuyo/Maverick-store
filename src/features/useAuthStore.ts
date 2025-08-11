import { create } from "zustand";
import { signUp } from "../Auth/userAuth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Auth/firebaseconfig";
import { type SignUpData } from "../types/authDataTypes";
import { type AuthStore } from "../types/authDataTypes";

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  error: null,
  loading: false,
  rememberMe: false,

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

      set({ user, rememberMe: remember, loading: false });

      if (remember) {
        localStorage.setItem("user", JSON.stringify(user));
      } else {
        localStorage.removeItem("user");
      }

      return {};
    } catch (error: any) {
      let message = "Something went wrong";
      if (error.code === "auth/invalid-email")
        message = "Invalid email address";
      else if (error.code === "auth/user-not-found") message = "User not found";
      else if (error.code === "auth/wrong-password")
        message = "Incorrect password";

      set({ loading: false, error: message });
      return { error: message };
    }
  },

  logout: () => {
    auth.signOut();
    localStorage.removeItem("user");
    set({ user: null, rememberMe: false });
  },
}));
