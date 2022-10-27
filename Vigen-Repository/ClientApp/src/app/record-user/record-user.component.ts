import { ChangeDetectionStrategy, Component, OnChanges, OnInit, SimpleChange } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Data, Router } from '@angular/router';
import { UserService } from '../api/services';
import { User } from '../api/models';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpContext } from '@angular/common/http';
import { InverseService } from '../api/MyServices/inverse.service';
import Swal from 'sweetalert2';
import { ReadVarExpr } from '@angular/compiler';



@Component({
  selector: 'app-record-user',  
  templateUrl: './record-user.component.html',
  styleUrls: ['./record-user.component.css']
})
export class RecordUserComponent implements OnInit {
  

  
  showEmoji: boolean = false;
  title = 'test 1';
  contentEmoji = '';
  listData: Data[] = [];
  form: FormGroup = new FormGroup({});
  isCheck: any;

  public usuario: User = {
    identification: "",
    name: "",
    password: "",
    code: "0",
    email: "",
    birthdate: "",
    countryCode: "",
    phone: "",
    occupation: "",
    postalCode: "",
    maritalStatus: "",
    ubication:""
  };
  contra={
    pass:""
  }

  constructor(private api: UserService, private rever : InverseService, private router: Router) {
  }
   
  get ubication(){
    this.usuario.ubication=this.rever.getSite.geoInv;
    return this.rever.getSite;
  }


  ngOnInit() {
      
  }
  
  showbien() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Se ha enviado un codigo a su correo',
      showConfirmButton: false,
      timer: 2000
    })
  }
  showModal() {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Faltan algunos campos obligatorios por llenar',
      showConfirmButton: false,
      timer: 2000
    })
  }
  showContra() {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Las contraseñas no coinciden',
      showConfirmButton: false,
      timer: 2000
    })
  }
  public send() {
    if (this.usuario.email === "" || this.usuario.name === "" || this.usuario.identification === ""
      || this.usuario.birthdate === "" || this.usuario.phone === ""
      || this.usuario.occupation === "" || this.usuario.maritalStatus === "") {
      this.showModal();
    } else {
      if(this.usuario.password==this.contra.pass){
        var random: number;
        random = Math.round(Math.random() * (9000) + 1000);
        this.usuario.code = random + "";
        this.api.apiUserPost$Json({ body: this.usuario })
          .subscribe(res => {
            this.showbien();
            this.router.navigate(['/token']);
          });
      }
      else{
        this.showContra();
      } 
    }
  }
}
