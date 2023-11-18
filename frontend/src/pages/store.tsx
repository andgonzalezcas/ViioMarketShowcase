import { useLayoutEffect } from "react";
import { useGetProductsMutation } from "../api/apiSclie"
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setProductList } from "../redux/products.slice";

const StoreView = () => {
  const [apiGetProducts] = useGetProductsMutation();
  const dispatch = useAppDispatch();
  const userToken = useAppSelector((state) => state.auth.userToken);

  useLayoutEffect(() => {
    apiGetProducts(userToken)
      .then(res => {
        if (!('data' in res)) throw 'Not valid return'

        if (res.data.success) {
          dispatch(setProductList(res.data.response.token))
        } else {
          alert('Error (' + res.data.response + ')')
        }
      })
      .catch(error => { console.error({ error }) })
  }, [])

  return (
    <div>Store view</div>
  )
}

export default StoreView