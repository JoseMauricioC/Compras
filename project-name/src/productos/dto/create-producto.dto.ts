import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateProductoDto {
    @IsNotEmpty({ message: 'El campo nombre es obligatorio'})
    @IsString({ message: 'El campo nombre debe ser de tipo cadena' })
    @MaxLength(50, {
      message: 'El campo nombre no debe ser mayor a 50 caracteres',
    })
    readonly nombre_producto: string;

    @IsNotEmpty({ message: 'El campo precio es obligatorio'})
    readonly precio: number;

    @IsNotEmpty({ message: 'El campo precio es obligatorio'})
    readonly stock: number;

}
