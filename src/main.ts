import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';

import { PORT } from './common/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT || 4000);
}

bootstrap();
