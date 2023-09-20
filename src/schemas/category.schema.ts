import { z } from "zod";
import { realEstateSchema } from "./realEstate.schema";

const categorySchema = z.object({
  id: z.number().positive(),
  name: z.string().max(45),
});

const categoryCreateSchema = categorySchema.omit({ id: true });
const categoryReturnSchema = categorySchema.array();

export { categorySchema, categoryCreateSchema, categoryReturnSchema };
