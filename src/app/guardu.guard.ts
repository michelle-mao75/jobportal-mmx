import { CanActivateFn } from '@angular/router';

export const guarduGuard: CanActivateFn = (route, state) => {
  const token=localStorage.getItem("user");
  if (!!token) {
    return true
  }
 return false;
};
