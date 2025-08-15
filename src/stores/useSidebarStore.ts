import { create } from "zustand";

type SidebarStore = {
  isSidebarOpen: boolean;
  isSidebarHovered: boolean;

  toggleSidebar: () => void;
  openSidebar: () => void;
  closeSidebar: () => void;

  setSidebarHovered: (hovered: boolean) => void;
};

export const useSidebarStore = create<SidebarStore>((set) => ({
  isSidebarOpen: true,
  isSidebarHovered: false,

  toggleSidebar: () =>
    set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  openSidebar: () => set({ isSidebarOpen: true }),
  closeSidebar: () => set({ isSidebarOpen: false }),

  setSidebarHovered: (hovered: boolean) => set({ isSidebarHovered: hovered }),
}));
