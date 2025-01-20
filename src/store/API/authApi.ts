import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/baseUrl";
interface IRegisterUserPayload{
    name:string,
    email:string,
    phone_number:string,
    password:string,
    user_city:string
}
interface IRegisterUserResponse {
    status:number,
    user_id:number
}

interface ILoginUserPayload {
    email:string,
    password:string;
}

interface ILoginUserResponse extends IRegisterUserPayload {}

export const authApi = createApi({
    reducerPath:"authApi",
    baseQuery: fetchBaseQuery({baseUrl: baseUrl}),
    endpoints: (builder) => ({
        registerUser:builder.mutation<IRegisterUserPayload, IRegisterUserResponse>({
            query: (payload)=>({
                url: "/registration",
                method: "POST",
                body:payload,
            }),
        }),
        loginUser:builder.mutation<ILoginUserPayload, ILoginUserResponse>({
            query: (payload)=>({
                url: "/login",
                method: "POST",
                body:payload,
            }),
        }),
    }),
});

export const {useRegisterUserMutation, useLoginUserMutation}= authApi