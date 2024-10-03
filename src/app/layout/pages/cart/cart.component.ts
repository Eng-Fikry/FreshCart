import { Component } from '@angular/core';
import { CartService } from '../../../shared/services/cart.service';
import { Cart } from '../../../shared/interfaces/cart/cart';
import { CurrencyPipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { ItmsService } from '../../../shared/services/itms/itms.service';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';



@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CurrencyPipe,RouterLink,TranslateModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  
 cartItems!:Cart
 empty:string=""
 
constructor(private _toastrService: ToastrService,private _cartService:CartService,private _itmsService:ItmsService){}
  

  ngOnInit(): void {
    
    if(typeof localStorage !=='undefined'){
      localStorage.setItem("currentPage",'/cart')
    }
    
    this.cartDisplay()
    
    
    
  }


  cartDisplay(){
    this._cartService.userCart().subscribe((res)=>{
      

      this.cartItems=res

      if (this.cartItems.data.products.length==0) {
        console.log("its empty");
        this.empty="is empty"
        
      }
      else{
        this.empty=""
      }

      
      
        
      
      
      
    })
  }

  updateCount(id:string,countItem:number){
    
    
    this._cartService.updateQuantity({count:countItem.toString()},id).subscribe((res)=>{

      this.cartItems=res

      if(localStorage.getItem("lng")=="en"){

        this._toastrService.success("Cart Updated Sucssfully")

      }
      else{
        this._toastrService.success("تم تحديث العربة")

      }
      
      
      
      
      

    })
    

  }

  removeItem(id:string){
    this._cartService.removeItem(id).subscribe((res)=>{
      this.cartItems=res

      if(localStorage.getItem("lng")=="en"){

        this._toastrService.success("Item Removed Sucssfully")

      }
      else{
        this._toastrService.success("تم حذف العنصر")

      }
      
      localStorage.setItem("cartitems",JSON.stringify(this.cartItems.numOfCartItems))
      this._itmsService.number.next(localStorage.getItem("cartitems"))
      

      
    })
  }

  cleaCart(){
    this._cartService.clearCart().subscribe((res)=>{
      this.cartDisplay()

      if(localStorage.getItem("lng")=="en"){

        this._toastrService.success("Cart Cleard Sucssfully")

      }
      else{
        this._toastrService.success("تم تنظيف العربة")

      }
      

      localStorage.setItem("cartitems","0")
      this._itmsService.number.next(localStorage.getItem("cartitems"))
      
      


    })
  }

 
}
