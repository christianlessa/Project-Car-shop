import 'express-async-errors';
import express from 'express';
import carRouter from './routes/Car';
import motorcycleRouter from './routes/Motorcycle';
import errorHandler from './middlewares/error';

const app = express();

app.use(express.json());
app.use(carRouter);
app.use(motorcycleRouter);
app.use(errorHandler);

export default app;
