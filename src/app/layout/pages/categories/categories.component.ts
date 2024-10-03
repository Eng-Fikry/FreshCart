import { Component } from '@angular/core';
import { brandss } from '../../../shared/interfaces/brand/brands';
import { CategoService } from '../../../shared/services/catego/catego.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  constructor(private _categoService:CategoService){}

  catego:brandss[]=[]

  ngOnInit(): void {
    

    if(typeof localStorage !=='undefined'){
      localStorage.setItem("currentPage","/categories")
    }

    this._categoService.allCatego().subscribe(
      (res)=>{

        this.catego=res.data
        
        
      }
    )
    
  }



}
