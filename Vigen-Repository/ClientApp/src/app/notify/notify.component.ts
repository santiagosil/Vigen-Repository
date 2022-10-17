import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as SignalR from '@microsoft/signalr';
import { ApiConfiguration } from '../api/api-configuration';
import { BaseService } from '../api/base-service';


@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.css']
})
export class NotifyComponent extends BaseService implements OnInit {

  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  ngOnInit(): void {
    const connection = new SignalR.HubConnectionBuilder()
    .configureLogging(SignalR.LogLevel.Critical)
    .withUrl(this.rootUrl+"/notifyhub")
    .build();

    connection.start().then(() => {
      console.log("SignalR Connected!");
    }).catch(err=>{
      console.error(err.toString());
    });

    connection.on("recibeNotify", notify=>{
      //aqui llega la notificacion
      console.log(notify);
    });
  }

}
