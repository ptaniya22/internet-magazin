import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface IUser {
    id: number;
    username: string;
    email: string;
    avatar?: string;
}

interface IUserStore {
    user: IUser | null;
    isAuthenticated: boolean;
    setUser: (userData: IUser) => void;
    logout: () => void;
}

const userStore = create<IUserStore>()(devtools(
    (set,get) => ({
        user: null,
        isAuthenticated: false,
        setUser: (userData) => set({user: userData, isAuthenticated: true}),
        logout: () => set({ user: null, isAuthenticated: false})
    }) 
))

export default userStore