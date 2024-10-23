import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Producto)
    private productosRepository: Repository<Producto>,
  ) {}
  // create(createProductoDto: CreateProductoDto) {
  //   return 'This action adds a new producto';
  // }
  async create(createProductoDto: CreateProductoDto): Promise<Producto> {
    const existe = await this.productosRepository.findOneBy({
      nombre_producto: createProductoDto.nombre_producto.trim(),
      precio: createProductoDto.precio,
      stock: createProductoDto.stock,
    });

    if (existe) throw new ConflictException('El producto ya existe');

    const producto = new Producto();
    producto.nombre_producto = createProductoDto.nombre_producto.trim();
    producto.precio = createProductoDto.precio;
    producto.stock = createProductoDto.stock;
    return this.productosRepository.save(producto);
  }

  // findAll() {
  //   return `This action returns all productos`;
  // }
  async findAll(): Promise<Producto[]> {
    return this.productosRepository.find();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} producto`;
  // }
  async findOne(id: number): Promise<Producto> {
    const producto = await this.productosRepository.findOneBy({ id });
    if (!producto) throw new NotFoundException('El producto no existe');
    return producto;
  }

  // update(id: number, updateProductoDto: UpdateProductoDto) {
  //   return `This action updates a #${id} producto`;
  // }
  async update(
    id: number,
    updateProductoDto: UpdateProductoDto,
  ): Promise<Producto> {
    const producto = await this.findOne(id);
    const productoUpdate = Object.assign(producto, updateProductoDto);
    return this.productosRepository.save(productoUpdate );
  }

  // remove(id: number) {
  //   return `This action removes a #${id} producto`;
  // }
  async remove(id: number) {
    const producto = await this.findOne(id);
    return this.productosRepository.softRemove(producto);
  }
}
