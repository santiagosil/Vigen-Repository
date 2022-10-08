import { TokenType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
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
              console.log("Admitido");
            }else{
              console.log("No adminitido");
            }
          });
   }
}
