import { Component } from '@angular/core';
import { BrandsService } from '../../../shared/services/brands/brands.service';
import { CurrencyPipe } from '@angular/common';
import { brandss } from '../../../shared/interfaces/brand/brands';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.css'
})
export class BrandsComponent {

  brands:brandss[]=[]

  constructor(private _brandsService:BrandsService){}

  ngOnInit(): void {
    
    if(typeof localStorage !=='undefined'){
      localStorage.setItem("currentPage","/brands")
    }

    this._brandsService.allBrands().subscribe(
      (res)=>{

        this.brands=res.data
        
        
      }
    )
    
  }

}
