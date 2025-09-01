import { create } from "zustand";
import { getUserInfoFromStore, signUp } from "../Auth/userAuth";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  type User,
} from "firebase/auth";
import { auth } from "../Auth/firebaseconfig";
import type {
  SignUpData,
  AuthStore,
  AuthUserProps,
} from "../types/authDataTypes";
import {
  getSavedUserData,
  removeSavedUserData,
  saveUserData,
} from "../utils/utils";
import { toast } from "react-toastify";

export const useAuthStore = create<AuthStore>((set) => {
  const user = localStorage.getItem("user") as string;

  const userData = localStorage.getItem("user") ? JSON.parse(user) : null;
  const uid = userData?.uid;

  const storedUser = getSavedUserData(`user-${uid}`);

  return {
    user: storedUser ? JSON.parse(storedUser.userData) : null,
    error: null,
    loading: false,
    rememberMe: localStorage.getItem("rememberMe") === "true",
    setUser: (user) => set({ user }),

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

      const updUser: AuthUserProps = {
        displayName: user?.displayName as string,
        email: user?.email as string,
        emailVerified: user?.emailVerified as boolean,
        uid: user?.uid as string,
        photoURL: user?.photoURL as any,
      };

      sessionStorage.setItem(`user-${user?.uid}`, JSON.stringify(updUser));
      set({ user: updUser, loading: false, error: null, loggedIn: true });
      // set({ user, loading: false, error: null, loggedIn: true });
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

        const updUser: AuthUserProps = {
          displayName: user?.displayName as string,
          email: user?.email as string,
          emailVerified: user?.emailVerified as boolean,
          uid: user?.uid as string,
          photoURL: user?.photoURL as any,
        };

        if (remember) {
          localStorage.setItem(`user-${user.uid}`, JSON.stringify(updUser));
          localStorage.setItem("rememberMe", "true");
        } else {
          sessionStorage.setItem(`user-${user.uid}`, JSON.stringify(updUser));
          // localStorage.setItem("rememberMe", "true");
        }

        set({
          user: updUser,
          rememberMe: remember,
          loading: false,
          loggedIn: true,
        });
        // set({ user, rememberMe: remember, loading: false, loggedIn: true });
        return {};
      } catch (error: any) {
        console.log(error?.message, error?.code);

        let message;
        if (error.code === "auth/network-request-failed") {
          message = "You are not connected to the internet";
        } else if (error.code === "auth/invalid-credential") {
          message = "Please check your credentials";
        } else if (error.code === "auth/invalid-email")
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

      toast.success("You are now logged out of your account");

      removeSavedUserData(uid as string);

      setTimeout(() => {
        console.log(2);

        window.location.href = "/login";
      }, 500);
    },

    passwordResetLink: async (email) => {
      try {
        set({ loading: true, error: null });
        await sendPasswordResetEmail(auth, email);
        toast.success("Reset link sent if email existst (check spam too).");
        return "email reset link sent";
      } catch (error: any) {
        toast.error("some error occured");
        console.log(error);
        return { error: error.message || "something went wrong" };
      } finally {
        set({ loading: false, error: null });
      }
    },

    updateUserProfile: (uid: string, context: string, updUser: any) => {
      saveUserData(uid, context, updUser);
      set({
        user: updUser,
      });
    },

    fetchUser: async () => {
      set({ loading: true, error: null });
      const { user, context, id, error } = await getUserInfoFromStore();

      if (error) {
        set({ loading: false, error });
        return;
      }

      saveUserData(id as string, context as string, user);

      set({ user, loading: false, error: null });
      // set({ user, loading: false, error: null, loggedIn: true });
    },

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
