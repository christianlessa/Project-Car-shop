import { Router } from 'express';
import MotorcycleModel from '../models/Motorcycle';
import MotorcycleService from '../services/Motorcycle';
import MotorcycleController from '../controllers/Motorcycle';
import validationId from '../middlewares/validById';

const router = Router();

const motorcycleModel = new MotorcycleModel();
const motorcycleService = new MotorcycleService(motorcycleModel);
const motorcycleController = new MotorcycleController(motorcycleService);

const motorcycleId = '/motorcycles/:id';

router.post(
  '/motorcycles',
  (req, res) => motorcycleController.create(req, res),
);
router.get('/motorcycles', (req, res) => motorcycleController.read(req, res));
router.get(
  motorcycleId,
  validationId,
  (req, res) => motorcycleController.readOne(req, res),
);
router.put(
  motorcycleId,
  validationId,
  (req, res) => motorcycleController.update(req, res),
);

router.delete(
  motorcycleId,
  validationId,
  (req, res) => motorcycleController.delete(req, res),
);

export default router;
