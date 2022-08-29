import { Router } from 'express';
import CarModel from '../models/Car';
import CarService from '../services/Car';
import CarController from '../controllers/Car';

const router = Router();

const carModel = new CarModel();
const carService = new CarService(carModel);
const carController = new CarController(carService);

router.post('/cars', (req, res) => carController.create(req, res));
router.get('/cars', (req, res) => carController.read(req, res));

export default router;
