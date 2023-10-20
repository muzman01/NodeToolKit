// config.ts içinde
export interface IConfigParams {
  jwt_secret: string;
}

let _config: IConfigParams | null = null;

export function initialize(config: IConfigParams): void {
  // Burada gelen yapılandırma verilerini doğrulama yapabilirsiniz.
  _config = config;
}

export function getConfig(): IConfigParams {
  if (!_config) {
    throw new Error(
      "Config has not been initialized. Please call initialize first."
    );
  }
  return _config;
}
