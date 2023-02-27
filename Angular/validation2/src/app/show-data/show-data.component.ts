import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent {
  @Input()n:any
  @Input()e:any
  @Input()p:any
  data=JSON.parse(localStorage.getItem("users"))
  nnn= JSON.parse(localStorage.getItem('users'))
  constructor(){

    let evilResponseProps = Object.keys(localStorage.getItem("users"));

    let goodResponse = [];

    
    let no=0;
    for (let prop of this.nnn) { 
        
      for(let props of this.nnn){
        console.log(this.nnn[no++]);
      }
      //console.log(nnn[no++]['na']);
      
    }
    console.log(goodResponse)
  }
}
