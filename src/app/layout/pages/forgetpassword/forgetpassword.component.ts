import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  standalone: true,
  imports: [ReactiveFormsModule,TranslateModule],
  templateUrl: './forgetpassword.component.html',
  styleUrl: './forgetpassword.component.css'
})
export class ForgetpasswordComponent {

    constructor(private _authService:AuthService,private _router:Router){}

  load:boolean=false
  
  iscode:boolean=false
  isnew:boolean=false

  firstStep:FormGroup=new FormGroup({

    email:new FormControl(null,[Validators.required,Validators.email])

  })

  secondStep:FormGroup=new FormGroup({

    resetCode:new FormControl(null,[Validators.required])

  })

  finalStep:FormGroup=new FormGroup({

    email:new FormControl(null,[Validators.required,Validators.email]),
    newPassword:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][0-9]{6}/)])

  })


  verify(){

    
    this.load=true
    
    
    this._authService.verify(this.firstStep.value).subscribe({
      next:(res)=>{
        this.iscode=true
        this.load=false
        
        
        console.log(res);
        

      },
      error:(err)=>{this.load=false
        console.log(err.error.statusMsg);}
    })

  }






  send(){
    this.load=true
    
    this._authService.code(this.secondStep.value).subscribe({
      next:(res)=>{
        this.load=false
        this.iscode=false
        this.isnew=true
        
        console.log(res);
        

      },
      error:(err)=>{this.load=false
        console.log(err);}
    })
    
  }

  submit(){
    this.load=true

    this._authService.newPassword(this.finalStep.value).subscribe({
      next:(res)=>{
        this.load=false
        console.log(res);
        this._router.navigate(["login"])
        
        

      }
    })
    
  }

}
