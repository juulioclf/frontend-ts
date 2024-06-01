import { api } from "./api";

type SignInRequestData = {
    email: string;
    password: string;
}

type SignInRequestRes = {
    access_token: string
    name: string
}

export async function signInRequest(data: SignInRequestData) {
    const response = await api.post("/login", data)

    return {
        token: response.data.access_token,
        user: response.data.user
    }
}