import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateClienteDto {
    
    @IsNotEmpty({ message: 'El campo nombre es obligatorio'})
    @IsString({ message: 'El campo nombre debe ser de tipo cadena' })
    @MaxLength(50, {
      message: 'El campo nombre no debe ser mayor a 50 caracteres',
    })
    readonly nombre: string;

    @IsNotEmpty({ message: 'El campo correo es obligatorio'})
    @IsString({ message: 'El campo correo debe ser de tipo cadena' })
    @MaxLength(100, {
      message: 'El campo correo no debe ser mayor a 100 caracteres',
    })
    readonly correo: string;

    @IsNotEmpty({ message: 'El campo telefono es obligatorio'})
    @IsString({ message: 'El campo telefono debe ser de tipo cadena' })
    @MaxLength(16, {
      message: 'El campo telefono no debe ser mayor a 16 caracteres',
    })
    readonly telefono: string;
}
