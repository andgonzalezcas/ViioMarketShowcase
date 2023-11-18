import { useLayoutEffect } from "react";

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useGetProductsMutation } from "../api/apiSclie"
import { setProductList } from "../redux/products.slice";
import StoreNavbar from "../components/storeNavbar";
import { Outlet } from "react-router-dom";

const StoreView = () => {
  const [apiGetProducts] = useGetProductsMutation();
  const dispatch = useAppDispatch();
  const userToken = useAppSelector((state) => state.auth.userToken);
  const productList = useAppSelector((state) => state.productList.list);

  useLayoutEffect(() => {
    apiGetProducts(userToken)
      .then(res => {
        if (!('data' in res)) throw 'Not valid return'

        if (res.data.success) {
          dispatch(setProductList(res.data.response))
        } else {
          alert('Error (' + res.data.response + ')')
        }
      })
      .catch(error => { console.error({ error }) })
  }, [])

  if (!productList) return <p>Error loading products</p>

  return (
    <div className="w-screen flex justify-start md:justify-center overflow-hidden">
      <div className="w-full flex flex-col justify-center p-4 max-w-7xl">
        <StoreNavbar />

        <Outlet />
      </div >
    </div>
  )
}

export default StoreView