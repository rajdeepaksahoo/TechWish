import { Component } from '@angular/core';
import { FormControl,FormBuilder,FormGroup,Validators } from '@angular/forms'
@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent {
  fg:FormGroup
  disabled:string;
  constructor(fb:FormBuilder){
    this.fg=fb.group({
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      password: ['', [Validators.required],[Validators.minLength(5)]],
      email: ['', [Validators.required],[ Validators.email]],
      mob: ['', [Validators.required],[Validators.minLength(10)],[Validators.maxLength(10)]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      district: ['', [Validators.required]],
    })
    if(this.fg.valid){
      this.disabled="notDisabled"
    }else{
      this.disabled="disabled"
    }
  }
  get fname(){
    return this.fg.get('fname');
  }
  get lname(){
    return this.fg.get('lname');
  }
  get password(){
    return this.fg.get('password');
  }
  get email(){
    return this.fg.get('email');
  }
  get mob(){
    return this.fg.get('mob');
  }
  get city(){
    return this.fg.get('city');
  }
  get state(){
    return this.fg.get('state');
  }
  get district(){
    return this.fg.get('mob');
  }

  users:any={}
  
  save(){
    this.users=Object.assign(this.users,this.fg.value);
    this.fg.reset()
    this.addUser(this.users);
  }
  addUser(users: any){
    let user=[];
    
    if(localStorage.getItem("users")){
      user=JSON.parse(localStorage.getItem("users")||'null');
      user=[users,...user];
    }else{
      user=[users];
    }
    console.log(this.fg.get('fname'))
    localStorage.setItem('users',JSON.stringify(user))
  }
}
