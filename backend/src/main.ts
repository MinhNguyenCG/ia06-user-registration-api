import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Bật cơ chế validation cho DTO trên toàn bộ ứng dụng
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  // Kích hoạt CORS cho phép frontend gọi API (chỉ định origin cụ thể)
  app.enableCors({
    origin: ['http://localhost:3000', 'ia06-user-registration-api.vercel.app'], // cho phép local host frontend (sẽ chỉnh domain khi deploy)
  });

  await app.listen(process.env.PORT || 5000);
  console.log(`Backend is running on port ${process.env.PORT || 5000}`);
}
bootstrap();
