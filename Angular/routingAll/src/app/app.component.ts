import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routingAll';
  constructor(private router:Router ){

  }
  reload(){
    // this.router.navigateByUrl("/users");
    this.router.navigate(["/users"]);
  }
}
