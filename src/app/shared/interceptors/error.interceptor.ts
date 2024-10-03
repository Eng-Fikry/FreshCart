import { ToastrService } from 'ngx-toastr';
import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { inject } from '@angular/core';


export const errorInterceptor: HttpInterceptorFn = (req, next) => {

  let _toastrService:ToastrService=inject(ToastrService)
  return next(req).pipe(catchError((err)=>{
    _toastrService.error(err.error.message)
    console.log(err.error.message);
    

    return throwError(()=>err)
  })

    
  )};
;
