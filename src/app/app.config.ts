import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { routes } from './app.routes';
import { EmployeeService } from './employee.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    EmployeeService,
    importProvidersFrom(HttpClientModule)
  ]
};
