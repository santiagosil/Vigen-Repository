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

  /*constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      nomUser: ['', [Validators.required]],
      correoUser: ['', [Validators.required]],
      fechaNa: ['', [Validators.required]],
      telUser: ['', [Validators.required]],
      ocupaUser: ['', [Validators.required]],
      postUser: ['', [Validators.required]],
      ecivlUser: ['', [Validators.required]],
      idUser: ['', [Validators.required]],
    })
  }
  sendLogin(): void {
    this.isCheck = { user: 2 }
  }*/

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


  ngOnInit(): void {
    this.showbienveni();
  }
  showbienveni() {
    Swal.fire({
      title: 'Bienvenido, hacemos uso de GPS para obtener su ubicacion.'+" "+
      '¿Permite que esta pagina acceda a su ubicación?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'YES',
      denyButtonText: `NO`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.usuario.ubication = this.rever.dir.direct;
      }
    })
  }
  showbien() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Se ha enviado un codigo a su correo',
      showConfirmButton: false,
      timer: 1500
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
      console.log(this.rever.dir.direct)
      return;
    } else {
      var random: number;
      random = Math.round(Math.random() * (10000 - 1000) + 1);
      this.usuario.code = random + "";
      this.api.apiUserPost$Json({ body: this.usuario })
        .subscribe(res => {
          this.showbien();
        });
    }
  }
}
