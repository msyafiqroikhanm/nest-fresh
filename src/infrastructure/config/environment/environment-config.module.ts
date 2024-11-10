import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { EnvironmentConfigService } from './environment-config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  providers: [ConfigService, EnvironmentConfigService],
  exports: [ConfigService, EnvironmentConfigService],
})
export class EnvironmentConfigModule {}
