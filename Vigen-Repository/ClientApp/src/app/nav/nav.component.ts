import { Component, OnInit } from '@angular/core';
import { UserService } from '../api/services';
import { User } from '../api/models';
import { empty } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public user: User;

  constructor(private api: UserService) {
    this.user={};
    this.api.apiUserGet$Json({id:0}).subscribe(res=>{
      this.user=res;
    });
  }
  ngOnInit(): void {
  }

}
