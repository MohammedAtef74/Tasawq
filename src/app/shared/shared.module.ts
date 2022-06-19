import { SpinnerComponent } from './components/spinner/spinner.component';
import { SelectComponent } from 'src/app/shared/components/select/select.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSpinnerModule } from 'ngx-spinner';
import { RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeaderComponent,
    SelectComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    HttpClientModule,
    NgxSpinnerModule,
    LoadingBarModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    SelectComponent,
    SpinnerComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
