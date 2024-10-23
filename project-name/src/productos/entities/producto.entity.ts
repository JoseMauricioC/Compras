import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('productos')
export class Producto {
    @PrimaryGeneratedColumn('identity')
    id: number;
  
    @Column('varchar', { length: 50 })
    nombre_producto: string;
  
    @Column('decimal', { precision: 10, scale: 2 })
    precio: number;
  
    @Column('int')
    stock: number; 
  
    @CreateDateColumn({ name: 'fecha_creacion' })
    fechaCreacion: Date;
  
    @UpdateDateColumn({ name: 'fecha_modificacion' })
    fechaModificacion: Date;
  
    @DeleteDateColumn({ name: 'fecha_eliminacion', select: false })
    fechaEliminacion: Date;
}
