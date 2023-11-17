import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { VIIO_MARKET_SHOWCASE_BACKEND_SERVICE } from '../services';

export const apiSlice = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({ baseUrl: VIIO_MARKET_SHOWCASE_BACKEND_SERVICE.baseUrl }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (accessToken: string) => ({
        method: VIIO_MARKET_SHOWCASE_BACKEND_SERVICE.endpoints.get_products.method,
        url: VIIO_MARKET_SHOWCASE_BACKEND_SERVICE.endpoints.get_products.url,
        headers: { 'x-access-token': accessToken }
      })
    }),
    signIn: builder.query({
      query: (user: { email: string, password: string }) => ({
        method: VIIO_MARKET_SHOWCASE_BACKEND_SERVICE.endpoints.signin.method,
        url: VIIO_MARKET_SHOWCASE_BACKEND_SERVICE.endpoints.signin.url,
        body: user,
      })
    }),
    signUp: builder.query({ // Esto no es mutable sino query por que se recibe de vuelta el tocken de acceso.
      query: (newUser: { username: string, email: string, password: string }) => ({
        method: VIIO_MARKET_SHOWCASE_BACKEND_SERVICE.endpoints.signup.method,
        url: VIIO_MARKET_SHOWCASE_BACKEND_SERVICE.endpoints.signup.url,
        body: newUser
      })
    })
  }),
})

export const { useGetProductsQuery, useSignInQuery, useSignUpQuery } = apiSlice;