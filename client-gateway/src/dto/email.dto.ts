import { IsEmail, IsNotEmpty } from 'class-validator';

export class EmailDTO {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}
