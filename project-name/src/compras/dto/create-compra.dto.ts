import { IsDateString, IsDecimal, IsInt, IsNotEmpty } from "class-validator";

export class CreateCompraDto {
    @IsNotEmpty({ message: 'El campo cantidad es obligatorio' })
  @IsInt({ message: 'El campo cantidad debe ser un número entero' })
  readonly cantidad: number;

  @IsNotEmpty({ message: 'El campo fecha_compra es obligatorio' })
  @IsDateString({}, { message: 'El campo fecha_compra debe ser una fecha válida' })
  readonly fecha_compra: string;

  @IsNotEmpty({ message: 'El campo total es obligatorio' })
  @IsDecimal({ decimal_digits: '2', force_decimal: true }, { message: 'El campo total debe ser un número decimal con dos decimales' })
  readonly total: number;
}
