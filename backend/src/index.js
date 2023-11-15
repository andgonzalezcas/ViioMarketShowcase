import { PORT } from './constants/common.constants';
import app from './app';

app.listen(PORT);

console.log('Server listener on port [', PORT, ']');