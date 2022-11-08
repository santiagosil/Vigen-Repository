import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { User } from '../api/models';
import { UserService } from '../api/services';
import {FormsModule} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  usuarioForm: User={
    birthdate: '',
    code: '',
    countryCode: '',
    gender:'',
    email: '',
    identification: '',
    maritalStatus: '',
    name: '',
    occupation: '',
    password: '',
    phone: '',
    postalCode: '',
    ubication: '',
    verification: false,
  }

  constructor(private api:UserService) { }

  ngOnInit(): void {
    this.api.apiUserIdGet$Json({id: String(sessionStorage.getItem('UserId'))}).subscribe((res) => {
      this.usuarioForm=res;
    });
  }
  onSubmit(){
    this.api.putUser(String(sessionStorage.getItem('UserId')),this.usuarioForm).subscribe((res)=>{
      Swal.fire({
        icon: 'success',
        position: 'top-end',
        title: 'El Usuario ha sido actualizado',
      });
    },(error)=>{
      console.log("Mal: "+error);
    });
  }
}
