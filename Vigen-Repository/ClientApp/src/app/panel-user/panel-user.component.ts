import { Component, OnInit } from '@angular/core';
import { circle } from 'leaflet';

import Swal from 'sweetalert2';
import {NotifyService, UserService } from '../api/services';
import { NotifyComponent } from '../notify/notify.component';
import { Notify } from '../api/models';


@Component({
  selector: 'app-panel-user',
  templateUrl: './panel-user.component.html',
  styleUrls: ['./panel-user.component.css']
})
export class PanelUserComponent implements OnInit {

  

  public notif: Notify = {
    description: "",
    organizationTypeId: 0,
    stateId: 0,
    title : "",
    userId : ""
  }  

  constructor(private not: NotifyService, private user: UserService) { }

  ngOnInit(){
  }

  cancel(){
    Swal.fire({
      icon: 'info',
      title: '¿Enviar Alerta?',
      showCancelButton: true,
      confirmButtonText: 'Enviar',
      cancelButtonText: 'Cancelar',
      timer:10000,
    }).then((result) => {
      if (result.isConfirmed) {
        var identi = String(localStorage.getItem("UserId"));
        
          this.notif.description = String(localStorage.getItem("UserName"));
          this.notif.userId = String(localStorage.getItem("UserId"));
          this.notif.title = "Help Me";
          this.notif.stateId = 1;
          this.notif.organizationTypeId=1;
        
        console.log(this.notif);
        this.not.postNotify(this.notif).subscribe((res: any) =>{
           console.log(res);
        });
        
      } else if (result.isDenied) {
      }
    })
  }

  formulario(): void{
        this.cancel();
  }

}
