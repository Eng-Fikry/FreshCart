import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs';


export const loaderInterceptor: HttpInterceptorFn = (req, next) => {

  let _ngxSpinnerService:NgxSpinnerService=inject(NgxSpinnerService)

  _ngxSpinnerService.show()

  return next(req).pipe(finalize(()=>{
    _ngxSpinnerService.hide()
  }));
};
