import { Module } from '@nestjs/common';
import { EmailModule } from 'src/module/email/email.module';
import { NotificationController } from './notification.controller';

@Module({
  imports: [EmailModule],
  controllers: [NotificationController],
})
export class NotificationModule {}
