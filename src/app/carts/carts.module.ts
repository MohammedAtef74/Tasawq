import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { AdminComponent } from './components/admin/admin.component';



@NgModule({
  declarations: [
    CartComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule


  ]
})
export class CartsModule { }
