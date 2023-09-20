import { z } from "zod";
import { addressCreateSchema } from "./address.schema";

const realEstateSchema = z.object({
  id: z.number().positive(),
  sold: z.boolean().default(false),
  value: z.number().positive().default(0).or(z.string().max(12)),
  size: z.number().positive(),
  createdAt: z.string(),
  updatedAt: z.string(),
  categoryId: z.number().positive(),
});

const realEstateCreateSchema = realEstateSchema
  .omit({
    id: true,
    sold: true,
    createdAt: true,
    updatedAt: true,
    addressId: true,
  })
  .extend({ address: addressCreateSchema });

const realEstateReturnSchema = realEstateSchema.omit({ id: true });
const realEstateReadSchema = realEstateReturnSchema.array();

export {
  realEstateSchema,
  realEstateCreateSchema,
  realEstateReadSchema,
  realEstateReturnSchema,
};
