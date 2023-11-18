import { FormEvent } from "react";
import { useSignUpMutation } from "../api/apiSclie"
import { disconnect, setSessionExpireIn, setToken } from "../redux/auth.slice";
import { useAppDispatch } from "../redux/hooks";
import InputField from "../components/InputField";
import { Link } from "react-router-dom";

const SignUpView = () => {
  const [apiSignup] = useSignUpMutation();
  const dispatch = useAppDispatch();

  const handleSignup = (event: FormEvent) => {
    event.preventDefault();

    apiSignup({ username: 'andres', email: 'andgonzalezcas@gmail.com', password: 'password' })
      .then((res) => {
        if (!('data' in res)) throw 'Not valid return'

        if (res.data.success) {
          dispatch(setToken(res.data.response.token))
          dispatch(setSessionExpireIn(res.data.response.expiresIn))

        } else {
          alert('Error (' + res.data.response + ')')
        }
      })
      .catch(error => {
        dispatch(disconnect())
        console.error({ error })
      })
  }

  return (
    <div className="w-full h-screen flex justify-center items-center text-sm">
      <form onSubmit={(event) => handleSignup(event)} className="flex flex-col w-[90vw] max-w-md p-8 h-[90vh] max-h-[800px] justify-between border rounded-lg">
        <div className="flex flex-col gap-3">
          <h2 className="text-viio_blue-soft text-2xl"><b>Sign Up</b></h2>
          <p>Nice to meet you! Enter your details to register.</p>
        </div>

        <div className="flex flex-col gap-2">
          <InputField label="Your Name" placeholder="username" />
          <InputField label="Your Email" placeholder="user@mail.com" />
          <InputField label="Password" placeholder="********" type="password" />
          <div className="w-full flex gap-2">
            <input type="checkbox" required />
            <p>I agree the <b className="hover:underline cursor-pointer" onClick={() => alert('Comming soon!')}>Terms and Conditios</b></p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <button className="w-full bg-viio_blue-soft text-dark p-2 rounded-md" type="submit">
            <b>SIGN UP</b>
          </button>
          <p className="w-full text-center">
            {"Already have an account? "}
            <Link to="/login" className="hover:underline" ><b>Sign In</b></Link>
          </p>
        </div>

      </form>
    </div>
  )
}

export default SignUpView