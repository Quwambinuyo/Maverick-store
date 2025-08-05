export interface SidebarButtonState {
  isOpen: boolean;
  toggleSidebar: () => void;
  setSidebar: (open: boolean) => void;
}
export interface CustomButtonProps {
  label?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  children?: React.ReactNode;
}

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  children?: React.ReactNode;
}

export interface Product {
  id: number;
  name: string;
  image: string;
  colors: string[];
  price: number;
  discountPercent: number;
  discountPrice: number;
  quantity: number;
  amount: number;
}

export type ProductsType = {
  [category: string]: {
    [subcategory: string]: Product[];
  };
};
