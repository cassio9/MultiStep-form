import { create } from "zustand";

interface User {
	name: string;
	email: string;
	phone: string;
	plan: string;
	billing: boolean;
	onlineService: boolean;
	largerStorage: boolean;
	customizableProfile: boolean;
	setName: (name: string) => void;
	setEmail: (email: string) => void;
	setPhone: (phone: string) => void;
}

const useUserStore = create<User>((set) => ({
	name: "",
	email: "",
	phone: "",
	plan: "",
	billing: false,
	onlineService: false,
	largerStorage: false,
	customizableProfile: false,

	setName: (name: string) => set((state: User) => ({ ...state, name: name })),
	setEmail: (email: string) => set((state) => ({ ...state, email: email })),
	setPhone: (phone: string) => set((state) => ({ ...state, phone: phone })),
}));

export default useUserStore;
