import { useSignInMutation } from "../api/apiSclie"

const SignInView = () => {
  const [apiSignin] = useSignInMutation();

  const handleSignin = () => {
    apiSignin({ email: 'test@test.viio', password: 'test123' })
      .then((res) => {
        console.log({ res })
      })
      .catch(error => { console.error({ error }) })
  }

  return (
    <button className="truncate" onClick={() => handleSignin()}>
      login
    </button>
  )
}

export default SignInView