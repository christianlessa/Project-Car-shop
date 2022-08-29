import { IService } from '../interfaces/IService';
import { ICar } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import carZodSchema from '../schemas/car';
import { ErrorTypes } from '../errors/catalog';

class CarService implements IService<ICar> {
  private _car: IModel<ICar>;

  constructor(model: IModel<ICar>) { 
    this._car = model;
  }

  public async read(): Promise<ICar[]> {
    const cars = await this._car.read();
    if (!cars) throw new Error(ErrorTypes.EntityNotFound);

    return cars;
  }

  public async create(obj: ICar): Promise<ICar> {
    const parsed = carZodSchema.safeParse(obj);

    if (!parsed.success) { throw parsed.error; }

    return this._car.create(obj);
  }
}

export default CarService;
