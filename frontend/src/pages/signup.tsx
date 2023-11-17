import { useSignInQuery } from "../api/apiSclie"

const SignUpView = () => {
  const { data, isError, isLoading } = useSignInQuery({ email: 'test@test.viio', password: 'test123' })

  if (isLoading) return <div>Loading ...</div>
  else if (isError) return <div>Error</div>

  return (
    <div className="truncate">
      {data.token}
    </div>
  )
}

export default SignUpView