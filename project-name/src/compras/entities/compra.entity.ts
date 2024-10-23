import { Cliente } from "src/clientes/entities/cliente.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('compras')
export class Compra {
    @PrimaryGeneratedColumn('identity')
    id: number;
  
    @Column('int')
    cantidad: number;  // Cambiado a número entero
  
    @Column('date')
    fecha_compra: Date;  // Cambiado a tipo fecha
  
    @Column('decimal', { precision: 10, scale: 2 })
    total: number; 
  
    @CreateDateColumn({ name: 'fecha_creacion' })
    fechaCreacion: Date;
  
    @UpdateDateColumn({ name: 'fecha_modificacion' })
    fechaModificacion: Date;
  
    @DeleteDateColumn({ name: 'fecha_eliminacion', select: false })
    fechaEliminacion: Date;
    //cliente: any;

    // @ManyToOne(() => Cliente, cliente => cliente.compras)
    // cliente: Cliente;

    @ManyToOne(() => Cliente, cliente => cliente.compras, { nullable: false })
    cliente: Cliente; // Relación de muchos a uno con la entidad Cliente
}
