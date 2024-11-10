export interface AppConfigEnvironment {
  getEnv(): string;
  getAppName(): string;
  getPort(): number;
  getURL(): string;
}
