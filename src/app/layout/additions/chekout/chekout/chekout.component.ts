import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PaymentService } from '../../../../shared/services/paymen/payment.service';
import { ActivatedRoute } from '@angular/router';
import { ItmsService } from '../../../../shared/services/itms/itms.service';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-chekout',
  standalone: true,
  imports: [ReactiveFormsModule,TranslateModule],
  templateUrl: './chekout.component.html',
  styleUrl: './chekout.component.css'
})
export class ChekoutComponent {

  constructor(private _itmsService:ItmsService,private _paymentService:PaymentService , private _activatedRoute:ActivatedRoute){}


  checkout:FormGroup=new FormGroup({
    details:new FormControl(null,[Validators.required]),
    phone:new FormControl(null,[Validators.required,Validators.pattern(/^(010|011|012|015)[0-9]{8}$/)]),
    city:new FormControl(null,[Validators.required])
  })


  submit(){

    this._activatedRoute.paramMap.subscribe((id)=>{
      this._paymentService.chekOut(id.get('cid')!,this.checkout.value).subscribe((res)=>{

        window.open(res.session.url,`_self`)
        localStorage.setItem("cartitems","0")
      this._itmsService.number.next(localStorage.getItem("cartitems"))
      })

    })


  }

}
