import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent {

  fg=new FormGroup({
    name:new FormControl(""),
    email:new FormControl(""),
    mob:new FormControl("")
  })
  get name(){
    return this.fg.get('name');
  }
  get email(){
    return this.fg.get('email');
  }
  get mob(){
    return this.fg.get('mob');
  }
  addUser(data: any){
    console.log(data);
  }
  arr:any={};
  constructor(private http:HttpClient){
    this.OnInit()
  }
  OnInit(){
    // fetch("https://jsonplaceholder.typicode.com/users")
    // .then((resopnse)=>resopnse.json())
    // .then((data)=>{
    //   this.arr=data;
    //   console.log(this.arr)})
      this.arr= [(this.http.get("https://jsonplaceholder.typicode.com/users"))];
            console.log(this.http.get("https://jsonplaceholder.typicode.com/users"))
  }
  
  
  add(){
    this.arr.push({
      id:this.arr.length+1,
      name:this.name?.value,
      username:this.name?.value,
      email:this.email?.value,
      phone:this.mob?.value
    })
    this.fg.reset();
  }
  dis=""
  del(id:any){
    var ar=[this.arr]
    ar.forEach((element,index)=>{
      this.dis=""
      if(element.id==id.id){
        console.log(id+"   "+element.id)
        delete this.arr[index]
        this.dis="dis"
      }
    })
  }
}
