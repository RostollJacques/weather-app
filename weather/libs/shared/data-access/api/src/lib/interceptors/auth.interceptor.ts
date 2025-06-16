import { inject } from '@angular/core';
import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { APP_CONFIG, AppConfig } from '@weather/app-config';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';

export const authInterceptorfn: HttpInterceptorFn = (req, next) => {
  const config = inject<AppConfig>(APP_CONFIG);
  const toastr = inject(ToastrService);

  const cloned = req.clone({
    setParams: {
      appid: config.apiKey,
    },
  });

  return next(cloned).pipe(
    catchError((error: HttpErrorResponse) => {
      let message = 'An unexpected error occurred.';

      if (error.status === 404) {
        message = 'City not found (404). Please check the spelling.';
      } else if (error.status === 401) {
        message = 'Unauthorized (401). Please check your API key.';
      } else if (error.status === 403) {
        message = 'Access forbidden (403). Please check your permissions.';
      } else if (error.status === 500) {
        message = 'Server error (500). Please try again later.';
      } else if (error.status === 0) {
        message = 'Network error. Please check your internet connection.';
      } else if (error.statusText) {
        message = error.statusText;
      }
      toastr.error(message, 'Oops!');

      return throwError(() => error);
    })
  );
};
