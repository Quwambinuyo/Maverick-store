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
