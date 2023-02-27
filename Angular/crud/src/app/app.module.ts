import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyCrudModule } from './my-crud/my-crud.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MyCrudModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
