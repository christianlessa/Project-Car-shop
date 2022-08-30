import { expect } from 'chai';
import sinon from 'sinon';
import CarModel from '../../../models/Car';
import { Model } from 'mongoose';
import { carMock, carMockWithId, allCarsMock } from '../../mocks/CarMock';

describe('Car Model', () => {
  const carModel = new CarModel();

  before(() => {
    sinon.stub(Model, 'create').resolves(carMockWithId);
    sinon.stub(Model, 'findOne').resolves(carMockWithId);
    sinon.stub(Model, 'find').resolves(allCarsMock);
    sinon.stub(Model, 'findByIdAndUpdate').resolves(carMockWithId);
  });

  after(() => {
    sinon.restore();
  });

  describe('Criando um Carro', () => {
    it('Criado com sucesso', async () => {
      const newCar = await carModel.create(carMock);
      expect(newCar).to.be.deep.equal(carMockWithId);
    });
  });

  describe('Pesquisa carro por Id', () => {
    it('Retorna carro do Id com sucesso', async () => {
      const car = await carModel.readOne('630d58b5493e347bf8459bc9');
      expect(car).to.be.deep.equal(carMockWithId);
    });

    it('_id inválido', async () => {
      try {
        await carModel.readOne('1dErr4d0');
      } catch (error: any) {
        expect(error.message).to.be.eq('InvalidMongoId');
      }
    });
  });

  describe('Pequisa Carros', () => {
    it('Retorna array de objeto de todos os carros', async () => {
      const allCars = await carModel.read();
      expect(allCars).to.be.deep.equal(allCarsMock);
    });
  });

  describe('Atualiza Carro por Id', () => {
    it('Retorna objeto atualizado', async () => {
      const updated = await carModel.update('630d58b5493e347bf8459bc9', carMock);
      expect(updated).to.be.deep.equal(carMockWithId);
    });
  });

});
