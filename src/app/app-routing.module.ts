import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { ProductComponent } from './products/components/product/product.component';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { SignupComponent } from './components/signup/signup.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './carts/components/cart/cart.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'products', component:AllProductsComponent},
  {path:'cart', component:CartComponent},
  {path:'product', component:ProductComponent},
  {path:'product-details/:id', component:ProductDetailsComponent},
  {path:'signup', component:SignupComponent},
  {path:'**',redirectTo:'home', pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
