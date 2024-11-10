import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { EnvironmentConfigService } from './infrastructure/config/environment/environment-config.service';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const appConfig = app.get(EnvironmentConfigService);

  console.log({
    app_name: appConfig.getAppName(),
    env: appConfig.getEnv(),
    port: appConfig.getPort(),
    url: appConfig.getURL(),
  });

  await app.listen(3000);
}
bootstrap();
