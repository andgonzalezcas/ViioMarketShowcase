import { ReactNode, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { disconnect } from '../redux/auth.slice';
import { useNavigate } from "react-router-dom";

interface IsUserSessionExpiredProps {
  children: ReactNode
}

const IsUserSessionExpired = ({ children }: IsUserSessionExpiredProps) => {
  const dispatch = useAppDispatch();
  const expirationTime = useAppSelector((state) => state.auth.sessionExpireIn);
  const navigate = useNavigate();

  const isTokenExpired = () => {
    return expirationTime && (Date.now() >= expirationTime);
  };

  const handleRedirectUser = () => {
    dispatch(disconnect());
    alert('your session time has expired, please log in again.')
    navigate("/login");
    // TODO: renewToken();
  }

  useEffect(() => {
    isTokenExpired() && handleRedirectUser();
    const tokenCheckInterval = setInterval(() => {
      if (isTokenExpired()) {
        handleRedirectUser();
        clearInterval(tokenCheckInterval);
        // TODO: renewToken();
      }
    }, 60000); // se ejecuta cada minuto 60000

    return () => clearInterval(tokenCheckInterval);
  }, [expirationTime]);

  return <div>{children}</div>
}

export default IsUserSessionExpired