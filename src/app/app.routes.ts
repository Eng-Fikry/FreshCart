import { Routes } from '@angular/router';
import { HomeComponent } from './layout/pages/home/home.component';
import { CartComponent } from './layout/pages/cart/cart.component';
import { LoginComponent } from './layout/pages/login/login.component';
import { ProductsComponent } from './layout/pages/products/products.component';
import { RegisterComponent } from './layout/pages/register/register.component';
import { CategoriesComponent } from './layout/pages/categories/categories.component';
import { BrandsComponent } from './layout/pages/brands/brands.component';
import { ProductDetailsComponent } from './layout/additions/product-details/product-details.component';
import { NotFoundComponent } from './layout/additions/not-found/not-found.component';
import { authGuard } from './shared/guard/auth.guard';
import { ForgetpasswordComponent } from './layout/pages/forgetpassword/forgetpassword.component';
import { ChekoutComponent } from './layout/additions/chekout/chekout/chekout.component';

export const routes: Routes = [
    {path:"",redirectTo:"login",pathMatch:"full",},
    {path:"home",component:HomeComponent, canActivate:[authGuard]},
    {path:"cart",component:CartComponent, canActivate:[authGuard]},
    {path:"login",component:LoginComponent},
    {path:"products",component:ProductsComponent, canActivate:[authGuard]},
    {path:"register",component:RegisterComponent},
    {path:"forgePassword",component:ForgetpasswordComponent},
    {path:"categories",component:CategoriesComponent, canActivate:[authGuard]},
    {path:"brands",component:BrandsComponent, canActivate:[authGuard]},
    {path:"productDetails/:id",component:ProductDetailsComponent, canActivate:[authGuard]},
    {path:"checkout/:cid",component:ChekoutComponent, canActivate:[authGuard]},
    {path:"**",component:NotFoundComponent},
];
