import { Component, OnInit} from '@angular/core';
import { UsersService } from '../api/services';
import { User } from '../api/models';

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


  constructor(private api: UsersService) {

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
      console.log(this.usuario);
     var random:number;
      random = Math.round(Math.random() * (10000 - 1) + 1);
      this.usuario.ubication = random+"";
      this.api.apiUsersPost$Json({ body: this.usuario })
        .subscribe(res => {
          console.log(res+""+random+"");
        });
    }
  }
}
