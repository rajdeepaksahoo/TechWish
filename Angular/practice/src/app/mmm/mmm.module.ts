import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CccComponent } from './ccc/ccc.component';



@NgModule({
  declarations: [
    CccComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CccComponent
  ]
})
export class MMMModule { }
