import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Data } from '@angular/router';
import {latlong} from '../map/map.component';
import { OrganizationService, UserService } from '../api/services';
import { Organization, User } from '../api/models';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { HttpContext } from '@angular/common/http';

@Component({
  selector: 'app-record-org',
  templateUrl: './record-org.component.html',
  styleUrls: ['./record-org.component.css']
})
export class RecordOrgComponent implements OnInit {
  showEmoji: boolean = false;
  title = 'test 1';
  contentEmoji = '';
  listData: Data[] = [];
  form: FormGroup = new FormGroup({});
  isCheck: any;
  constructor(private fb : FormBuilder) { }

  public organization: Organization = {
    name: "",
    nit: "",
    tel: ""
  };

  constructor(private api:OrganizationService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      nomOrg: ['', [Validators.required]],
      nitOrg: ['', [Validators.required]],
      ubiOrg: ['', [Validators.required]],
      telOrg: ['', [Validators.required]],
    })
  }
  sendLogin():void{
    this.isCheck = { user:1 }
    console.error(latlong);
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
