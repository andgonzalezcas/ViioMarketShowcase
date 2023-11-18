import { useMemo } from "react";
import { useParams } from "react-router-dom"
import { useAppSelector } from "../../redux/hooks";

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
    <p>{product.title}</p>
  )
}

export default ProductDetailedCard