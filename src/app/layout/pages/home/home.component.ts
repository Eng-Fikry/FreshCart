import { Products } from './../../../shared/interfaces/products';
import { Component } from '@angular/core';
import { ProductsService } from '../../../shared/services/products.service';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CurrencyPipe } from '@angular/common';
import { SearchPipe } from '../../../shared/pipes/search/search.pipe';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../../shared/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { ItmsService } from '../../../shared/services/itms/itms.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,CarouselModule,CurrencyPipe,SearchPipe,FormsModule,TranslateModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
 word:string=""
   i:number=0
 
  

  _products:Products[]=[]

  constructor(private _toastrService: ToastrService,private _productsService:ProductsService,private _cartService:CartService,private _itmsService:ItmsService){}

  

  ngOnInit(): void {
    
    

    if(typeof localStorage !=='undefined'){
      localStorage.setItem("currentPage","/home")

      
    }


    this.productsApi()


    
  }

  productsApi(){
    this._productsService.allProdeuctsApi().subscribe({
      next:(res)=>{

        this._products=res.data
       },

      
    })
  }






  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    rtl:true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      
    },
    nav: true
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
