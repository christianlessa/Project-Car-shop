import { ICar } from '../../interfaces/ICar';

const carMock: ICar = {
  model: 'Gol',
  year: 1963,
  color: 'red',
  buyValue: 35000,
  seatsQty: 2,
  doorsQty: 2
};

const carMockWithId: ICar & { _id: string } | undefined = {
  model: 'Gol',
	year: 1963,
	color: 'red',
	buyValue: 35000,
	doorsQty: 2,
	seatsQty: 2,
	_id: '630d58b5493e347bf8459bc9'
};

const allCarsMock: ICar[] & { _id: string }[] = [
  {
    model: 'Fiat Uno',
    year: 2003,
    color: 'red',
    buyValue: 3200,
    doorsQty: 2,
    seatsQty: 4,
    _id: '224d58b5493e347bf1234bc9'
  },

  {
    model: 'Honda Civic',
    year: 2013,
    color: 'red',
    buyValue: 3200,
    doorsQty: 2,
    seatsQty: 4,
    _id: '176d58f5467e347bf2259bc9'
  }
];

export {
  carMock,
  carMockWithId,
  allCarsMock,
};
