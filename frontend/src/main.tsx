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
import ProductDetailedCard from './pages/store/productDetailedCard.tsx';
import FindByCategory from './pages/store/findByCategory.tsx';
import FindByName from './pages/store/findByName.tsx';
import StoreCart from './pages/store/cart.tsx';

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
    children: [
      {
        path: "categories",
        element: <FindByCategory />
      }, {
        path: '',
        element: <FindByName />
      }, {
        path: 'cart',
        element: <StoreCart />
      }, {
        path: ':productId',
        element: <ProductDetailedCard />
      }
    ]
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
