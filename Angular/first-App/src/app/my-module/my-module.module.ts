import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyComponent1Component } from './my-component1/my-component1.component';
import { MyComponent2Component } from './my-component2/my-component2.component';
import { MyModuleComponent } from '../my-module/my-module.component';



@NgModule({
  declarations: [
    MyComponent1Component,
    MyComponent2Component,
    MyModuleComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    MyComponent1Component,
    MyComponent2Component
  ]
})
export class MyModuleModule { }
