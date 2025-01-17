import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  app.enableVersioning({ type: VersioningType.URI, defaultVersion: '1' });
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
  .setTitle('API Rest SIS257')
  .setDescription('API Rest de la materia Desarrollo de App Int/Internet II')
  .setVersion('1.0')
  .addTag('clientes')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('apidoc', app, document);
  
  //await app.listen(process.env.PORT ?? 3000);
  await app.listen(process.env.PORT);
  console.log(`App corriendo ${await app.getUrl()}/apidoc`);
}
bootstrap();
