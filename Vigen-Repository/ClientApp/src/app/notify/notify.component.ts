import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as SignalR from '@microsoft/signalr';
import { ApiConfiguration } from '../api/api-configuration';
import { BaseService } from '../api/base-service';
import {LoginComponent} from 'src/app/login/login.component';
import Swal from 'sweetalert2';
import { EstadisticasService} from '../api/MyServices/estadisticas.service';

 
@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.css']
})
export class NotifyComponent extends BaseService implements OnInit {  


  constructor(
    config: ApiConfiguration,
    http: HttpClient,
    //private login:LoginComponent
  ) {
    super(config, http);
  }

  ngOnInit(): void {
    const connection = new SignalR.HubConnectionBuilder()
    .configureLogging(SignalR.LogLevel.Critical)
    .withUrl(this.rootUrl+"/notifyhub")
    .build();

    connection.start().then(() => {
      //console.log("SignalR Connected!");
    }).catch(err=>{
      console.error(err.toString());
    });

    connection.on("recibeNotify", notify=>{
      var not:String[]=Object.values(notify);
      console.log(localStorage.getItem("TypeUser") ?? '0');
      if((localStorage.getItem("TypeUser")) != '0'){
        this.showAlert(not);
      }
    });
  }

  showAlert(notify:String[]) {
    Swal.fire({
      position: 'top-end',
      title: notify[2],
      html: "Identificaction: "+notify[1]+
      '<br>Direccion: ',
      icon: 'warning',
      showCancelButton: false,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Close',
      timer: 15000,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Clear',
          'You are close the notification',
          'success'
        )
        IdleDeadline;
      }
    })
}
}
