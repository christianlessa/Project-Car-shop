import { z } from 'zod';
import vehicleZodSchema from '../schemas/vehicle';

export type IVehicle = z.infer<typeof vehicleZodSchema>;
