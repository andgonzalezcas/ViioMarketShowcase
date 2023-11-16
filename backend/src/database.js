import mongoose from 'mongoose';

mongoose.connect("mongodb://localhost/viio_market_showcase")
  .then(db => console.log('Db is connected'))
  .catch(error => console.log(error));