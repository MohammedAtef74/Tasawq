import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.scss"]
})

export class ProductDetailsComponent implements OnInit {
  id : any ;
  data:any = {};

  constructor(private route :ActivatedRoute ,
     private ProductsService:ProductsService ,
     private spinner: NgxSpinnerService,
     private toastr: ToastrService,
     ) { 
   
    this.id = this.route.snapshot.paramMap.get('id')
    console.log(this.id)
  };

  getProductId()
  {
    this.ProductsService.getProductById(this.id).subscribe(({
        next: response => {
        this.toastr.success('Get Data Succsesfly');
        this.data = response;
        console.log(response);
        this.spinner.hide();
      },
      error: error => {
        this.toastr.error(error);
      }
    }));
  };

  ngOnInit() {
    this.spinner.show();
   this.getProductId();
  };
};
