import { FormEvent } from "react";
import { useSignInMutation } from "../api/apiSclie"
import InputField from "../components/InputField";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import { setSessionExpireIn, setToken } from "../redux/auth.slice";

const SignInView = () => {
  const [apiSignin] = useSignInMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSignin = (event: FormEvent) => {
    event.preventDefault();

    apiSignin({ email: 'test@test.viio', password: 'test123' })
      .then((res) => {
        if (!('data' in res)) throw 'Not valid return'

        if (res.data.success) {
          dispatch(setToken(res.data.response.token))
          dispatch(setSessionExpireIn(res.data.response.expiresIn))

          navigate("/store")
        } else {
          alert('Error (' + res.data.response + ')')
        }
      })
      .catch(error => { console.error({ error }) })
  }

  return (
    <div className="w-full h-screen flex justify-center items-center text-sm bg-viio-image bg-center bg-no-repeat bg-cover" >
      <form onSubmit={(event) => handleSignin(event)} className="flex flex-col w-[90vw] max-w-md p-8 h-[90vh] max-h-[800px] justify-between border rounded-lg backdrop-blur-xl">
        <div className="flex flex-col gap-3">
          <h2 className="text-viio_blue-soft text-2xl"><b>Sign In</b></h2>
          <p>Welcome back! Please enter your credentials to sign in.</p>
        </div>

        <div className="flex flex-col gap-2">
          <InputField label="Your Email" placeholder="user@mail.com" />
          <InputField label="Password" placeholder="********" type="password" />
        </div>

        <div className="flex flex-col gap-3">
          <button className="w-full bg-viio_blue-soft text-dark p-2 rounded-md" type="submit">
            <b>SIGN IN</b>
          </button>
          <p className="w-full text-center">
            {"Don't have an account? "}
            <Link to="/register" className="" ><b>Sign Up</b></Link>
          </p>
        </div>

      </form>
    </div >
  )
}

export default SignInView