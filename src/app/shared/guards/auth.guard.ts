import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {

  let userAuth =  inject(AuthService);
  let router = inject(Router);

  if(userAuth.userToken.getValue() != null){
    return true;
  }
  else {
    router.navigate(['/login']);
    return false;
  }

};
