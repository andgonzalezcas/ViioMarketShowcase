import { PORT } from './constants/common.constants';
import app from './app';
import './database'

app.listen(PORT);

console.log('Server listener on port [', PORT, ']');