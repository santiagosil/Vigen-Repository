import { Component, OnInit } from '@angular/core';
import { UserService } from '../api/services';
import { User } from '../api/models';
import { HomeComponent } from '../home/home.component';
import {InverseService} from '../api/MyServices/inverse.service'
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  get typeUser():string{
    return sessionStorage.getItem('TypeUser')??'';
  }
  get userName():string{
    return sessionStorage.getItem('UserName')??'';
  }
//eliminar este llamado de no ser necesario
  constructor(private api: UserService, private translate: TranslateService) {}
  changeLang(lang: string){
    this.translate.use(lang);
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

