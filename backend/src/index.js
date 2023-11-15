import express from 'express';

import { PORT } from './constants/common.constants'

const app = express();

app.listen(PORT)

console.log('Server listener on port [', PORT, ']');