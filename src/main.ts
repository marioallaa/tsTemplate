import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
let port: number = 3000;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  console.log(`running on http://localhost:${port}`)
}
bootstrap();
