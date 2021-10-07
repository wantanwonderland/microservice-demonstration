import { Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';
import { SendInBlueService } from 'src/services/sendinblue.service';

@Processor('email')
export class EmailConsumer {
  constructor(private sendInBlueService: SendInBlueService) {}
  private readonly logger = new Logger(this.constructor.name);

  @Process('sendEmail')
  async sendEmail(job: Job<{ name: string; email: string }>) {
    this.logger.log(`Sending email to '${job.data.email}'`);

    // send email
    await this.sendInBlueService.sendEmail(job.data.name, job.data.email);
  }
}
