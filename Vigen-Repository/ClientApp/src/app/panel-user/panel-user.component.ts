import { Component, OnInit } from '@angular/core';
import { circle } from 'leaflet';

import Swal from 'sweetalert2';
import { NotifyService, UserService } from '../api/services';
import { NotifyComponent } from '../notify/notify.component';
import { Notify } from '../api/models';


@Component({
  selector: 'app-panel-user',
  templateUrl: './panel-user.component.html',
  styleUrls: ['./panel-user.component.css']
})
export class PanelUserComponent implements OnInit {

  public nameUser = '';

  public notif: Notify = {
    description: "",
    organizationTypeId: 0,
    stateId: 0,
    title: "",
    userId: ""
  }

  constructor(private not: NotifyService, private user: UserService) { }

  ngOnInit() {
    this.nameUser = String(sessionStorage.getItem("UserName"));
  }

  cancel() {
    Swal.fire({
      icon: 'info',
      title: 'Ingresa el cuerpo de la alerta: ',
      inputLabel: 'Para mejorar tu experiencia y resolver tus necesidades porfavor ingresa informacion que nos ayude a actuar mas eficientemente',
      input: 'textarea',
      inputPlaceholder: 'Opcional',
      showCancelButton: true,
      confirmButtonText: 'Enviar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        let identi = String(sessionStorage.getItem("UserId"));
        this.notif.description = result.value;
        this.notif.userId = String(sessionStorage.getItem("UserId"));
        this.notif.title = "Alerta";
        this.notif.stateId = 0;
        this.notif.organizationTypeId = 1;
        this.not.postNotify(this.notif).subscribe((res: any) => {
          
        });

      } else if (result.isDenied) {
      }
    })
  }

  formulario(): void {
    this.cancel();
  }

}
