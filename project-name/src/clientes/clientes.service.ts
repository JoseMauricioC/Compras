import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from './entities/cliente.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClientesService {
  constructor(
    @InjectRepository(Cliente)
    private clientesRepository: Repository<Cliente>,
  ) {}
 // create(createClienteDto: CreateClienteDto) {
  //   return 'This action adds a new cliente';
  // }
  async create(createClienteDto: CreateClienteDto): Promise<Cliente> {
    const existe = await this.clientesRepository.findOneBy({
      nombre: createClienteDto.nombre.trim(),
      correo: createClienteDto.correo.trim(),
      telefono: createClienteDto.telefono.trim(),
    });

    if (existe) throw new ConflictException('El cliente ya existe');

    const cliente = new Cliente();
    cliente.nombre = createClienteDto.nombre.trim();
    cliente.correo = createClienteDto.correo.trim();
    cliente.telefono = createClienteDto.telefono.trim();
    return this.clientesRepository.save(cliente);
  }

  // findAll() {
  //   return `This action returns all clientes`;
  // }
  async findAll(): Promise<Cliente[]> {
    return this.clientesRepository.find();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} cliente`;
  // }
  async findOne(id: number): Promise<Cliente> {
    const cliente = await this.clientesRepository.findOneBy({ id });
    if (!cliente) throw new NotFoundException('El cliente no existe');
    return cliente;
  }

  // update(id: number, updateClienteDto: UpdateClienteDto) {
  //   return `This action updates a #${id} cliente`;
  // }
  async update(
    id: number,
    updateClienteDto: UpdateClienteDto,
  ): Promise<Cliente> {
    const cliente = await this.findOne(id);
    const clienteUpdate = Object.assign(cliente, updateClienteDto);
    return this.clientesRepository.save(clienteUpdate );
  }

  // remove(id: number) {
  //   return `This action removes a #${id} cliente`;
  // }
  async remove(id: number) {
    const cliente = await this.findOne(id);
    return this.clientesRepository.softRemove(cliente);
  }
}
