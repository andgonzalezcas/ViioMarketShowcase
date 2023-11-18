import { useLayoutEffect, useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import ProductCard from "../../components/productCard";

const FindByCategory = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const productList = useAppSelector((state) => state.productList.list);

  useLayoutEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error({ error }));
  }, [])

  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return <>
    {categories && categories?.map((category) => (
      <div key={category} className="my-2">
        <h3 className="w-full border-b mb-4">
          <b>{capitalizeFirstLetter(category)}</b>
        </h3>
        <div className="w-full flex md:flex-wrap overflow-x-scroll gap-4 justify-start md:justify-center">
          {productList
            .filter((product) => product.category === category)
            .map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
        </div>
      </div>
    ))}
  </>
}

export default FindByCategory