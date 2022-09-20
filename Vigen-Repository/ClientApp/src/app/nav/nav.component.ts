import { Component, OnInit } from '@angular/core';
import { UsersService } from '../api/services';
import { User } from '../api/models';
import { empty } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public user: User;

  constructor(private api: UsersService) {
    this.user={};
    this.api.apiUsersIdGet$Json({id:'123456789'}).subscribe(res=>{
      this.user=res;
    });
  }
  
  ngOnInit(): void {
  }

}

