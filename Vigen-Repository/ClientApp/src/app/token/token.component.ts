import { TokenType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { User } from '../api/models';
import { UserService } from '../api/services';

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
  constructor(private api: UserService) { }

  ngOnInit(): void {
  }
  send(){
    var id = this.token.ide;
    this.api.apiUserIdGet$Json({id})
          .subscribe((res) => {
            console.log(res);
            if (res.code === this.token.codigo) {
              res.verification = true;
              this.actualizar(id,res);
            }else{
              console.log("No adminitido");
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
