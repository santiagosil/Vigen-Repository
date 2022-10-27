import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import Swal from 'sweetalert2';
import { Poll } from '../api/models/poll';
import { IaService } from '../api/MyServices/ia.service';
import { PollService } from '../api/services/poll.service';


@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {

  public poll:Poll ={
    genero:-1,
    orientacionSexual:-1,
    edad:-1,
    municipio:-1,
    sector:-1,
    nivelEducativo:-1,
    estadoCivil:-1,
    etnia:-1,
    ingresos:-1,
    ocupacion:-1,
    p1:-1,
    p2:-1,
    p3:-1,
    p4:-1,
    p5:-1,
    p6:-1,
    p7:-1,
  }

  public data ={
    genero:"-1",
    orientacionSexual:"-1",
    edad:"-1",
    municipio:"-1",
    sector:"-1",
    nivelEducativo:"-1",
    estadoCivil:"-1",
    etnia:"-1",
    ingresos:"-1",
    ocupacion:"-1",
    p1:"-1",
    p2:"-1",
    p3:"-1",
    p4:"-1",
    p5:"-1",
    p6:"-1",
    p7:"-1",
  }

  constructor(private iaService:IaService, private pollService:PollService) { }

  ngOnInit(): void {
  }

  async sendEncuesta()  {
    this.poll.genero=Number(this.data.genero);
    this.poll.orientacionSexual=Number(this.data.orientacionSexual);
    this.poll.edad=Number(this.data.edad);
    this.poll.municipio=Number(this.data.municipio);
    this.poll.sector=Number(this.data.sector);
    this.poll.nivelEducativo=Number(this.data.nivelEducativo);
    this.poll.estadoCivil=Number(this.data.estadoCivil);
    this.poll.etnia=Number(this.data.etnia);
    this.poll.ingresos=Number(this.data.ingresos);
    this.poll.ocupacion=Number(this.data.ocupacion);
    this.poll.p1=Number(this.data.p1);
    this.poll.p2=Number(this.data.p2);
    this.poll.p3=Number(this.data.p3);
    this.poll.p4=Number(this.data.p4);
    this.poll.p5=Number(this.data.p5);
    this.poll.p6=Number(this.data.p6);
    this.poll.p7=Number(this.data.p7);
    //console.log(this.poll);
    await this.iaService.getPredict(this.poll).subscribe(res=>{
      this.poll=Object.values(res)[1];
      this.poll.date=new Date();
      this.poll.userId=localStorage.getItem("UserId");
      
      this.pollService.postPoll(this.poll).subscribe(res=>{
        Swal.fire({
          icon: 'success',
        position: 'top-end',
        title: 'Encuesta Enviada',
        });
      },err=>{
        console.error(err);
      });
    });
    
  }

}
