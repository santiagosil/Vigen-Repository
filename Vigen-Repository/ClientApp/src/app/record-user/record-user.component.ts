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

  formUser!: FormGroup;
  passwordNoMatch: boolean = false;
  initForm(): FormGroup {
    return this.fb.group({
      identification: ['', Validators.required],
      name: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      birthdate: ['', Validators.required],
      countryCode: ['', Validators.required],
      phone: ['', Validators.required],
      geoInv: '',
      occupation: ['', Validators.required],
      postalCode: ['', Validators.required],
      maritalStatus: ['', Validators.required],
      ubication: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      acuerdo: [false, Validators.requiredTrue]
    });
  }

  public usuario!: User;

  constructor(private fb: FormBuilder, private api: UserService, private rever: InverseService, private router: Router) {
  }

  ngOnInit() {
    this.formUser = this.initForm();
    this.rever.geoLocalitation.subscribe(
      res => {
        this.formUser.patchValue({ 'geoInv': res });
      }
    );
  }

  onUbicationChange(event: LatLng): void {
    this.rever.calculateGeoLocalitation(event);
    this.formUser.patchValue({ 'ubication': String(event) });
  }

  acuerdo() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons.fire({
      title: '¿Acepta los terminos del acuerdo de privacidad?',
      html: " Los creadores de la página Vigen.com le informan sobre su política de privacidad con respecto al manejo y protección de los datos de carácter personal de los usuarios y clientes que puedan ser recabados por la navegación y obtención de datos a través de nuestro sitio web." +
        "En este sentido, garantizamos el cumplimiento de la normativa vigente en materia nacional e internacional del manejo de datos personales y privacidad del usuario. Dejando claro que los datos exigidos al momento de unirse a la pagina son meramente de registro, utilizados para personalizar la página acorde a cada usuario, generación de estadisticas y predicciones, en otras palabras, nuestro algoritmo lo necesita para bridar la mejor experiencia posible. Ninguna parte de la información presentada ni compartida será utilizada para beneficio propio ni intercambio con terceros.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, de acuerdo!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.formUser.patchValue({ 'acuerdo': true });
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'NO podra crear un usuario hasta que acepte los terminos del acuerdo de privacidad:',
          'error'
        );
      }
    });
  }

  showbien() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Se ha enviado un codigo a su correo',
      showConfirmButton: false,
      timer: 2000
    });
  }
  showModal() {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Faltan algunos campos obligatorios por llenar',
      showConfirmButton: false,
      timer: 2000
    });
  }
  showContra() {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Las contraseñas no coinciden',
      showConfirmButton: false,
      timer: 2000
    });
  }
  showPrivacidad() {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Verifique el acuerdo de privacidad',
      showConfirmButton: false,
      timer: 2000
    });
  }
  public send() {
    
    if (!Boolean(this.formUser.value['acuerdo'])) {
      this.showPrivacidad();
      return;
    }
    if (!this.formUser.valid) {
      this.showModal();
      return;
    }
    if (this.formUser.value['password'] != this.formUser.value['confirmPassword']) {
      this.passwordNoMatch = true;
      this.showContra();
      return;
    }
    let random: number;
    random = Math.round(Math.random() * (9000) + 1000);
    this.usuario = {
      identification: this.formUser.value['identification'],
      name: this.formUser.value['name'],
      email: this.formUser.value['email'],
      birthdate: this.formUser.value['birthdate'],
      countryCode: this.formUser.value['countryCode'],
      phone: this.formUser.value['phone'],
      occupation: this.formUser.value['occupation'],
      postalCode: this.formUser.value['postalCode'],
      maritalStatus: this.formUser.value['maritalStatus'],
      ubication: this.formUser.value['ubication'],
      password: this.formUser.value['password'],
      gender: this.formUser.value['gender'],
      code: String(random),
      verification: false
    }
    
    this.api.apiUserPost$Json({ body: this.usuario })
      .subscribe(res => {
        sessionStorage.setItem("UserId", String(this.usuario.identification));
        sessionStorage.setItem("TypeUser", "0");
        sessionStorage.setItem("UserName", String(this.usuario.name));
        this.showbien();
        this.router.navigate(['/token']);
      });
  }
}
