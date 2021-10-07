import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';

@Injectable()
export class EmailService {
  constructor(@InjectQueue('email') private emailQueue: Queue) {}

  // add new job to queue
  async addEmailQueue(name: string, email: string): Promise<boolean> {
    try {
      await this.emailQueue.add('sendEmail', {
        name: name,
        email: email,
      });
      return true;
    } catch (error) {
      return false;
    }
  }
}
