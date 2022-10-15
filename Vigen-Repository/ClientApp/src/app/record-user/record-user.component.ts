import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Data } from '@angular/router';
import { UserService } from '../api/services';
import { User } from '../api/models';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpContext } from '@angular/common/http';
import { InverseService } from '../api/MyServices/inverse.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-record-user',
  templateUrl: './record-user.component.html',
  styleUrls: ['./record-user.component.css']
})
export class RecordUserComponent implements OnInit {
  showEmoji: boolean = false;
  title = 'test 1';
  contentEmoji = '';
  listData: Data[] = [];
  form: FormGroup = new FormGroup({});
  isCheck: any;

  public usuario: User = {
    identification: "",
    name: "",
    password: "0",
    code: "0",
    email: "",
    birthdate: "",
    countryCode: "",
    phone: "",
    occupation: "",
    postalCode: "",
    maritalStatus: "",
    ubication: ""
  };


  constructor(private api: UserService, private rever : InverseService) {
   
  }
   
  ngOnInit() {
    setTimeout(() => {
      this.data()
     }, 1000);
  }

  data(){
    this.usuario.ubication = this.rever.dir.direct;
  }
  
  showbien() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Se ha enviado un codigo a su correo',
      showConfirmButton: false,
      timer: 2000
    })
  }
  showModal() {
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Faltan algunos campos obligatorios por llenar',
      showConfirmButton: false,
      timer: 1500
    })
  }
  public send() {
    if (this.usuario.email === "" || this.usuario.name === "" || this.usuario.identification === ""
      || this.usuario.birthdate === "" || this.usuario.phone === ""
      || this.usuario.occupation === "" || this.usuario.maritalStatus === "") {
      this.showModal();
      return;
    } else {
      var random: number;
      random = Math.round(Math.random() * (9000) + 1000);
      this.usuario.code = random + "";
      this.api.apiUserPost$Json({ body: this.usuario })
        .subscribe(res => {
          this.showbien();
        });
    }
  }
}
