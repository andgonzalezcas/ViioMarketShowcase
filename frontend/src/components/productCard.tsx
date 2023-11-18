import { useNavigate } from "react-router-dom";
import { productProps } from "../interface/common.interface";
import { AiFillStar } from "react-icons/ai";

interface ProductCardProps {
  product: productProps;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();

  return (
    <div className="w-48 h-full border rounded-xl p-3 flex flex-col gap-5">
      <div className="h-28 overflow-hidden rounded-lg">
        <img
          src={product.thumbnail}
          alt="product card image"
          className="w-full min-w-[166px] h-full object-cover"
        />
      </div>

      <div className="flex justify-between">
        <p className="truncate">
          <b>{product.title}</b>
        </p>
        <div className="flex items-center gap-1">
          <AiFillStar className="text-yellow-400" />
          <p>{product.rating}</p>
        </div>
      </div>

      <button
        className="w-full bg-viio_blue-soft p-1 rounded-lg"
        onClick={() => navigate('/store/' + product.id)}
      >
        view product
      </button>
    </div>
  );
};

export default ProductCard;
