import { useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import ProductCard from "../../components/productCard";

const FindByName = () => {
  const [searchName, setSearchName] = useState<string>('');
  const productList = useAppSelector((state) => state.productList.list);
  
  return (
    <div className="my-2">
      <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-2 mb-4">
        <h3 className="whitespace-nowrap">Search by name: </h3>
        <input value={searchName} onChange={(e) => setSearchName(e.target.value)} className="bg-dark w-full border" />
      </div>
      <div className="w-full flex flex-wrap gap-4 justify-center">
        {productList
          .filter((product) => product.title.toLowerCase().includes(searchName.toLowerCase()))
          .map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>
    </div>
  )
}

export default FindByName