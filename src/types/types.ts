import { type ReactNode } from "react";

export interface SidebarButtonState {
  isOpen: boolean;
  toggleSidebar: () => void;
  setSidebar: (open: boolean) => void;

  loading: boolean;
  setLoading: (value: boolean) => void;
}
export interface CustomButtonProps {
  label?: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  children?: React.ReactNode;
}

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  children?: React.ReactNode;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  discountPercent?: number;
  discountPrice?: number;
  quantity: number;
  amount: number;
  colors?: string[];
}

export type ProductsType = {
  [category: string]: {
    [subcategory: string]: Product[];
  };
};

export type LandingNavState = {
  isOpen: boolean;
  toggleLandingNav: () => void;
};

export interface FormInput {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export interface ReusableFormProps {
  children: ReactNode;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  className?: string;
  formId?: string;
}

export interface CustomButtonProps {
  label?: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  children?: React.ReactNode;
}
