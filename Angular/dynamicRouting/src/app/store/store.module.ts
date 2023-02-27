import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreDataComponent } from './store-data/store-data.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    StoreDataComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],exports: [
    StoreDataComponent
  ]
})
export class StoreModule { }
