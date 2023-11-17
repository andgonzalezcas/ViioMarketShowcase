import { FormEvent } from 'react';
import { Link } from "react-router-dom";

function LoginPage() {
  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
    <div className="flex h-screen w-full items-center justify-center bg-form-bg bg-center bg-no-repeat bg-cover text-xs" >
      <div className="max-w-[80vw] md:max-w-md w-full h-[80vh] pt-16 px-8 pb-6 rounded-xl backdrop-blur-md bg-background bg-opacity-50 flex flex-col justify-between text-center">
        <div className="flex flex-col items-center text-center">
          <img src="https://wallet.viio.me/static/media/LOGOSYMB.7e7e797542e61ac27f5966209a47e091.svg" className='w-[130px] md:w-[180px]' alt="viio logo" />
          <h1 className="max-w-[240] mt-8 text-2xl md:text-4xl opacity-70 font-bold">{"INICIAR SESIÓN"}</h1>
        </div>
        <form onSubmit={(e) => handleLogin(e)} className="w-full flex flex-col items-center md:text-base">
          <input className="w-full max-w-[320px] bg-background text-center p-2 rounded-lg" placeholder="correo electronico" />
          <p className="w-full mb-1 pb-1 h-5 md:h-7 text-center"></p>
          <input className="w-full max-w-[320px] bg-background text-center p-2 rounded-lg" placeholder="contraseña" />
          <p className="w-full my-1 py-1 h-5 md:h-7"></p>
          <button type="submit" className="w-full max-w-[220px] text-center text-base md:text-xl my-1 border rounded-lg py-1 bg-opacity-0 hover:bg-light hover:bg-opacity-10 transition-all duration-300">{"Ingresar"}</button>
        </form>
        <Link to={'/register'} className="w'full flex justify-center">
          <p className="w-fit text-xs md:text-base hover:underline hover:underline-offset-1 cursor-pointer transition-all duration-300">{"Regístrarse"}</p>
        </Link>
      </div>
    </div>
  )
}

export default LoginPage