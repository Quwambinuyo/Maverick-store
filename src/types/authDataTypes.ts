// import { type User } from "firebase/auth";

// export interface AuthUserProps {
//   displayName: string;
//   email: string;
//   emailVerified: boolean;
//   uid: string;
//   photoURL: { base64: string };
//   [key: string]: any;
// }

// export interface SignUpData {
//   name: string;
//   email: string;
//   password: string;
// }

// export interface SignInData {
//   email: string;
//   password: string;
// }
// export interface AuthState {
//   user: AuthUserProps | null;
//   // user: User | null;
//   rememberMe: boolean;
//   setRememberMe: (value: boolean) => void;
//   login: (
//     email: string,
//     password: string,
//     remember: boolean
//   ) => Promise<{ error?: string }>;
//   logout: () => void;
// }

// export interface AuthStore extends AuthState {
//   error: string | null;
//   rememberMe: boolean;
//   loading: boolean;
//   registerUser: (data: SignUpData) => Promise<void>;
//   login: (
//     email: string,
//     password: string,
//     remember: boolean
//   ) => Promise<{ error?: string }>;
//   logout: () => void;
//   setRememberMe: (value: boolean) => void;
// }

export interface AuthUserProps {
  displayName: string | null;
  email: string | null;
  emailVerified: boolean;
  uid: string;
  photoURL: { base64: string } | any;
  [key: string]: any;
}

export interface SignUpData {
  name: string;
  email: string;
  password: string;
}

export interface SignInData {
  email: string;
  password: string;
}

// 🔹 Single source of truth for Zustand store
export interface AuthStore {
  user: AuthUserProps | null;
  error: string | null;
  loading: boolean;
  rememberMe: boolean;
  loggedIn: boolean;
  checkingStatus: boolean;

  setUser: (user: AuthUserProps | null) => void;
  setRememberMe: (value: boolean) => void;
  initAuth: () => void;
  fetchUser: () => void;
  passwordResetLink: (email: string) => Promise<{ error?: string }>;
  registerUser: (data: SignUpData) => Promise<void>;
  login: (
    email: string,
    password: string,
    remember: boolean
  ) => Promise<{ error?: string }>;
  logout: () => void;
}
