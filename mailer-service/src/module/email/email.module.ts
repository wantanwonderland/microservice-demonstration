import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { EmailConsumer } from 'src/consumer/email.consumer';
import { EmailService } from 'src/services/email.service';
import { SendInBlueService } from 'src/services/sendinblue.service';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    BullModule.registerQueue({
      name: 'email',
    }),
  ],
  controllers: [],
  providers: [EmailConsumer, EmailService, SendInBlueService],
  exports: [EmailService],
})
export class EmailModule {}
