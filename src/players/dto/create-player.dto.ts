import { IsString, IsNumber } from 'class-validator';

export class CreatePlayerDto {
  @IsString()
  readonly name: string;

  @IsNumber()
  readonly score: number;
}
  