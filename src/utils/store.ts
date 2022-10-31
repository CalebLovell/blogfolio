import create from 'zustand';

type MapState = {
	sidebarIsOpen: boolean;
	setSidebarIsOpen: (by: boolean) => void;
};

export const useStore = create<MapState>(set => ({
	sidebarIsOpen: false,
	setSidebarIsOpen: by => set(() => ({ sidebarIsOpen: by })),
}));
