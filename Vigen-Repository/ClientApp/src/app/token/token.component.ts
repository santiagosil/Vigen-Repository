import { TokenType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../api/services';
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

  constructor(private api: UsersService) { }

  ngOnInit(): void {
  }
 send(){
  var id = this.token.ide;
  console.log(this.token);
  this.api.apiUsersIdGet$Json({id})
        .subscribe(res => {
          if (res.ubication === this.token.codigo) {
            console.log("Admitido");
          }else{
            console.log("No adminitido");
          }
        });
 }
}
