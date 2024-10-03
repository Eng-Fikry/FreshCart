import { Products } from './../../../shared/interfaces/products';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../shared/services/products.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../../../shared/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { ItmsService } from '../../../shared/services/itms/itms.service';
import { TranslateModule } from '@ngx-translate/core';




@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CarouselModule,TranslateModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {


  pId!:string | null
  constructor(private _itmsService:ItmsService,private _toastrService: ToastrService,private _activatedRoute:ActivatedRoute,private _productsService:ProductsService,private _cartService:CartService){}

 _ProductsDetails!:Products

  ngOnInit(): void {

    this.proId()
    this.callProductApi()
    
  }

  proId(){
    this._activatedRoute.paramMap.subscribe((id)=>{
      
      this.pId=id.get("id")
      console.log(this.pId);
      
      
    })
  }

  callProductApi(){
    this._productsService.specProdeuctApi(this.pId).subscribe({
      next:(res)=>{
        

        this._ProductsDetails=res.data
        console.log(this._ProductsDetails);
        

      },

      error:(err)=>{}
    })
  }




  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    rtl:true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      
    },
    nav: false
  }



  addToCart(pId:string){

    this._cartService.addProduct(pId).subscribe({
      next:(res)=>{
        console.log(res.numOfCartItems);
        
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
