import { ChangeDetectionStrategy, Component, OnChanges, OnInit, SimpleChange } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Data, Router } from '@angular/router';
import { UserService } from '../api/services';
import { User } from '../api/models';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpContext } from '@angular/common/http';
import { InverseService } from '../api/MyServices/inverse.service';
import Swal from 'sweetalert2';
import { ReadVarExpr } from '@angular/compiler';
import { LatLng } from 'leaflet';



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
  isCheck: boolean = false;

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
    ubication: ""
  };

  
  contra = {
    pass: ""
  }

  constructor(private api: UserService, private rever: InverseService, private router: Router) {
  }

  /*get ubication() {
    this.usuario.ubication = this.rever.getSite.geoInv;
    return this.rever.getSite;
  }*/


  ngOnInit() {
    this.rever.geoLocalitation.subscribe(
      res=>{
        this.usuario.ubication = res;
      }
    );
  }

  onUbicationChange(event:LatLng):void{
    this.rever.calculateGeoLocalitation(event);
  }

  acuerdo() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: '¿Acepta los terminos del acuerdo de privacidad?',
      html: " Los creadores de la página Vigen.com le informan sobre su política de privacidad con respecto al manejo y protección de los datos de carácter personal de los usuarios y clientes que puedan ser recabados por la navegación y obtención de datos a través de nuestro sitio web."+
      "En este sentido, garantizamos el cumplimiento de la normativa vigente en materia nacional e internacional del manejo de datos personales y privacidad del usuario. Dejando claro que los datos exigidos al momento de unirse a la pagina son meramente de registro, utilizados para personalizar la página acorde a cada usuario, generación de estadisticas y predicciones, en otras palabras, nuestro algoritmo lo necesita para bridar la mejor experiencia posible. Ninguna parte de la información presentada ni compartida será utilizada para beneficio propio ni intercambio con terceros.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, de acuerdo!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.isCheck = true;
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'NO podra crear un usuario hasta que acepte los terminos del acuerdo de privacidad:',
          'error'
        )
      }
    })
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
  showPrivacidad() {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Verifique el acuerdo de privacidad',
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
      if (this.isCheck) {
        if (this.usuario.password == this.contra.pass) {
          var random: number;
          random = Math.round(Math.random() * (9000) + 1000);
          this.usuario.code = random + "";
          this.api.apiUserPost$Json({ body: this.usuario })
            .subscribe(res => {
              sessionStorage.setItem("UserId", String(this.usuario.identification));
              sessionStorage.setItem("TypeUser", "0");
              sessionStorage.setItem("UserName", String(this.usuario.name));
              this.showbien();
              this.router.navigate(['/token']);
            });
        }
        else {
          this.showContra();
        }
      } else {
        this.showPrivacidad();
      }
    }
  }
}
