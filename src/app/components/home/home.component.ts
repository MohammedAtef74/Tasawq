import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ProductEndPoient } from './../service/global.service';
import { Component, OnInit } from "@angular/core";
import { LoadingBarService } from '@ngx-loading-bar/core';
import { NgxSpinnerService } from "ngx-spinner";
import { HttpHelpersService } from '../service/http-help.service';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})

export class HomeComponent implements OnInit {
  
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
        this.toastr.error;
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
