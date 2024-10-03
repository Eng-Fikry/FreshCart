import { afterNextRender, Injectable } from '@angular/core';
import{Login, Register} from '../interfaces/register'
import { HttpClient } from '@angular/common/http';
import { Envirnoment } from '../../Base/Environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';



//ahmed_yassin@gmail.com   A123456
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  

  tokenDecode:BehaviorSubject<any>=new BehaviorSubject(null)

  constructor(private _httpClient:HttpClient,private _router:Router) { 

    afterNextRender(()=>{
      if(localStorage.getItem("userToken")!==null){
        this.userInfo()
        _router.navigate([localStorage.getItem("currentPage")])

      }
    })
  }


  register(data:Register):Observable<any>{
    return this._httpClient.post(`${Envirnoment.baseURL}/api/v1/auth/signup`,data)
  }

  login(data:Login):Observable<any>{
    return this._httpClient.post(`${Envirnoment.baseURL}/api/v1/auth/signin`,data)
  }

  userInfo(){
    this.tokenDecode.next(jwtDecode(JSON.stringify(localStorage.getItem("userToken")))) 

    
  }

  verify(data:any):Observable<any>{
    return this._httpClient.post(`${Envirnoment.baseURL}/api/v1/auth/forgotPasswords`,data)
  }

  code(data:any):Observable<any>{
    return this._httpClient.post(`${Envirnoment.baseURL}/api/v1/auth/verifyResetCode`,data)
  }

  newPassword(data:any):Observable<any>{
    return this._httpClient.put(`${Envirnoment.baseURL}/api/v1/auth/resetPassword`,data)
  }


}
