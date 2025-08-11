import { create } from "zustand";
import { signUp } from "../Auth/userAuth";
import { type SignUpData } from "../types/authDataTypes";

interface AuthState {
  loading: boolean;
  error: string | null;
  user: any | null;
  registerUser: (data: SignUpData) => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  loading: false,
  error: null,
  user: null,

  registerUser: async (data: SignUpData) => {
    set({ loading: true, error: null });

    const { user, error } = await signUp(data);

    if (error) {
      set({ loading: false, error });
      return;
    }

    set({ user, loading: false, error: null });
  },
}));
