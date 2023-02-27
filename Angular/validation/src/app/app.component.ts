import { Component } from '@angular/core';
import {FormControl,FormGroup,Validators } from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'validation';
  loginForm = new FormGroup(
    {
      un : new FormControl("",[Validators.required,Validators.minLength(5),Validators.maxLength(10)]),
      pass : new FormControl("",[Validators.required,Validators.email]),
      mob : new FormControl("",[Validators.minLength(10),Validators.maxLength(10),Validators.required])
    }
  )
    get un(){
      console.log( this.loginForm.get("un"))
      return this.loginForm.get("un")
    }

    get pass(){
      return this.loginForm.get("pass")
    }

    get mob(){
      return this.loginForm.get("mob")
    }
}
