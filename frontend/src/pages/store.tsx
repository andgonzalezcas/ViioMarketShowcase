import { useLayoutEffect } from "react";

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useGetProductsMutation } from "../api/apiSclie"
import { setProductList } from "../redux/products.slice";
import ProductCard from "../components/productCard";

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
    <div className="w-full flex justify-center">
      <div className="flex flex-col justify-center p-4 max-w-7xl">
        Store view
        <div className="my-2">
          <h3 className="w-full border-b mb-4"><b>Smartphones</b></h3>
          <div className="w-full flex flex-wrap gap-4  justify-center">
            {productList.filter(product => product.category === 'smartphones').map(product => {
              return <ProductCard product={product} key={product.id} />
            })}
          </div>
        </div>
        <div className="my-2">
          <h3 className="w-full border-b mb-4"><b>Smartphones</b></h3>
          <div className="w-full flex flex-wrap gap-4  justify-center">
            {productList.filter(product => product.category === 'skincare').map(product => {
              return <ProductCard product={product} key={product.id} />
            })}
          </div>
        </div>
      </div >
    </div>
  )
}

export default StoreView