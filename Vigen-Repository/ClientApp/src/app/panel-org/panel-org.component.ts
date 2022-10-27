import { Component, OnInit } from '@angular/core';
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

}
