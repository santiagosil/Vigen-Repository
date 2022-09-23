import { Component, OnInit } from '@angular/core';
import { OganizationsService, UsersService } from '../api/services';
import { Oganization, User } from '../api/models';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { empty } from 'rxjs';
import { HttpContext } from '@angular/common/http';

@Component({
  selector: 'app-record-org',
  templateUrl: './record-org.component.html',
  styleUrls: ['./record-org.component.css']
})
export class RecordOrgComponent implements OnInit {

  public organization: Oganization = {
    name: "",
    nit: "",
    phone: "",
    range: 0,
    tel: "",
    ubication: ""
  };

  constructor(private api:OganizationsService) { }

  ngOnInit(): void {
  }
  public send(){
    if (this.organization.name === "" || this.organization.nit === ""
    || this.organization.tel === "" || this.organization.ubication === "") 
    {
      console.log("Faltan algunos campos obligatorios por llenar");
      return;
    }else{
    this.api.apiOganizationsPost$Json({body: this.organization})
   .subscribe(res=>{
      console.log(res);
     });
    }
  }
}
