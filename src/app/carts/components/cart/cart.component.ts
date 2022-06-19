import { CartsService } from './../../services/carts.service';
import { HttpHelpersService } from './../../../components/service/http-help.service';
import { Component, OnInit } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartProducts:any [] = [];
  total:any = 0 ;
  succsess:boolean = false ;

  constructor(    private loadingBar: LoadingBarService ,
    private HttpHelpersService:HttpHelpersService ,
    private spinner: NgxSpinnerService,
    private service:CartsService,
    private toastr: ToastrService,
    ) { };


    
  startLoading()
  {
    this.loadingBar.start();
  };

  stopLoading()
  {
    this.loadingBar.complete();
  };

  getCartProduct()
  {
    
    if('cart' in localStorage)
    {
       this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
    }
    this.getCartTotal();

    console.log(this.cartProducts);
  };

  plusAmount(index:number)
  {
     this.cartProducts[index].quantity++ ;
     this.getCartTotal();
     localStorage.setItem('cart' , JSON.stringify(this.cartProducts));
  };

  detectChange()
  {
    this.getCartTotal();
    localStorage.setItem('cart' , JSON.stringify(this.cartProducts));  
  };

  deleteProduct(index:number)
  {
    this.cartProducts.splice(index , 1);
    this.getCartTotal();
    localStorage.setItem('cart' , JSON.stringify(this.cartProducts));
    this.toastr.error('Product Deleted Succsesfly')
  };

  clearCart()
  {
    this.cartProducts = [];
    this.getCartTotal();
    localStorage.setItem('cart' , JSON.stringify(this.cartProducts));
  };

  minsAmount(index:number)
  {
     this.cartProducts[index].quantity-- ;
     this.getCartTotal();
     localStorage.setItem('cart' , JSON.stringify(this.cartProducts));

  };

  getCartTotal()
  {
    this.total=0;
    for( let x in this.cartProducts)
    {
       this.total += this.cartProducts[x].item.price * this.cartProducts[x].quantity ;
    }
  };

  addCart()
  {
     let products = this.cartProducts.map(item =>{
      return {productId:item.id , quantity:item.quantity}
     });

     let model = {
      userId : 5 ,
      date: new Date() ,
      products :products
     };

     this.service.createNewCart(model).subscribe(({
      next:response=>{
        this.succsess = true ;
        this.toastr.success('Your Order is Successfully Send')
      },
      error:error=>{
        this.toastr.error(error)
      }
     }))
  };

    ngOnInit():void
    {
     this.startLoading();     
     /** spinner starts on init */
     this.spinner.show();
     this.getCartProduct();

      setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
      }, 1000);
       this.stopLoading();   
      };

}
