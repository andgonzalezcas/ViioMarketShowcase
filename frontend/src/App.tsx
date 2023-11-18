import { useLayoutEffect } from "react";

function App() {

  // TODO: mejorar la redireccion, esto se hizo por tiempo
  useLayoutEffect(() => {
    window.location.href = '/login';
  }, []);

  return (
    <div>Main page</div>
  )
}

export default App
