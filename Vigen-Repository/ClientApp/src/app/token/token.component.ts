import { TokenType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { User } from '../api/models';
import { UserService } from '../api/services';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent implements OnInit {

  token = {
    ide: "",
    codigo: ""
  };
  constructor(private api: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  showContra() {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'El código no coincide con el enviado',
      showConfirmButton: false,
      timer: 2000
    })
  }

  send(){
    var id = this.token.ide;
    this.api.apiUserIdGet$Json({id})
          .subscribe((res) => {
            console.log(res);
            if (res.code === this.token.codigo) {
              res.verification = true;
              this.actualizar(id,res);
              this.router.navigate(['/pUser']);
            }else{
              this.showContra();
            }
          });
   }
   actualizar(identificador:string, cuerpo:User){
    var id = identificador;
    var body = cuerpo;
    this.api.apiUserIdPut$Json({id, body})
          .subscribe((actu)=> {
                console.log(actu);
          });
   }
}
