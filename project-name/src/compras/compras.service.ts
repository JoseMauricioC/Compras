import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCompraDto } from './dto/create-compra.dto';
import { UpdateCompraDto } from './dto/update-compra.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Compra } from './entities/compra.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ComprasService {
  constructor(
    @InjectRepository(Compra)
    private comprasRepository: Repository<Compra>,
  ) {}

  async create(createCompraDto: CreateCompraDto): Promise<Compra> {
    const nuevaCompra = this.comprasRepository.create(createCompraDto);
    return await this.comprasRepository.save(nuevaCompra);
  }

  async findAll(): Promise<Compra[]> {
    return await this.comprasRepository.find();
  }

  async findOne(id: number): Promise<Compra> {
    const compra = await this.comprasRepository.findOneBy({ id });
    if (!compra) {
      throw new NotFoundException(`La compra con el ID ${id} no fue encontrada`);
    }
    return compra;
  }

  async update(id: number, updateCompraDto: UpdateCompraDto): Promise<Compra> {
    const compra = await this.comprasRepository.preload({
      id,
      ...updateCompraDto,
    });

    if (!compra) {
      throw new NotFoundException(`La compra con el ID ${id} no fue encontrada`);
    }

    return await this.comprasRepository.save(compra);
  }

  async remove(id: number): Promise<void> {
    const result = await this.comprasRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`La compra con el ID ${id} no fue encontrada`);
    }
  }
}

