import { Injectable } from '@angular/core';
import { NotifyService } from '../services';
import {PollService} from '../services/poll.service';

@Injectable({
  providedIn: 'root'
})
export class EstadisticasService {

  private pollStadistics:any={};
  private notifyStadistics:any={};
  get getNotifyStadistics():any{
    return this.notifyStadistics;
  }
  get getPollStadistics():any{
    return this.pollStadistics;
  }

  constructor(private pollService:PollService, private notifyService:NotifyService) {}

  stadisticsOfPoll(){
    this.pollService.getPolls().subscribe(res=>{
      this.pollStadistics={};
      res.forEach((object,i)=>{
        object.date=null;
        object.id=null;
        var keys:string[]=Object.keys(object);
        Object.values(object).forEach((name,j)=>{
          if(!this.pollStadistics[keys[j]]){
            this.pollStadistics[keys[j]]={};
          }
          if(!this.pollStadistics[keys[j]][name]){
            this.pollStadistics[keys[j]][name]=1;
          }else{
            this.pollStadistics[keys[j]][name]+=1;
          }
        });
      });
    });
  }

  stadisticsNotifies(){
    this.notifyStadistics={};
    let labels:string[]=[];
    labels=["Activa","En Progreso", "Atendida"];
    this.notifyService.getNotifies().subscribe(res=>{
      res.forEach((x)=>{
        if(!this.notifyStadistics['stateId']){
          this.notifyStadistics['stateId']={"name":labels[Number(x.stateId)],"value":0};
        }
          this.notifyStadistics['stateId']["value"]+=1;
      })
    });
    console.log(this.notifyStadistics);
  }

}
