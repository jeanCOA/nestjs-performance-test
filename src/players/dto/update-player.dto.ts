import { IsOptional, IsString, IsNumber } from 'class-validator';

export class UpdatePlayerDto {
  @IsOptional()
  @IsString()
  readonly name?: string;  

  @IsOptional()
  @IsNumber()
  readonly score?: number;
}
