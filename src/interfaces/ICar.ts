import { z } from 'zod';
import carZodSchema from '../schemas/car';

export type ICar = z.infer<typeof carZodSchema>;
