import { Component, OnInit } from '@angular/core';
import { UserService } from '../api/services';
import { User } from '../api/models';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpContext } from '@angular/common/http';


@Component({
  selector: 'app-record-user',
  templateUrl: './record-user.component.html',
  styleUrls: ['./record-user.component.css']
})
export class RecordUserComponent implements OnInit {

  public usuario: User = {
    identification: "",
    name: "",
    email: "",
    birthdate: "",
    countryCode: "",
    phone: "",
    occupation: "",
    postalCode: "",
    maritalStatus: "",
    ubication: ""
  };


  constructor(private api: UserService) {

  }

  ngOnInit(): void {

  }
  public send() {
    if (this.usuario.email === "" || this.usuario.name === "" || this.usuario.identification === ""
    || this.usuario.birthdate === "" ||  this.usuario.phone === ""
    || this.usuario.occupation === "" || this.usuario.maritalStatus === "") 
    {
      console.log("Faltan algunos campos obligatorios por llenar");
      return;
    }else{
      this.api.apiUserPost$Json({ body: this.usuario })
        .subscribe(res => {
          console.log(res);
        });
    }
  }
}
