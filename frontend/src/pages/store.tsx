import { useGetProductsQuery } from "../api/apiSclie"

const StoreView = () => {

  const { data, isError, isLoading } = useGetProductsQuery('')

  if (isLoading) return <div>Loading ...</div>
  else if (isError) return <div>Error</div>

  return (
    <div>Store view</div>
  )
}

export default StoreView