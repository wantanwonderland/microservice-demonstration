import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'EMAIL_SERVICE',
        transport: Transport.TCP,
        options: {
          host: process.env.EMAIL_SERVICE_HOST,
          port: parseInt(process.env.EMAIL_SERVICE_PORT) || 5000,
        },
      },
    ]),
  ],
  controllers: [AppController],
})
export class AppModule {}
