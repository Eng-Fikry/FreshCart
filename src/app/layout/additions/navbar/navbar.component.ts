import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';
import { HomeComponent } from '../../pages/home/home.component';
import { ItmsService } from '../../../shared/services/itms/itms.service';
import { MytranslateService } from '../../../shared/services/translate/mytranslate.service';
import { TranslateModule } from '@ngx-translate/core';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,HomeComponent,TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  

  

  isLogin:boolean=false
  
  

  constructor(private _authService:AuthService, private _router:Router,public _itmsService:ItmsService,private mytranslateService:MytranslateService){}

  

  ngOnInit() {

    
    
    

    this._authService.tokenDecode.subscribe(()=>{
      if(this._authService.tokenDecode.getValue()==null){

        this.isLogin=false
  
      }
      else{
        this.isLogin=true
        
        this._itmsService.number.next(localStorage.getItem("cartitems"))
        
        this._itmsService.number.subscribe(()=>{
          
   
           this._itmsService.number.getValue()
   
          
          })
        
        
        

        
      }

    })

    
    
  }

  logout(){

    localStorage.removeItem("userToken");
    this._authService.tokenDecode.next(null);
    this._router.navigate(['/login'])
    

  }

  

  changeLang(lang:string){
    this.mytranslateService.changeLang(lang)

  }




  
}
