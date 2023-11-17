import { useGetProductsQuery } from "../api/apiSclie"

const StoreView = () => {

  const { data, isError, isLoading } = useGetProductsQuery(0)

  if (isLoading) return <div>Loading ...</div>
  else if (isError) return <div>Error</div>

  console.log({ data });

  return (
    <div>Store view</div>
  )
}

export default StoreView