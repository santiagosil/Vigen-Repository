import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { User } from '../api/models';
import { UserService } from '../api/services';
import {FormsModule} from '@angular/forms';
import Swal from 'sweetalert2';
import { LatLng } from 'leaflet';
import { InverseService } from '../api/MyServices/inverse.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  formUser!: FormGroup;
  InitForm():FormGroup{
    return this.fb.group({
      identification: ['',Validators.required],
      name: ['',Validators.required],
      gender:['',Validators.required],
      birthdate: ['',Validators.required],
      maritalStatus: ['',Validators.required],
      email: ['',Validators.required],
      occupation: ['',Validators.required],
      countryCode: ['',Validators.required],
      phone: ['',Validators.required],
      postalCode: ['',Validators.required],
      ubication: ['',Validators.required],
      code:[''],
      verification:[false],
      geoInv:[''],
      passwordHide: ['',Validators.required],
      password: [''],
      newPassword: [''],
      confirmPassword: [''],
    });
  }
  

  constructor(private api:UserService, private fb:FormBuilder, private reverseService:InverseService) { }

  ngOnInit(): void {
    this.formUser=this.InitForm();
    this.api.apiUserIdGet$Json({id: String(sessionStorage.getItem('UserId'))}).subscribe((res) => {
      this.formUser.setValue({
        identification: res.identification,
        name: res.name,
        gender:res.gender,
        birthdate: res.birthdate,
        maritalStatus: res.maritalStatus,
        email: res.email,
        occupation: res.occupation,
        countryCode: res.countryCode,
        phone:res.phone,
        postalCode:res.postalCode,
        ubication: res.ubication,
        passwordHide: res.password,
        code:res.code,
        verification: res.verification,
        geoInv: this.formUser.value['geoInv'],
        password: '',
        newPassword:'',
        confirmPassword: ''
      });
    });
    this.reverseService.geoLocalitation.subscribe(
      res=>{
        this.formUser.patchValue({'geoInv': res});
      }
    );
  }

  getUbication(event:LatLng){
    this.formUser.patchValue({'ubication': event.lat+', '+event.lng});
    this.reverseService.calculateGeoLocalitation(event);
  }

  onSubmit(){
    if (!this.formUser.valid) {
      Swal.fire({
        icon: 'error',
        title: 'Faltan algunos campos por completar'
      });
      return;
    }
    if (this.formUser.value['password'] || this.formUser.value['newPassword'] || this.formUser.value['confirmPassword']) {

      if (!this.formUser.value['password'] || !this.formUser.value['newPassword'] || !this.formUser.value['confirmPassword']){
        Swal.fire({
          icon:'error',
          title:'Si desea cambiar la contraseña debe completar los campos de contraseña anterior, contraseña nueva y confirmar contraseña nueva'
        });
        return;
      }

      if (this.formUser.value['password'] != this.formUser.value['passwordHide']) {
        Swal.fire({
          icon: 'error',
          title: 'La contraseña anterior es inválida',
        });
        return;
      }
      
      if (this.formUser.value['newPassword'] != this.formUser.value['confirmPassword']) {
        Swal.fire({
          icon: 'error',
          title: 'Las contraseñas no conciden'
        });
        return;
      }
      this.formUser.patchValue({ 'passwordHide': this.formUser.value['newPassword'] });
    }
    let userObject:User = {
      identification:this.formUser.value['identification'],
        name:this.formUser.value['name'],
        gender:this.formUser.value['gender'],
        birthdate:this.formUser.value['birthdate'],
        maritalStatus: this.formUser.value['maritalStatus'],
        email:this.formUser.value['email'],
        occupation: this.formUser.value['occupation'],
        countryCode: this.formUser.value['countryCode'],
        phone:this.formUser.value['phone'],
        postalCode:this.formUser.value['postalCode'],
        ubication:this.formUser.value['ubication'],
        password:this.formUser.value['passwordHide'],
        code:this.formUser.value['code'],
        verification: this.formUser.value['verification']
    };

    this.api.putUser(String(sessionStorage.getItem('UserId')),userObject).subscribe((res)=>{
      sessionStorage.setItem('UserName',userObject.name??'');
      Swal.fire({
        icon: 'success',
        position: 'top-end',
        title: 'El Usuario ha sido actualizado',
      });
    });
  }
}
