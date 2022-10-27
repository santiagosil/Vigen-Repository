import { Component, OnInit } from '@angular/core';
import { EstadisticasService } from '../api/MyServices/estadisticas.service';

@Component({
  selector: 'app-notify-stadistics',
  templateUrl: './notify-stadistics.component.html',
  styleUrls: ['./notify-stadistics.component.css']
})
export class NotifyStadisticsComponent implements OnInit {

  get single():any{
    var x =Object.values(this.stadistics.getNotifyStadistics)
    //x.push({"name":2,"value":2});
    return x;
  }

  constructor(private stadistics: EstadisticasService) { }

  ngOnInit(): void {
    this.stadistics.stadisticsNotifies();
  }

}
