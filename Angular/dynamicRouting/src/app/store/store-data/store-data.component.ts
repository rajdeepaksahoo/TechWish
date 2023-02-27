import { Component } from '@angular/core';
import {ServiceService} from '../../service/service.service'
@Component({
  selector: 'app-store-data',
  templateUrl: './store-data.component.html',
  styleUrls: ['./store-data.component.css']
})
export class StoreDataComponent {
  arr:any;
  constructor(private ServiceService :ServiceService){
    this.ServiceService.getData().subscribe(product=>{
      console.log(product);
        this.arr=product;
    })
  }
}
