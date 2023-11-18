import { useMemo } from "react";
import { useParams } from "react-router-dom"
import { useAppSelector } from "../../redux/hooks";
import { AiFillStar } from "react-icons/ai";

const ProductDetailedCard = () => {
  const params = useParams();

  const productsList = useAppSelector(state => state.productList.list);

  const product = useMemo(() => {
    const product = productsList?.find((p) => (p.id + '') === params.productId);

    if (product) {
      return product;
    } else {
      return { id: -1, title: 'Product not found', description: '', price: 0, discountPercentage: 0, rating: 0, stock: 0, brand: '', category: '', thumbnail: '', images: [] };
    }
  }, [params.productId, productsList?.length])

  return (
    <div className="w-full h-[80vh] flex justify-center items-center">
      <div className="max-w-xl w-full border p-8 rounded-2xl flex flex-col gap-5">
        <div className="hidden xl:flex md:h-80 overflow-hidden rounded-lg">
          <img
            src={product.thumbnail}
            alt="product card image"
            className="w-full min-w-[166px] h-full object-cover"
          />
        </div>
        <p><b>{product.title}</b></p>
        <p>{product.description}</p>
        <div className="w-full flex flex-col md:flex-row justify-between">
          <p>Price: {product.price}</p>
          <p className="text-yellow-300">-{product.discountPercentage}% DCTO</p>
          <p>On Stock: {product.stock}</p>
          <div className="flex items-center gap-1">
            <AiFillStar className="text-yellow-400" />
            <p>{product.rating}</p>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-between">
          <p>Brand: {product.brand}</p>
          <p>Category: {product.category}</p>
        </div>
        <button className="p-2 w-full text-center border rounded-lg" onClick={() => alert('this functionality comming soon!')}>Add to cart</button>
      </div>

    </div>
  )
}

export default ProductDetailedCard