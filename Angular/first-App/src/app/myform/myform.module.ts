import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PpComponent } from './pp/pp.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PpComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports : [
    PpComponent,
    
  ]
})
export class MyformModule { }
