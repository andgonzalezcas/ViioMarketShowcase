import axios from 'axios';

export const getProducts = async (req, res) => {
  let response;
  let status = 500;

  await axios.get('https://dummyjson.com/products?limit=100')
    .then((res) => {
      response = res.data.products;
      status = res.status;
    })
    .catch((error) => {
      response = error.message;
      status = 404;
    });

  res.status(status).json({ response });
}

export const getProductById = async (req, res) => {
  let response;
  let status = 500;

  await axios.get('https://dummyjson.com/products/' + req.params.productId)
    .then((res) => {
      response = res.data;
      status = res.status;
    })
    .catch((error) => {
      response = error.message;
      status = 404;
    });

  res.status(status).json({ response });
}