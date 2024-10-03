import { HttpInterceptorFn } from '@angular/common/http';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {

  let userToken!:any
  
  if(localStorage.getItem("userToken")!=null){
    userToken={token:localStorage.getItem("userToken")}

  }

  req=req.clone({
    setHeaders : userToken
  })
  return next(req);
};
