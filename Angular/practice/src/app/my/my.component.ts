import { Component } from '@angular/core';
import {UserService} from '../user.service'
@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.css']
})

export class MyComponent {

  title="pagination";
  posts : any;
  page:number=1;
  count : number=0;
  tableSize : number=10;
  tableSizes:any=[5,10,15,20];
  
  arr :any=[];
  constructor(private UserService :UserService){
    
  }
  ngOnInit(){
    this.postList();
  }
  postList():void{
    this.UserService.getData().subscribe(b=>{
      console.log(b)
      this.posts=b;
    })
  }
  onTableDataChange(event:any){
    this.page=event;
    this.postList();
  }

  onTableSizeChange(event:any){
    this.tableSize=event.target.value;
    this.page=1;
    this.postList();
  }
  headers = ["Id", "Name" , "Place"];
  tableData :any = [
    {
      "Id": 10,
      "Name": "Raz",
      "Place" : "Bhubneswar"
    },
    {
      "Id": 2,
      "Name": "Enu", 
      "Place" : "Nellore"
    },
    {
      "Id": 3,
      "Name": "Srinu",
      "Place" : "Jajpur"
    },
    {
      "Id": 4,
      "Name": "Patty",
      "Place" : "Phulbani"
    },
    {
      "Id": 5,
      "Name": "Manoj",
      "Place" : "Baripada"
    },

  ]
  
}
