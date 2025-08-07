import { create } from "zustand";
import { type LandingNavState, type SidebarButtonState } from "../types/types";

export const useSidebarStore = create<SidebarButtonState>((set) => ({
  isOpen: window.innerWidth >= 640,
  toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
  setSidebar: (open) => set({ isOpen: open }),

  loading: false,
  setLoading: (value) => set({ loading: value }),
}));

export const useLandingNavbar = create<LandingNavState>((set) => ({
  isOpen: false,
  toggleLandingNav: () => set((state) => ({ isOpen: !state.isOpen })),
}));
