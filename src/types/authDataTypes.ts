import { type User } from "firebase/auth";

export interface SignUpData {
  email: string;
  password: string;
}

export interface SignInData {
  email: string;
  password: string;
}
export interface AuthState {
  user: User | null;
  rememberMe: boolean;
  setRememberMe: (value: boolean) => void;
  login: (
    email: string,
    password: string,
    remember: boolean
  ) => Promise<{ error?: string }>;
  logout: () => void;
}
