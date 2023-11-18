import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Provider } from 'react-redux';
import store from './redux/store.ts';

import App from './App.tsx'
import './index.css'

import { apiSlice } from './api/apiSclie.ts'
import StoreView from './pages/store.tsx';
import SignInView from './pages/signin.tsx';
import SignUpView from './pages/signup.tsx';
import ErrorView from './pages/error.tsx';
import IsUserSessionExpired from './layout/isUserSessionExpired.layout.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorView />,
  }, {
    path: "/store",
    element: <IsUserSessionExpired >
      <StoreView />
    </IsUserSessionExpired>,
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
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ApiProvider>
  </React.StrictMode >,
)
