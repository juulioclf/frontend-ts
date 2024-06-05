import { createContext } from "react";
import { signInRequest } from "@/services/auth";
import { setCookie, parseCookies } from "nookies";
import Router from "next/router";
import useLocalStorageState from "./useLocalStorageState";
import { api } from "@/services/api";

type User = {
    name: string;
    email: string;
};
  
type SignInData = {
    email: string;
    password: string;
};

type AuthContextType = {
    isAuthenticated: boolean;
    user: User | null;
    signIn: (data: SignInData) => Promise<any>;
};

type StoredUser = {
    name: string;
    email: string;
};

const initialUser = (): StoredUser | null => {
    if (typeof window !== 'undefined') {
        const storedUser = localStorage.getItem('nextauth.user');
        return storedUser ? JSON.parse(storedUser) : null;
    };
    return null;
};

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({children}: any)  {

    const [user, setUser] = useLocalStorageState<User | null>('nextauth.user', initialUser());
    
    const isAuthenticated = !!user;

    async function signIn({email, password}: SignInData) {
        const {token, user} = await signInRequest({
            email,
            password
        });

        setCookie(undefined, 'nextauth.token', token);

        api.defaults.headers['Authorization'] = `Baerer ${token}`;

        setUser(user);

        Router.push('/home');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, signIn, user }}>
            {children}
        </AuthContext.Provider>
    );
};