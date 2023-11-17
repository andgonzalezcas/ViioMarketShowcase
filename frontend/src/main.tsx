import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.tsx'
import './index.css'

import { apiSlice } from './api/apiSclie.ts'
import StoreView from './pages/store.tsx';
import SignInView from './pages/signin.tsx';
import SignUpView from './pages/signup.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  }, {
    path: "/store",
    element: <StoreView />,
  }, {
    path: "/login",
    element: <SignInView />,
  }, {
    path: "/register",
    element: <SignUpView />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApiProvider api={apiSlice}>
      <RouterProvider router={router} />
    </ApiProvider>
  </React.StrictMode>,
)
