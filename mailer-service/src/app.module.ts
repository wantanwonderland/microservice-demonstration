import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { NotificationModule } from './controller/notification/notification.module';

@Module({
  controllers: [AppController],
  imports: [NotificationModule],
})
export class AppModule {}
