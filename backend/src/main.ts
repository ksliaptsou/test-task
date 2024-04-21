import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  DocumentBuilder,
  SwaggerDocumentOptions,
  SwaggerModule,
} from '@nestjs/swagger';
import { RepoModule } from './repo/repo.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  const configService = app.get(ConfigService);

  const config = new DocumentBuilder()
    .setTitle('Github search')
    .setDescription('Github search public repos service')
    .setVersion('1.0')
    .addTag('repo-service')
    .addBearerAuth()
    .build();
  const options: SwaggerDocumentOptions = {
    include: [RepoModule],
    deepScanRoutes: true,
  };
  const document = SwaggerModule.createDocument(app, config, options);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new ValidationPipe());

  app.enableCors({
    origin: configService.get('whitelist'),
    credentials: true,
    optionsSuccessStatus: 200,
  });

  await app.listen(configService.get<number>('PORT'));
}
bootstrap();
