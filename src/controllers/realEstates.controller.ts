import { Request, Response } from "express";
import { RealEstate } from "../entities";
import realEstateService from "../services/realEstate.service";
import { RealEstateCreate } from "../interfaces";

const create = async (req: Request, res: Response): Promise<Response> => {
  const realEstate: RealEstateCreate = await realEstateService.create(req.body);
  return res.status(201).json(realEstate);
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const realEstates: RealEstate[] = await realEstateService.read();

  return res.status(200).json(realEstates);
};

export default {
  create,
  read,
};
