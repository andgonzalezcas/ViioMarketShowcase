import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4040' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: '/products',
        headers: {
          'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NTc2ZDRlYmYwMTJhNTlmMTZlNjJiNyIsImlhdCI6MTcwMDIyODQ3MiwiZXhwIjoxNzAwMzE0ODcyfQ.ZYJP_ahlgLK57mconW9vsGMi3V4qHxBLzDDCoHQXiNQ'
        }
      })
    }),
    signIn: builder.query({
      query: (user: { email: string, password: string }) => ({
        method: 'POST',
        url: "/auth/signin",
        body: { email: user.email, password: user.password },
      })
    })
  }),
})

export const { useGetProductsQuery, useSignInQuery } = apiSlice;