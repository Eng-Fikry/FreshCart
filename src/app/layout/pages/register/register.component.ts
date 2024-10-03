import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,TranslateModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  errorMessage!:string
  load:boolean=false

  constructor(private _authService:AuthService ,private _router:Router){
    
  }

  register:FormGroup=new FormGroup({


    name : new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    email : new FormControl(null,[Validators.required,Validators.email]),
    phone : new FormControl(null,[Validators.required,Validators.pattern(/^(010|011|012|015)[0-9]{8}$/)]),
    password : new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][0-9]{6}/)]),
    rePassword : new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][0-9]{6}/)]),
    

    

  },this.passmathced)

  test(){
    this.load=true

    this._authService.register(this.register.value).subscribe({
      next:(res)=>{
        console.log(res);
        this.errorMessage=''
        this.load=false
        this._router.navigate(["login"])
        
      },
      error:(err)=>{
        
        this.errorMessage=err.error.message
        this.load=false
        
      }
    })

  }

  passmathced(x:any){
    if(x.get('password').value === x.get('rePassword').value){
      return null
    }
    else{
      return {'missMatched':true}
    }
  }


  ngOnInit(): void {
    if(typeof localStorage !=='undefined'){
      localStorage.setItem("currentPage","/register")
    }

}
}
