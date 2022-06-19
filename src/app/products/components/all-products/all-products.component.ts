import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {

  products: any;
  categries :any;
  cartProducts : any []=[];
  constructor(private spinner: NgxSpinnerService,
    private loadingBar: LoadingBarService,
    private toastr: ToastrService,
    private ProductsService: ProductsService) {

  };


  startLoading() {
    this.loadingBar.start();
  };

  stopLoading() {
    this.loadingBar.complete();
  };


  getProducts() {
    this.ProductsService.getAllProduct().subscribe(({
      next: response => {
        this.spinner.show();
        this.toastr.success('Get Data Succsesfly')
        this.products = response;
        console.log(response);
        this.spinner.hide();
      },
      error: error => {
        this.toastr.error('Error 404');
      }
    }));
  };

  getCategories() {
    this.ProductsService.getAllCategories().subscribe(({
      next: response => {
        this.spinner.show();
        this.toastr.success('Get Data Succsesfly')
        this.categries = response;
        console.log(response);
        this.spinner.hide();
      },
      error: error => {
        this.toastr.error('Error 404');
      }
    }));
  };

  fillterCategory(event:any)
  {
    let value = event.target.value;
     (value == 'All') ?  this.getProducts() : this.getProductsCategory(value);
     this.spinner.show();
     setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);
  };

  getProductsCategory(kewords:string)
  {
    this.ProductsService.getProductsByCategory(kewords).subscribe((res:any)=>{
      this.spinner.show();
      this.products = res ;
    });
  };

  addToCart(event: any) {
   
    if('cart' in localStorage)
    {
       this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
       let exist = this.cartProducts.find(item => item.item.id == event.item.id)
       if(exist)
       {
          this.toastr.warning('Product Is Already In Your Cart')
       }
       else
       {
        this.cartProducts.push(event);
        localStorage.setItem('cart' , JSON.stringify(this.cartProducts));
        this.toastr.success('Product Add In Your Cart')

       };
    }
    else
    {
      this.cartProducts.push(event);
       localStorage.setItem('cart' , JSON.stringify(this.cartProducts));
    };

    // console.log('added', this.categries[event])
  };


  ngOnInit(): void {
    this.startLoading();
    /** spinner starts on init */
    this.spinner.show();
    this.getProducts();
    this.getCategories();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);
    this.stopLoading();

  };

};
