import { Component, OnInit } from '@angular/core';
import { Poll } from '../api/models/poll';
import { IaService } from '../api/MyServices/ia.service';
import { SingletonUser } from '../api/MyServices/singletonUser';
import { PollService } from '../api/services/poll.service';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {

  public poll:Poll ={
    genero:1,
    orientacionSexual:0,
    edad:21,
    municipio:0,
    sector:0,
    nivelEducativo:4,
    estadoCivil:0,
    etnia:5,
    ingresos:0,
    ocupacion:1,
    p1:0,
    p2:1,
    p3:0,
    p4:0,
    p5:1,
    p6:1,
    p7:-1,
  }

  constructor(private iaService:IaService, private pollService:PollService) { }

  ngOnInit(): void {
  }

  async sendEncuesta()  {
    await this.iaService.getPredict(this.poll).subscribe(res=>{
      this.poll=Object.values(res)[1];
      this.poll.date=new Date();
      this.poll.userId="123456789";
      
      this.pollService.postPoll(this.poll).subscribe(res=>{
        console.log(res);
      },err=>{
        console.error(err);
      });
    });
    
    
  }

}
