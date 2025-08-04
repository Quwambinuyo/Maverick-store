import { create } from "zustand";
import { type SidebarButtonState } from "../types/types";

export const useSidebarStore = create<SidebarButtonState>((set) => ({
  isOpen: true,
  toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
}));
