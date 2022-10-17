import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Organization, User } from '../api/models';
import { OrganizationService, UserService } from '../api/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario = {
    identification: "",
    password: ""
  };
  public conf = {
    org: false,
    user: false
  }
  constructor(private api: UserService, private router: Router, private orga : OrganizationService) {
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
    }else{
      if(this.conf.user){
        this.api.apiUserIdGet$Json({id:this.usuario.identification+""})
        .subscribe(res => {
          if(res.identification == this.usuario.identification && res.password == this.usuario.password ){
           this.router.navigate(['/pUser']);
          }else{
            this.showModal();
          }
        });
      }
      if(this.conf.org){
        if(this.conf.org){
          this.orga.apiOrganizationIdGet$Json({id: this.usuario.identification+""})
            .subscribe(res => {
              if(res.nit == this.usuario.identification){
               this.router.navigate(['/home']);
              }else{
                this.showModal();
              }
            });
        }
      }
    }
  }
}

