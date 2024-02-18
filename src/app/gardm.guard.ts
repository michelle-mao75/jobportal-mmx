import { CanActivateFn } from '@angular/router';

export const gardmGuard: CanActivateFn = (route, state) => {
 
  const token=localStorage.getItem("admin");
  if (!!token) {
    return true
  }
 return false;
};
