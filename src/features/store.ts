import { create } from "zustand";
import { type SidebarButtonState } from "../types/types";

export const useSidebarStore = create<SidebarButtonState>((set) => ({
  isOpen: window.innerWidth >= 640,
  toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
  setSidebar: (open) => set({ isOpen: open }),
}));
