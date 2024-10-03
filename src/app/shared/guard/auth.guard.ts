import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {


  if(localStorage.getItem('userToken')!=null){
    let _authService:AuthService=inject(AuthService) 
    

    _authService.userInfo()
    return true;

  }
  else{
    let _router:Router=inject(Router) 
    _router.navigate(['/login'])
    return false;
    

  }
  
};
