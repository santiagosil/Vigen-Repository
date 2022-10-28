import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Notify } from '../api/models';
import { NotifyService } from '../api/services';

@Component({
  selector: 'app-panel-org',
  templateUrl: './panel-org.component.html',
  styleUrls: ['./panel-org.component.css']
})
export class PanelOrgComponent implements OnInit {

  activeNotifies:Notify[]=[];
  inProgressNotifies:Notify[]=[];


  constructor(private apiNotify:NotifyService) { }

  ngOnInit(): void {
    this.apiNotify.getNotifies().subscribe(res=>{
      this.activeNotifies=res.filter(x=>x.stateId==0);
      this.inProgressNotifies=res.filter(x=>x.stateId==1);
      console.log(this.activeNotifies);
      console.log(this.inProgressNotifies);
    });
  }
  deleteNotify(notify:Notify){
    this.apiNotify.deleteNotify(Number(notify.id)).subscribe(
      res=>{
      Swal.fire({
        icon: 'success',
        title: 'Se ha eliminado la notificacion: '+(res.title),
      });
      this.ngOnInit();
    },
    err=>{
      console.log(err);
    });
  }
  toInProgressNotify(notify:Notify){
    notify.stateId=1;
    this.apiNotify.putNotify(Number(notify.id), notify).subscribe(res=>{
      Swal.fire({
        icon: 'success',
        title: 'La notificacion: '+res.title+" esta en progreso",
      });
      this.ngOnInit();
    },err=>{
      console.log(err);
    });
  }

  toFinishNotify(notify:Notify){
    notify.stateId=2;
    this.apiNotify.putNotify(Number(notify.id), notify).subscribe(res=>{
      Swal.fire({
        icon: 'success',
        title: 'Se ha atendido la notificacion: '+res.title,
      });
      this.ngOnInit();
    },err=>{
      console.log(err);
    });
  }
}
