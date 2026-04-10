import { VehiclesService } from './vehicles.service';

describe('VehiclesService', () => {
  let service: VehiclesService;

  beforeEach(() => {
    service = new VehiclesService();
  });

  it('should create a vehicle', () => {
    const vehicle = service.create({
      placa: 'ABC1234',
      chassi: '123',
      renavam: '456',
      modelo: 'Civic',
      marca: 'Honda',
      ano: 2020,
    });

    expect(vehicle).toHaveProperty('id');
  });

  it('should return all vehicles', () => {
    service.create({
      placa: 'ABC1234',
      chassi: '123',
      renavam: '456',
      modelo: 'Civic',
      marca: 'Honda',
      ano: 2020,
    });

    expect(service.findAll().length).toBe(1);
  });
});