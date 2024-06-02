import { api } from "@/services/api";
import { signInRequest } from "@/services/auth";
import Router from "next/router";
import { setCookie } from "nookies";
import { createContext, useState } from "react";

type User = {
    name: string;
    email: string;
}
  
type SignInData = {
    email: string;
    password: string;
}

type SignInResponse = {
    access_token: string
    name: string
}

type AuthContextType = {
    isAuthenticated: boolean;
    user: User | null;
    signIn: (data: SignInData) => Promise<any>
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({children}: any)  {

    const [user, setUser] = useState<User | null>(null)

    const isAuthenticated = !!user;

    async function signIn({email, password}: SignInData) {
        const {token, user} = await signInRequest({
            email,
            password
        })
        
        setCookie(undefined, 'nextauth.token', token)

        api.defaults.headers['Authorization'] = `Baerer ${token}`

        setUser(user)

        Router.push('/home');

    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, signIn, user }}>
            {children}
        </AuthContext.Provider>
    )
}