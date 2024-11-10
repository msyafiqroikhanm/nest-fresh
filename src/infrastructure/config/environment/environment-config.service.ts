import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppConfigEnvironment } from 'src/domain/interfaces/config/app.interfaces';

@Injectable()
export class EnvironmentConfigService implements AppConfigEnvironment {
  constructor(private configService: ConfigService) {}

  getAppName(): string {
    return this.configService.get<string>('APP_NAME');
  }
  getPort(): number {
    return this.configService.get<number>('APP_Port');
  }
  getEnv(): string {
    return this.configService.get<string>('APP_ENV');
  }
  getURL(): string {
    return this.configService.get<string>('APP_URL');
  }
}
