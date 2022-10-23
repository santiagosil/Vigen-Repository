import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Organization, User } from '../api/models';
import { SingletonUser } from '../api/MyServices/singletonUser';
import { OrganizationService, UserService } from '../api/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public usuario = {
    identification: "",
    password: "",
    type: "", //0=usuario, 0!=typoOrg,
    name:""
  };
  typeUser(lang: string) {
    this.usuario.type = lang;
  }
  constructor(private api: UserService, private router: Router, private orga: OrganizationService) {
  }
  ngOnInit(): void {
  }
  showModal() {
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Usuario o contraseña incorrectos',
      showConfirmButton: false,
      timer: 1500
    })
  }
  public get() {
    if (this.usuario.password === "" || this.usuario.identification === "") {
      console.log("Faltan algunos campos obligatorios por llenar");
      console.log(this.usuario.type);
    } else {
      if (this.usuario.type == "0") {
        this.api.apiUserIdGet$Json({ id: this.usuario.identification + "" })
          .subscribe(res => {
            if (res.password == this.usuario.password) {
              this.usuario.name = String(res.name);
              SingletonUser.getInstance().identification=this.usuario.identification;
              SingletonUser.getInstance().type=this.usuario.type;
              SingletonUser.getInstance().type=this.usuario.name;
              this.router.navigate(['/pUser']);
            } else {
              this.showModal();
            }
          });
      }
      if (this.usuario.type == "org") {
        this.orga.apiOrganizationIdGet$Json({ id: this.usuario.identification + "" })
          .subscribe(res => {
            if (res.password == this.usuario.password) {
              this.usuario.type=Object.values(res)[5];
              SingletonUser.getInstance().identification=this.usuario.identification;
              SingletonUser.getInstance().type=this.usuario.type;
              this.router.navigate(['/home']);
            } else {
              this.showModal();
            }
          });
      }
    }
  }
}

