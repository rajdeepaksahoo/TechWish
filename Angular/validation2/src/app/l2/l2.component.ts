import {Component} from '@angular/core';
import { FormGroup,FormBuilder,Validators, FormControl } from '@angular/forms';

import { ShowDataComponent } from '../show-data/show-data.component';
shows:ShowDataComponent;
@Component({
  selector: 'app-l2',
  templateUrl: './l2.component.html',
  styleUrls: ['./l2.component.css']
})

export class L2Component {
  regform:FormGroup
  

  constructor(private fb: FormBuilder) {
    this.regform = fb.group({
      na: ['', Validators.required],
      pass: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
    });
  }

  get na(){
    return this.regform.get("na") as FormControl
  }

  get pass(){
    return this.regform.get("pass") as FormControl
  }
  get email(){
    return this.regform.get("email") as FormControl
  }
 name:any={}
  show(){
    this.name=Object.assign(this.name,this.regform.value)
    console.log(this.regform.value)
    this.addUser(this.name)
    this.regform.reset();
    window.location.reload()
  }
  addUser(names){
    let users:any=[];
    if(localStorage.getItem("users")){
      users=JSON.parse(localStorage.getItem("users"));
      users=[names,...users]
    }else{
      users=[names]
    }
    localStorage.setItem("users",JSON.stringify(users))
    console.log(this.name)
  }
}
