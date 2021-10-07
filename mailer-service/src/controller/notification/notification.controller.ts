import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { EmailService } from 'src/services/email.service';
import { EmailDTO } from '../dto/email.dto';

@Controller()
export class NotificationController {
  constructor(private emailService: EmailService) {}

  @EventPattern('sendEmail')
  sendEmail(data: EmailDTO) {
    this.emailService.addEmailQueue(data.name, data.email);
  }
}
