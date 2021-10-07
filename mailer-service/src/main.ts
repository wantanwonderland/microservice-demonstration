import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: {
      host: process.env.TCP_HOST,
      port: process.env.TCP_PORT || 5000,
    },
  });
  await app.listen();
}
bootstrap();
