import { Link } from "react-router-dom"
import { useAppDispatch } from "../redux/hooks";
import { disconnect } from "../redux/auth.slice";

const StoreNavbar = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(disconnect());
  }

  return (
    <nav className="flex flex-col md:flex-row justify-between items-start md:items-center">
      <Link to={'/store/'} className="text-xl"><b>Store</b></Link>

      <div className="w-full md:w-fit flex flex-wrap justify-between gap-2">
        <Link to={'/store/'} className="p-1 border rounded-lg">Search</Link>
        <Link to={'/store/categories'} className="p-1 border rounded-lg">Categories</Link>
        <Link to={'/store/cart'} className="p-1 border rounded-lg">Cart</Link>
        <button onClick={() => handleLogout()} className="p-1 border rounded-lg">Log out</button>
      </div>
    </nav>
  )
}

export default StoreNavbar