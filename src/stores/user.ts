import { create } from "zustand";

interface User {
	name: string;
	email: string;
	phone: string;
	plan: string;
	ArcadePrice: number;
	AdvancedPrice: number;
	ProPrice: number;
	isYearly: boolean;
	hasOnlineService: boolean;
	hasLargerStorage: boolean;
	hasCustomizableProfile: boolean;
	setName: (name: string) => void;
	setEmail: (email: string) => void;
	setPhone: (phone: string) => void;
	setPlan: (plan: string) => void;
	setIsYearly: (isYearly: boolean) => void;
	setHasOnlineService: (hasOnlineService: boolean) => void;
	setHasLargerStorage: (hasLargerStorage: boolean) => void;
	setHasCustomizableProfile: (hasCustomizableProfile: boolean) => void;
}

const useUserStore = create<User>((set) => ({
	name: "",
	email: "",
	phone: "",
	plan: "Arcade",
	ArcadePrice: 9,
	AdvancedPrice: 12,
	ProPrice: 15,
	isYearly: false,
	hasOnlineService: false,
	hasLargerStorage: false,
	hasCustomizableProfile: false,
	setName: (name: string) => set((state: User) => ({ ...state, name: name })),
	setEmail: (email: string) => set((state) => ({ ...state, email: email })),
	setPhone: (phone: string) => set((state) => ({ ...state, phone: phone })),
	setPlan: (plan: string) => set((state) => ({ ...state, plan: plan })),
	setIsYearly: (isYearly: boolean) => set((state) => ({ ...state, isYearly: isYearly })),
	setHasOnlineService: (hasOnlineService: boolean) =>
		set((state) => ({ ...state, hasOnlineService: hasOnlineService })),
	setHasLargerStorage: (hasLargerStorage: boolean) =>
		set((state) => ({ ...state, hasLargerStorage: hasLargerStorage })),
	setHasCustomizableProfile: (hasCustomizableProfile: boolean) =>
		set((state) => ({ ...state, hasCustomizableProfile: hasCustomizableProfile })),
}));

export default useUserStore;
