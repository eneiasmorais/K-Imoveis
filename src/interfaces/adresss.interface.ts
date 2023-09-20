import { z } from "zod";
import {
  addressCreateSchema,
  addressReturnSchema,
  categoryCreateSchema,
  categoryReturnSchema,
} from "../schemas";
import { Repository } from "typeorm";
import { Address } from "../entities";

type AddressCreate = z.infer<typeof addressCreateSchema>;
type AddressReturn = z.infer<typeof addressReturnSchema>;

type AddressRepo = Repository<Address>;

export { AddressCreate, AddressReturn, AddressRepo };
