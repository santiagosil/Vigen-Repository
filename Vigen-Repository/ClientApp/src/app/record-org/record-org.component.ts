import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Data, Router } from '@angular/router';
import {latlong} from '../map/map.component';
import { OrganizationService } from '../api/services';
import { Organization, User } from '../api/models';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { HttpContext } from '@angular/common/http';
import Swal from 'sweetalert2';
import { InverseService } from '../api/MyServices/inverse.service';

@Component({
  selector: 'app-record-org',
  templateUrl: './record-org.component.html',
  styleUrls: ['./record-org.component.css']
})
export class RecordOrgComponent implements OnInit {

  showContra() {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Las contraseñas no coinciden',
      showConfirmButton: false,
      timer: 2000
    })
  }
  showModal() {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Faltan algunos campos obligatorios por llenar',
      showConfirmButton: false,
      timer: 2000
    })
  }

  public organization: Organization = {
    name: "",
    nit: "",
    tel: "",
    password: "",
  };
  contra={
    pass : ""
  }



  constructor(
    private api:OrganizationService,
    private reverse:InverseService,
    private router:Router,
    ) { }

  ngOnInit(): void {
  }
  public send(){
    console.log("send");
    if (this.organization.name === "" || this.organization.nit === ""
    || this.organization.tel === "") 
    {
      this.showModal();
    }else{
      if(this.organization.password==this.contra.pass){
        this.organization.phone='miPhone';
        this.organization.organizationTypeId=1;
        this.api.postOrganization(this.organization)
        .subscribe(res=>{
          sessionStorage.setItem("NitRegister", String(this.organization.nit));
          this.router.navigate(['/sites']);
     });
      }
      else{
        this.showContra();
      }
    
    }
  }
}
