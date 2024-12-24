import { NestFactory } from '@nestjs/core';
import { GameModule } from './game.module';
import { ConfigService } from '@nestjs/config';
import { BadRequestException, Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(GameModule);
  const port = app.get(ConfigService).get<string>('port');

  if (!port) {
    throw new Error('Configuration for "port" is missing');
  }

  app.enableCors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      exceptionFactory: (errors) => {
        const formattedErrors = [];

        errors.forEach((error) => {
          if (error.children && error.children.length > 0) {
            error.children.forEach((childError) => {
              formattedErrors.push({
                property: `${error.property}.${childError.property}`,
                constraints: childError.constraints,
              });
            });
          } else {
            formattedErrors.push({
              property: error.property,
              constraints: error.constraints,
            });
          }
        });

        return new BadRequestException(formattedErrors);
      },
    }),
  );

  //TODO подключить сваггер
  // const swaggerConfig = new DocumentBuilder()
  //   .setTitle('gameApiDocs')
  //   .setDescription('')
  //   .setVersion('1.0.0')
  //   .build();
  // const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  // SwaggerModule.setup('/docs', app, swaggerDocument);

  await app.listen(port);
  logger.log(`Старт отличный, порт: ${port}`);
}
bootstrap();
