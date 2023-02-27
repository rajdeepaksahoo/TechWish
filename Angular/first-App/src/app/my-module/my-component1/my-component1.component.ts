import { Component } from '@angular/core';

@Component({
  selector: 'app-my-component1',
  templateUrl: './my-component1.component.html',
  styleUrls: ['./my-component1.component.less']
})
export class MyComponent1Component {
  count =0;
    click(){
      console.log(this.count++);
      document.write(`${this.count}`)
    }
    kp(val:any){
      console.log(val);
    }
    display='';
    getVal(val:string){
      this.display=val;
    }
    cnt=0;
    counts(){
      this.cnt++;
    }
    tf=false;
    idd="";
    ch(){
      this.tf=!(this.tf);
      if(this.tf){
        this.idd='i';
      }else{
        this.idd='ii';
      }
    }
}
