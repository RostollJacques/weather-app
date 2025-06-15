export interface AppConfig {
  production: boolean;
  apiUrl: string;
  apiKey: string;
  defaultLocation: string;
  defaultUnits: 'metric' | 'imperial';
  featureFlags: {
    enableLocationTracking: boolean;
  };
}
