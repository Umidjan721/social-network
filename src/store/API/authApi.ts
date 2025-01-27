import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/baseUrl";
export interface IRegisterUserPayload {
  name: string,
  email: string,
  phone_number: string,
  password: string,
  user_city: string
}

interface IRegisterUserResponse {
  status: number;
  user_id: number;
}
interface ILoginUserPayload {
  email: string,
  password: string,
}
interface ILoginUserResponse extends IRegisterUserResponse { }


export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    register: builder.mutation<IRegisterUserResponse, IRegisterUserPayload>({
      query: (payload) => ({
        url: "/registration",
        method: "POST",
        body: payload
      })
    }),
    loginUser: builder.mutation<ILoginUserResponse, ILoginUserPayload>({
      query: (payload) => ({
        url: "/login",
        method: "POST",
        body: payload
      })
    })
  }),
});

export const { useRegisterMutation, useLoginUserMutation } = authApi
