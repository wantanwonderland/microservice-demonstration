import {
  Body,
  Controller,
  HttpStatus,
  Inject,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { EmailDTO } from './dto/email.dto';

@Controller()
export class AppController {
  constructor(
    @Inject('EMAIL_SERVICE')
    private readonly emailProxy: ClientProxy,
  ) {}

  @Post('email')
  emailCallback(@Res() res, @Req() req, @Body() emailData: EmailDTO) {
    this.emailProxy.emit('sendEmail', emailData);

    return res.status(HttpStatus.OK).json('OK');
  }
}
