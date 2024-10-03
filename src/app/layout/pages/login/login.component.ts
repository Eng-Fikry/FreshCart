import { Component } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink,TranslateModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {



  ngOnInit(): void {
    

    if(typeof localStorage !=='undefined'){
      localStorage.setItem("currentPage","/login")
    }
    
  }


  errorMessage!:string
  load:boolean=false

  constructor(private _authService:AuthService ,private _router:Router){
    
  }

  signin:FormGroup=new FormGroup({

    email : new FormControl(null,[Validators.required,Validators.email]),
    password : new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][0-9]{6}/)]),
    
  })

  login(){
    this.load=true

    this._authService.login(this.signin.value).subscribe({
      next:(res)=>{
        localStorage.setItem("userToken",res.token)
        this._authService.userInfo()
        this.errorMessage=''
        this.load=false
        this._router.navigate(["home"])
        
      },
      error:(err)=>{
        
        this.errorMessage=err.error.message
        this.load=false
        console.log(err);
        
        
      }
    })

  }

  

}
