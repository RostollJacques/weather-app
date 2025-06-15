import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { APP_CONFIG, AppConfig } from '@weather/app-config';

export const authInterceptorfn: HttpInterceptorFn = (req, next) => {
  const config = inject<AppConfig>(APP_CONFIG);

  const cloned = req.clone({
    setParams: {
      appid: config.apiKey,
    },
  });

  return next(cloned);
};
