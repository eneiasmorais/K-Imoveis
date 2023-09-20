import { z } from "zod";
import {
  categoryCreateSchema,
  categoryReturnSchema,
  categorySchema,
} from "../schemas";
import { Repository } from "typeorm";
import { Category } from "../entities";

type CategoryType = z.infer<typeof categorySchema>;
type CategoryCreate = z.infer<typeof categoryCreateSchema>;
type CategoryReturn = z.infer<typeof categoryReturnSchema>;

type CategoryRepo = Repository<Category>;

export { CategoryType, CategoryRepo, CategoryCreate, CategoryReturn };
