import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { DataservicesService } from './dataservices.service';
import { map } from 'rxjs/operators';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const service = inject(DataservicesService);

  return service.GetLoginUser().pipe(
    map((userData) => {
      if (userData) {
        return true;
      } else {
        router.navigateByUrl('/login');
        return false;
      }
    })
  );
};
