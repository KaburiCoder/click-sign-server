import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerService } from './logger/logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
  });

  app.enableCors({
    origin: ['*'],
  });

  await app.listen(4001);
}

bootstrap();
