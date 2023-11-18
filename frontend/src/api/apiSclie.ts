import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { VIIO_MARKET_SHOWCASE_BACKEND_SERVICE } from '../services';

export const apiSlice = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({ baseUrl: VIIO_MARKET_SHOWCASE_BACKEND_SERVICE.baseUrl }),
  endpoints: (builder) => ({
    getProducts: builder.mutation({
      query: (accessToken: string) => ({
        method: VIIO_MARKET_SHOWCASE_BACKEND_SERVICE.endpoints.get_products.method,
        url: VIIO_MARKET_SHOWCASE_BACKEND_SERVICE.endpoints.get_products.url,
        headers: { 'x-access-token': accessToken }
      })
    }),
    signIn: builder.mutation({
      query: (user: { email: string, password: string }) => ({
        method: VIIO_MARKET_SHOWCASE_BACKEND_SERVICE.endpoints.signin.method,
        url: VIIO_MARKET_SHOWCASE_BACKEND_SERVICE.endpoints.signin.url,
        body: user,
      })
    }),
    signUp: builder.mutation({
      query: (newUser: { username: string, email: string, password: string }) => ({
        method: VIIO_MARKET_SHOWCASE_BACKEND_SERVICE.endpoints.signup.method,
        url: VIIO_MARKET_SHOWCASE_BACKEND_SERVICE.endpoints.signup.url,
        body: newUser
      })
    })
  }),
})

export const { useGetProductsMutation, useSignInMutation, useSignUpMutation } = apiSlice;