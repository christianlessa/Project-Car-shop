import { Request, Response } from 'express';
import { IService } from '../interfaces/IService';
import { ICar } from '../interfaces/ICar';

class CarController {
  constructor(private _service: IService<ICar>) { }

  public async create(
    req: Request & { body: ICar },
    res: Response<ICar>,
  ) {
    const result = await this._service.create(req.body);
    return res.status(201).json(result);
  }

  public async read(
    req: Request & { body: ICar },
    res: Response<ICar[]>,
  ) {
    const cars = await this._service.read();
    return res.status(200).json(cars);
  }

  public async readOne(
    req: Request & { body: ICar },
    res: Response<ICar | null>,
  ) {
    const carById = await this._service.readOne(req.params.id);
    return res.status(200).json(carById);
  }
}

export default CarController;