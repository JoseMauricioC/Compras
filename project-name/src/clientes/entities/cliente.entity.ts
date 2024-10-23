import { Compra } from "src/compras/entities/compra.entity";
import { Column,
     CreateDateColumn, 
     DeleteDateColumn, 
     Entity, 
     OneToMany, 
     PrimaryGeneratedColumn, 
     UpdateDateColumn } from "typeorm";

@Entity('clientes')
export class Cliente {
    @PrimaryGeneratedColumn('identity')
    id: number;
  
    @Column('varchar', { length: 50 })
    nombre: string;
  
    @Column('varchar', { length: 30 })
    correo: string;
  
    @Column('varchar', { length: 16 })
    telefono: string;
  
    @CreateDateColumn({ name: 'fecha_creacion' })
    fechaCreacion: Date;
  
    @UpdateDateColumn({ name: 'fecha_modificacion' })
    fechaModificacion: Date;
  
    @DeleteDateColumn({ name: 'fecha_eliminacion', select: false })
    fechaEliminacion: Date;

    @OneToMany(() => Compra, compra => compra.cliente)
    compras: Compra[]; // Relación de uno a muchos con la entidad Compra
}
