import { useSignUpQuery } from "../api/apiSclie"

const SignUpView = () => {
  const { isError, isLoading } = useSignUpQuery({ username: 'andres', email: 'andgonzalezcas@gmail.com', password: 'password' })

  if (isLoading) return <div>Loading ...</div>
  else if (isError) return <div>Error</div>

  return (
    <div className="truncate">
      user creado
    </div>
  )
}

export default SignUpView