import { Component } from '@angular/core';
import {  FormControl,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-pp',
  templateUrl: './pp.component.html',
  styleUrls: ['./pp.component.less']
})
export class PpComponent {
  loginForm=new FormGroup(
    {
      usn:new FormControl("",Validators.required),
      pass:new FormControl("")
    }
  )

  get usn(){
    return this.loginForm.get('usn');
  }

  logInUser(){
    console.log(this.loginForm.value+"jyhvb") ;
    
  }
}
