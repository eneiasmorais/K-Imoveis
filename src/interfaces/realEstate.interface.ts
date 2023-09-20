import { z } from "zod";
import {
  realEstateCreateSchema,
  realEstateReturnSchema,
  realEstateSchema,
} from "../schemas";
import { Repository } from "typeorm";
import { RealEstate } from "../entities";

type RealEstateType = z.infer<typeof realEstateSchema>;
type RealEstateCreate = z.infer<typeof realEstateCreateSchema>;
type RealEstateReturn = z.infer<typeof realEstateReturnSchema>;
type RealEstateRead = Array<RealEstateReturn>;

type RealEstateRepo = Repository<RealEstate>;

export {
  RealEstateCreate,
  RealEstateType,
  RealEstateRead,
  RealEstateReturn,
  RealEstateRepo,
};
