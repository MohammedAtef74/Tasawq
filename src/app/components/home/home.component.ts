import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ProductEndPoient } from './../service/global.service';
import { Component, OnInit } from "@angular/core";
import { LoadingBarService } from '@ngx-loading-bar/core';
import { NgxSpinnerService } from "ngx-spinner";
import { HttpHelpersService } from '../service/http-help.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})

export class HomeComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 500,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  };

  productImage = [
    {imgSrc:'../../assets/products/1.png', id:1},
    {imgSrc:'../../assets/products/2.png' , id:2},
    {imgSrc:'../../assets/products/3.png',id:3},
    {imgSrc:'../../assets/products/7.png',id:7},
    {imgSrc:'../../assets/products/8.png',id:8},
    {imgSrc:'../../assets/products/9.png',id:9},
    {imgSrc:'../../assets/products/10.png',id:10},
    {imgSrc:'../../assets/products/11.png',id:11},
    {imgSrc:'../../assets/products/12.png',id:12},
    {imgSrc:'../../assets/products/13.png',id:13},
    {imgSrc:'../../assets/products/14.png',id:14},
    {imgSrc:'../../assets/products/15.png',id:15},
    {imgSrc:'../../assets/products/16.png',id:16},
    {imgSrc:'../../assets/products/17.png',id:17},
    {imgSrc:'../../assets/products/18.png',id:18},
    {imgSrc:'../../assets/products/19.png',id:19},
    {imgSrc:'../../assets/products/20.png',id:20},
    {imgSrc:'../../assets/products/21.png',id:21},
    {imgSrc:'../../assets/products/22.png',id:22},

  ];
  
  allProduct:any;

  constructor(private spinner: NgxSpinnerService,
    private loadingBar: LoadingBarService ,
    private HttpHelpersService:HttpHelpersService ,
    private toastr: ToastrService,
    ) { 

  };

  getCategory()
  {
    this.HttpHelpersService.get(ProductEndPoient.GET).subscribe(({
      next:response=>
      {
        this.startLoading();
        this.spinner.show();
        this.allProduct = response;
        this.stopLoading();        
        console.log(response);
        this.spinner.hide();
      },
      error:error=>
      {
        this.toastr.error(error);
      }
    }))
  };


  startLoading()
  {
    this.loadingBar.start();
  };

  stopLoading()
  {
    this.loadingBar.complete();
  };

  addToCrat(index : any)
  {
    console.log('added' , this.allProduct[index])
  };

  ngOnInit():void
   {
    this.startLoading();     
 /** spinner starts on init */
 this.spinner.show();
  this.getCategory();


 setTimeout(() => {
   /** spinner ends after 5 seconds */
   this.spinner.hide();
 }, 1000);
      this.stopLoading();   

  };
}
