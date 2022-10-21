import { Component, OnInit } from '@angular/core';
import { UserService } from '../api/services';
import { User } from '../api/models';
import { HomeComponent } from '../home/home.component';
import {InverseService} from '../api/MyServices/inverse.service'
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import {faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import {faFlagUsa} from '@fortawesome/free-solid-svg-icons';
import {faFlag} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  faGlobeAmericas = faGlobeAmericas;
  faFlagUsa = faFlagUsa;
  faFlag = faFlag;

  public user: User;
//eliminar este llamado de no ser necesario
  constructor(private api: UserService) {
    this.user={};
    this.api.apiUserIdGet$Json({id:'123456789'}).subscribe(res=>{
      this.user=res;
    });

  }
  
  ngOnInit(): void {
  }
  toHome(){
    document.getElementById("up")?.scrollIntoView({behavior:"smooth"});
  }
  toAbout(){
    document.getElementById("about")?.scrollIntoView({behavior:"smooth"});
  }
  toHelp(){
    document.getElementById("help")?.scrollIntoView({behavior:"smooth"});
  }

}

