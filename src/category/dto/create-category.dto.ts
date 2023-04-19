import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty({ message: 'Nome da categoria não pode ser vazio' })
  @IsString()
  @MinLength(2, {
    message: 'Nome da categoria precisa conter pelo menos 2 caracteres.',
  })
  @MaxLength(30, {
    message: 'Nome da categoria não pode exceder os 30 caracteres.',
  })
  name: string;

  @IsString()
  @IsOptional()
  description?: string;
}
