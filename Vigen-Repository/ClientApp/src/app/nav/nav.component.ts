import { Component, OnInit } from '@angular/core';
import { UserService } from '../api/services';
import { User } from '../api/models';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public user: User;

  constructor(private api: UserService) {
    this.user={};
    this.api.apiUserIdGet$Json({id:'123456789'}).subscribe(res=>{
      this.user=res;
      console.log(res);
    });
  }
  
  ngOnInit(): void {
  }

}

