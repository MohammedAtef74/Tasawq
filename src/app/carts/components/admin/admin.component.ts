import { ToastrService } from 'ngx-toastr';
import { CartsService } from './../../services/carts.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"]
})

export class AdminComponent implements OnInit {
  
  carts:any;
  form !:FormGroup ;
  constructor(  private loadingBar: LoadingBarService ,
    private spinner: NgxSpinnerService,
    private service:CartsService,
    private toastr: ToastrService,
    private build:FormBuilder) { };

     
    startLoading()
    {
      this.loadingBar.start();
    };
  
    stopLoading()
    {
      this.loadingBar.complete();
    };
  
    getCarts()
    {
      this.service.getAllCarts().subscribe(({
        next:response=>
        {
          this.carts = response;
          console.log(response)
        },
        error:error =>
        {
          this.toastr.error(error)
        }
      }));
    };
 
    applyFilter()
    {
      let date = this.form.value ; 
      this.service.getAllCarts(date).subscribe(({
        next:response=>
        {
          this.carts = response;
          console.log(response)
        },
        error:error =>
        {
          this.toastr.error(error)
        }
      }));
    };
  
    deleteCart(id:number)
    {
       this.service.deleteCart(id).subscribe(({
        next:response=>
        {
           response = this.toastr.error('Cart Deleted Success');
           this.getCarts();
        },
        error:error=>
        {
            error = this.toastr.error(error)
        }
       }));
    };
  
 
  
   
  
      ngOnInit():void
      {
       this.startLoading();     
       /** spinner starts on init */
       this.spinner.show();
       this.form = this.build.group({
        start:[''],
        end:['']
       });
        this.getCarts();
        setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
        }, 1000);
         this.stopLoading();   
        };
}
