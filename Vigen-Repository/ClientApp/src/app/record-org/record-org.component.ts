import { Component, OnInit } from '@angular/core';
import { OrganizationService, UserService } from '../api/services';
import { Organization, User } from '../api/models';

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

  public organization: Organization = {
    name: "",
    nit: "",
    tel: ""
  };

  constructor(private api:OrganizationService) { }

  ngOnInit(): void {
  }
  public send(){
    if (this.organization.name === "" || this.organization.nit === ""
    || this.organization.tel === "") 
    {
      console.log("Faltan algunos campos obligatorios por llenar");
      return;
    }else{
    this.api.apiOrganizationPost$Json({body: this.organization})
   .subscribe(res=>{
      console.log(res);
     });
    }
  }
}
