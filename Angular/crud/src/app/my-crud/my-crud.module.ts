import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudComponent } from './crud/crud.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

const arr=[CrudComponent]
@NgModule({
  declarations: [
    arr,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  exports:[
    arr
  ]
})
export class MyCrudModule { }
