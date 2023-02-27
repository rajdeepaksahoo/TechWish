import { Component } from '@angular/core';
import { FormControl, FormGroup,Validators} from '@angular/forms';
@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent {
  validation = new FormGroup(
    {
      name : new FormControl("",Validators.required),
      mob: new FormControl("",[Validators.minLength(10),Validators.maxLength(10)]),
      mail: new FormControl("",[Validators.email,Validators.required]),
      pass : new FormControl("",[Validators.required,Validators.minLength(5)])
    }
  );

  get name(){
    return this.validation.get("name")
  }
  get mob(){
    return this.validation.get("mob")
  }
  get mail(){
    return this.validation.get("mail")
  }
  get pass(){
    return this.validation.get("pass")
  }

} 
