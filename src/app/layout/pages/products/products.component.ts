import { Component } from '@angular/core';
import { Products } from './../../../shared/interfaces/products';
import { ProductsService } from '../../../shared/services/products.service';
import { RouterLink } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CurrencyPipe } from '@angular/common';
import { SearchPipe } from '../../../shared/pipes/search/search.pipe';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../../shared/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { ItmsService } from '../../../shared/services/itms/itms.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink,CarouselModule,CurrencyPipe,SearchPipe,FormsModule,TranslateModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
   word:string=""
  _products:Products[]=[]
  constructor(private _toastrService: ToastrService,private _productsService:ProductsService,private _cartService:CartService,private _itmsService:ItmsService){}


  ngOnInit(): void {
    

    if(typeof localStorage !=='undefined'){
      localStorage.setItem("currentPage","/products")
    }
    this.productsApi()
    
  }

  productsApi(){
    this._productsService.allProdeuctsApi().subscribe({
      next:(res)=>{

        this._products=res.data
        
        
      },

      error:(err)=>{}
    })
  }
  addToCart(pId:string){

    this._cartService.addProduct(pId).subscribe({
      next:(res)=>{
       
        
        if(localStorage.getItem("lng")=="en"){

          this._toastrService.success(res.message)
  
        }
        else{
          this._toastrService.success("تم اضافة العنصر الى العربة")
  
        }
        
        
        localStorage.setItem("cartitems",JSON.stringify(res.numOfCartItems))
        this._itmsService.number.next(localStorage.getItem("cartitems"))
        
        
        
        

      }
    })

  }

}
