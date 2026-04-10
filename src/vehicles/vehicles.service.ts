import { Injectable } from '@nestjs/common';
import { Vehicle } from './entities/vehicle.entity';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class VehiclesService {
  private vehicles: Vehicle[] = [];
  private generateId(): string {
    return Math.random().toString(36).substring(2, 15);
  }

  create(data: CreateVehicleDto): Vehicle {
    const vehicle: Vehicle = {
      id: this.generateId(),
      ...data,
    };

    this.vehicles.push(vehicle);
    return vehicle;
  }

  findAll(): Vehicle[] {
    return this.vehicles;
  }

  findOne(id: string): Vehicle {
    const vehicle = this.vehicles.find(v => v.id === id);

    if (!vehicle) {
        throw new NotFoundException('Veículo não encontrado');
    }
    return vehicle;  
  }

  update(id: string, data: CreateVehicleDto): Vehicle {
    const index = this.vehicles.findIndex(v => v.id === id);
    if (index === -1) {
        throw new NotFoundException('Veículo não encontrado');
    }

    this.vehicles[index] = { id, ...data };
    return this.vehicles[index];
  }

  remove(id: string): void {
    const index = this.vehicles.findIndex(v => v.id === id);

    if (index === -1) {
        throw new NotFoundException('Veículo não encontrado');
    }

    this.vehicles.splice(index, 1);
  }
}