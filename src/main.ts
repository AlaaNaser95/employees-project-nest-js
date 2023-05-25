import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { ConvertToUndefinedPipe } from './common/pipes/convert-to-undefined.pipe';
import { ExceptionFilter } from './common/exceptions/exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ConvertToUndefinedPipe(),
    new ValidationPipe({
      exceptionFactory: (errors) =>
        new BadRequestException(JSON.stringify(errors)),
      whitelist: true,
      transform: true,
    }),
  );
  app.useGlobalFilters(new ExceptionFilter());

  await app.listen(process.env.LISTENING_PORT ?? 3000);
}
bootstrap();
