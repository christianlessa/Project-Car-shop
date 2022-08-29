import { z } from 'zod';
import motorcycleZodSchema from '../schemas/motorcycle';

export type IMotorcycle = z.infer<typeof motorcycleZodSchema>;