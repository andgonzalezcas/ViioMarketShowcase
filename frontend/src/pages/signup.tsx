import { useSignUpMutation } from "../api/apiSclie"
import { setToken } from "../redux/auth.slice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const SignUpView = () => {
  const [apiSignup] = useSignUpMutation();
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.auth.userToken)

  const handleSignup = () => {
    apiSignup({ username: 'andres', email: 'andgonzalezcas@gmail.com', password: 'password' })
      .then((res: any) => {
        dispatch(setToken(res.data.token))
      })
      .catch(error => { console.error({ error }) })
  }

  return (
    <>
      <button className="truncate" onClick={() => handleSignup()}>
        Crear usuario
      </button>
      <p className="truncate">usuario: {token}</p>
    </>
  )
}

export default SignUpView