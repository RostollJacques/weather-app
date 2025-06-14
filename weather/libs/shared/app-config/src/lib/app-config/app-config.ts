export interface AppConfig {
  production: boolean;
  apiUrl: string;
  apiKey: string;
  defaultLocation: string;
  defaultUnits: 'metric' | 'imperial';
  cacheDuration: number;
  featureFlags: {
    enableDarkMode: boolean;
    enableNotifications: boolean;
    enableLocationTracking: boolean;
    enableWeatherAlerts: boolean;
  };
}
