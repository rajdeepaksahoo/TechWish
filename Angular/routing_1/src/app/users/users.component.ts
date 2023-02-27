import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  arr: { id: string; name: string; } | undefined;
  constructor(private route:ActivatedRoute){}
  ngOnInit(){
    this.arr={
      id:this.route.snapshot.params['id'],
      name:this.route.snapshot.params['name']
    }
    
  }
}
