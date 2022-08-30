import * as sinon from 'sinon';
import chai from 'chai';
import CarModel from '../../../models/Car';
import CarService from '../../../services/Car';
import { allCarsMock, carMock, carMockWithId } from '../../mocks/CarMock';
import { ZodError } from 'zod';
const { expect } = chai;

describe('Car Services', () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel);

  before(async () => {
    sinon.stub(carModel, 'create').resolves(carMockWithId);
    sinon.stub(carModel, 'read').resolves(allCarsMock);
    sinon.stub(carModel, 'readOne').resolves(carMockWithId);
  });

  after(()=>{
    sinon.restore();
  })

  describe('Criar carro', () => {
    it('Criado com sucesso', async () => {
      const newCar = await carService.create(carMock);
      expect(newCar).to.be.deep.equal(carMockWithId);
    });

    it('Falha ao criar', async () => {
      try {
        await carService.create({} as any);
      } catch (error) {       
        expect(error).to.be.instanceOf(ZodError);
      }
    });
  });

  describe('Listar carros', () => {
    it('Listando todos os carros com sucesso', async () => {
      const newCar = await carService.read();
      expect(newCar).to.be.deep.equal(allCarsMock);
    });
  });

  describe('Carro por Id', () => {
    it('Listando carro por Id', async () => {
      const newCar = await carService.readOne('630d58b5493e347bf8459bc9');
      expect(newCar).to.be.deep.equal(carMockWithId);
    });
  });

});