import { z } from 'zod';
import vehicleZodSchema from './vehicle';

const motorcycleZodSchema = vehicleZodSchema.extend({
  category: z.enum(['Street', 'Custom', 'Trail']),
  engineCapacity: z.number().gte(1).lte(2500).int(),
});

export default motorcycleZodSchema;
