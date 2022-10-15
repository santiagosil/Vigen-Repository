import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { User } from '../api/models';
import { UserService } from '../api/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario: User = {
    identification: "",
    password: "0"
  };
  public conf = {
    confirmacion: false
  }
  constructor(private api: UserService, private router: Router) {
  }
  ngOnInit(): void {
  }

  public get() {
    if (this.usuario.password === "" || this.usuario.identification === "") {
      console.log("Faltan algunos campos obligatorios por llenar");
    }else {
      this.api.apiUserIdGet$Json({id:this.usuario.identification+""})
        .subscribe(res => {
          if(res.identification == this.usuario.identification && res.password == this.usuario.password){
           this.router.navigate(['/pUser']);
          }else{
            console.log("no");
          }
        });
    }
  }
}

