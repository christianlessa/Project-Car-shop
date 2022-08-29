import { z } from 'zod';
import vehicleZodSchema from './vehicle';

const motorcycleZodSchema = vehicleZodSchema.extend({
  category: z.enum(['Street', 'Custom', 'Trail']),
  engineCapacity: z.number().gte(0).lte(2500).int(),
});

export default motorcycleZodSchema;
