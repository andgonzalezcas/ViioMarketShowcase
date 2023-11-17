export const VIIO_MARKET_SHOWCASE_BACKEND_SERVICE = {
  baseUrl: "http://localhost:4040", //Este servicio se podria poner en un .env para mayor seguridad, pero por cuestiones practicas se deja aqui.
  endpoints: {
    get_products: {
      url: '/products',
      method: 'GET'
    },
    signin: {
      url: '/auth/signin',
      method: 'POST'
    },
    signup: {
      url: '/auth/signup',
      method: 'POST'
    }
  }
};