import { IService } from '../interfaces/IService';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import { IModel } from '../interfaces/IModel';
import motorcycleZodSchema from '../schemas/motorcycle';
import { ErrorTypes } from '../errors/catalog';

class MotorcycleService implements IService<IMotorcycle> {
  private _motorcycle: IModel<IMotorcycle>;

  constructor(model: IModel<IMotorcycle>) { 
    this._motorcycle = model;
  }

  public async create(obj: IMotorcycle): Promise<IMotorcycle> {
    const parsed = motorcycleZodSchema.safeParse(obj);
    if (!parsed.success) { throw parsed.error; }
    
    return this._motorcycle.create(obj);
  }

  public async read(): Promise<IMotorcycle[]> {
    const motorcycles = await this._motorcycle.read();
    if (!motorcycles) throw new Error(ErrorTypes.EntityNotFound);

    return motorcycles;
  }

  public async readOne(_id: string): Promise<IMotorcycle | null> {
    const motorcycleById = await this._motorcycle.readOne(_id);
    if (!motorcycleById) throw new Error(ErrorTypes.EntityNotFound);

    return motorcycleById;
  }

  public async update(
    _id: string,
    obj: IMotorcycle,
  ): Promise<IMotorcycle | null> {
    const parsed = motorcycleZodSchema.safeParse(obj);
    if (!parsed.success) { throw parsed.error; }

    await this.readOne(_id);
    return this._motorcycle.update(_id, obj);
  }

  public async delete(_id: string): Promise<IMotorcycle | null> {
    await this.readOne(_id);
    
    return this._motorcycle.delete(_id);
  }
}

export default MotorcycleService;
