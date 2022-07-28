import { product } from './../../../products/models/product';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from './../../../products/services/products.service';
import { ProductEndPoient } from './../../../components/service/global.service';
import { ToastrService } from 'ngx-toastr';
import { HttpHelpersService } from './../../../components/service/http-help.service';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from "@angular/core";

  declare let $:any;
@Component({
  selector: "app-add-product",
  templateUrl: "./add-product.component.html",
  styleUrls: ["./add-product.component.scss"]
})

export class AddProductComponent implements OnInit {
  
  allProduct:any;
  products: any;
  categries :any;
  base64:any = '';
  productId :any;
  form!:FormGroup
  updateForm!:FormGroup;

  constructor(private spinner: NgxSpinnerService, 
    private build:FormBuilder,
    private loadingBar: LoadingBarService ,
    private HttpHelpersService:HttpHelpersService ,
    private toastr: ToastrService,
    private ProductsService:ProductsService,) { 

  };

  getAllProducts()
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

  fillterCategory(event:any)
  {
    let value = event.target.value;
     (value == 'All') ?  this.getProducts() : this.getProductsCategory(value);
     this.spinner.show();
     setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);
    console.log(value)
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

  getProductsCategory(kewords:string)
  {
    this.ProductsService.getProductsByCategory(kewords).subscribe((res:any)=>{
      this.spinner.show();
      this.products = res ;
    });
  };

  getCategories() 
  {
    this.ProductsService.getAllCategories().subscribe(({
      next: response => {
        this.spinner.show();
        // this.toastr.success('Get Data Succsesfly')
        this.categries = response;
        console.log(response);
        this.spinner.hide();
      },
      error: error => {
        this.toastr.error(error);
      }
    }));
  };
  

  startLoading()
  {
    this.loadingBar.start();
  };

  stopLoading()
  {
    this.loadingBar.complete();
  };

  getImagePath(event:any)
  {
     const file = event.target.files[0];
     const reader = new FileReader;
     reader.readAsDataURL(file);
     reader.onload = () => 
     {
       this.base64 = reader.result;
       this.form.get('image')?.setValue('image');
       console.log(this.base64)
     }
  };

  addProduct()
  {
    console.log(this.form)
    const model = this.form.value;

    this.ProductsService.createProduct(model).subscribe(({
      next:response =>
      {
         this.toastr.success('Product Added Successfly');
        $('#add').modal('hide');
         this.getAllProducts();
         this.form.reset();

      },
      error:error =>
      {
        this.toastr.error(error)
      }
    }));

  };

  update(id:any)
  {
    const model = this.updateForm.value;


    this.ProductsService.updateProduct(model).subscribe(({
      next:res =>
      {
        this.toastr.success('Product Updated Successfly');
        $('#update').modal('hide');
      },
      error:error=>
      {
        this.toastr.error(error)
      }
    }));
    
  };

  getId(id:any)
  {
     this.productId = id
     console.log(this.productId)
  };
  
  setItemValue(item :any)
  {


    this.updateForm.patchValue({
      title : item.title,
      price : item.price,
      description : item.description,
      image : item.image,
      category : item.category
    })

    this.base64 = item.image;
  };



  getSelectedCategory(event:any)
  {
    this.form.get('category')?.setValue(event.target.value);
    console.log(event.target.value)
  };

  ngOnInit()
  {
    this.form = this.build.group({
      title:['' , [Validators.required]],
      price:['' , [Validators.required]],
      description:['' , [Validators.required]],
      image:['' , [Validators.required]],
      category:['' , [Validators.required]]
    });

    this.updateForm = this.build.group({
      title:['' , [Validators.required]],
      price:['' , [Validators.required]],
      description:['' , [Validators.required]],
      image:['' , [Validators.required]],
      category:['' , [Validators.required]]
      
    })

    this.startLoading();     
    this.spinner.show();
     this.getAllProducts();
     this.getCategories();
      this.stopLoading();   
  };
};
