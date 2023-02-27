import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyModuleModule } from './my-module/my-module.module';
import { MyformModule } from './myform/myform.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyModuleModule,
    MyformModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
