import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Poll } from '../api/models/poll';
import { IaService } from '../api/MyServices/ia.service';
import { PollService } from '../api/services/poll.service';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {

  gen: string = "";
  generos: string[] = ["Hombre", "Mujer", "No binario"];
  ori: string = "";
  orientaciones: string[] = ["Heterosexual",
    "Homosexual",
    "Bisexual",
    "Asexual",
    "Pan sexual"];
  ciudad: string = "";
  ciudades: string[] = ["Bogotá",
    "Madrid",
    "Mosquera",
    "Facatativá",
    "Funza"];
  otra: string = "";
  sector: string = "";
  sectores: string[] = ["Rural",
    "Urbano"];
  nivel: string = "";
  niveles: string[] = ["Básica primaria",
    "Básica secundaria",
    "Media",
    "Técnica y/o tecnológica",
    "Pregrado (Universidad)",
    "Postgrado u otros"];
  estado: string = "";
  estados: string[] = ["Soltero/a",
    "Casado/a",
    "Viudo/a",
    "Unión libre"];
  etnia: string = "";
  etnias: string[] = ["Comunidades Negras-Afrocolombianas",
    "Pueblos Indígenas",
    "Pueblo Rom o Gitano",
    "Raizales y Palenqueras- NARP",
    "Ninguno",];
  otraEtnia: string = "";
  ingreso: string = "";
  ingresos: string[] = ["Si", "No"];
  ocupacion: string = "";
  ocupaciones: string[] = ["Empleado/a particular (Sector privado)",
    "Empleado/a del gobierno (Sector público)",
    "Empleado Domestico",
    "Trabajador/a por cuenta propia (Independiente)",
    "Empleador/a",
    "Trabajador/a familiar sin remuneración",
    "Estudiante",
    "Desempleado"];
  pared: string = "";
  paredes: string[] = ["Si", "No"];
  golpe: string = "";
  golpes: string[] = ["Si", "No"];
  presion: string = "";
  presiones: string[] = ["Si", "No"];
  destruido: string = "";
  destruidos: string[] = ["Si", "No"];
  empujado: string = "";
  empujones: string[] = ["Si", "No"];
  agrecion: string = "";
  agreciones: string[] = ["Si", "No"];
  violencia: string = "";
  violencias: string[] = ["Violencia intrafamiliar",
    "Violencia Adulto Mayor",
    "Violencia infantil",
    "Violencia de género",
    "No he sufrido ni visto ninguna de las anteriores"];

  public poll: Poll = {
    genero: 0,
    orientacionSexual: 0,
    edad: 0,
    municipio: 0,
    sector: 0,
    nivelEducativo: 0,
    estadoCivil: 0,
    etnia: 0,
    ingresos: 0,
    ocupacion: 0,
    p1: 0,
    p2: 0,
    p3: 0,
    p4: 0,
    p5: 0,
    p6: 0,
    p7: 0,
  }

  constructor(private iaService: IaService, private pollService: PollService) { }

  ngOnInit(): void {
  }

  async sendEncuesta() {
    //genero
    if (this.gen == "Hombre") {
      this.poll.genero = 0;
    } else if (this.gen == "Mujer") {
      this.poll.genero = 1;
    } else if (this.gen == "No binario") {
      this.poll.genero = 2;
    }
    //orientacion
    if (this.ori == "Heterosexual") {
      this.poll.genero = 0
    } else if (this.ori == "Homosexual") {
      this.poll.genero = 1
    } else if (this.ori == "Bisexual") {
      this.poll.genero = 2
    } else if (this.ori == "Asexual") {
      this.poll.genero = 4
    } else if (this.ori == "Pan sexual") {
      this.poll.genero = 3
    }
    //ciudad
    if (this.ciudad == "Bogotá") {
      this.poll.municipio = 0;
    } else if (this.ciudad == "Madrid") {
      this.poll.municipio = 2;
    } else if (this.ciudad == "Mosquera") {
      this.poll.municipio = 3;
    } else if (this.ciudad == "Facatativá") {
      this.poll.municipio = 1;
    } else if (this.ciudad == "Funza") {
      this.poll.municipio = 4;
    } else {
      this.poll.municipio = 5;
    }
    //sector
    if (this.sector == "Rural") {
      this.poll.sector == 1;
    } else {
      this.poll.sector == 0;
    }

    //Nivel educativo
    if (this.nivel == "Básica primaria") {
      this.poll.nivelEducativo = 0;
    } else if (this.nivel == "Básica secundaria") {
      this.poll.nivelEducativo = 1;
    } else if (this.nivel == "Media") {
      this.poll.nivelEducativo = 2;
    } else if (this.nivel == "Técnica y/o tecnológica") {
      this.poll.nivelEducativo = 3;
    } else if (this.nivel == "Pregrado (Universidad)") {
      this.poll.nivelEducativo = 4;
    } else if (this.nivel == "Postgrado u otros") {
      this.poll.nivelEducativo = 5;
    }

    //estado civil
    if (this.estado == "Soltero/a") {
      this.poll.estadoCivil = 0;
    } else if (this.estado == "Casado/a") {
      this.poll.estadoCivil = 1;
    } else if (this.estado == "Viudo/a") {
      this.poll.estadoCivil = 2;
    } else if (this.estado == "Unión libre") {
      this.poll.estadoCivil = 3;
    }

    //etnia
    if (this.etnia == "Comunidades Negras-Afrocolombianas") {
      this.poll.etnia = 1;
    } else if (this.etnia == "Pueblos Indígenas") {
      this.poll.etnia = 2;
    } else if (this.etnia == "Pueblo Rom o Gitano") {
      this.poll.etnia = 3;
    } else if (this.etnia == "Raizales y Palenqueras- NARP") {
      this.poll.etnia = 4;
    } else if (this.etnia == "Ninguno") {
      this.poll.etnia = 0;
    } else {
      this.poll.etnia = 5;
    }

    //ingresos
    if (this.ingreso == "Si") {
      this.poll.ingresos = 1;
    } else {
      this.poll.ingresos = 0;
    }

    //ocupacion
    if (this.ocupacion == "Empleado/a particular (Sector privado)") {
      this.poll.ocupacion = 0;
    } else if (this.ocupacion == "Empleado/a del gobierno (Sector público)") {
      this.poll.ocupacion = 1;
    } else if (this.ocupacion == "Empleado Domestico") {
      this.poll.ocupacion = 2;
    } else if (this.ocupacion == "Trabajador/a por cuenta propia (Independiente)") {
      this.poll.ocupacion = 3;
    } else if (this.ocupacion == "Empleador/a") {
      this.poll.ocupacion = 4;
    } else if (this.ocupacion == "Trabajador/a familiar sin remuneración") {
      this.poll.ocupacion = 5;
    } else if (this.ocupacion == "Estudiante") {
      this.poll.ocupacion = 6;
    } else if (this.ocupacion == "Desempleado") {
      this.poll.ocupacion = 7;
    }
    //preguntas
    //1
    if (this.pared == "Si") {
      this.poll.p1 = 1;
    } else {
      this.poll.p1 = 0;
    }
    //2
    if (this.golpe == "Si") {
      this.poll.p2 = 1;
    } else {
      this.poll.p2 = 0;
    }
    //3
    if (this.presion == "Si") {
      this.poll.p3 = 1;
    } else {
      this.poll.p3 = 0;
    }
    //4
    if (this.destruido == "Si") {
      this.poll.p4 = 1;
    } else {
      this.poll.p4 = 0;
    }
    //5
    if (this.empujado == "Si") {
      this.poll.p5 = 1;
    } else {
      this.poll.p5 = 0;
    }
    //6
    if (this.agrecion == "Si") {
      this.poll.p6 = 1;
    } else {
      this.poll.p6 = 0;
    }
    //7
    if (this.violencia == "Violencia intrafamiliar") {
      this.poll.p7 = 2;
    } else if(this.violencia == "Violencia Adulto Mayor") {
      this.poll.p7 = 3;
    }else if(this.violencia == "Violencia infantil"){
      this.poll.p7 = 1;
    }else if(this.violencia == "Violencia de género"){
      this.poll.p7 = 4;
    }else if(this.violencia == "No he sufrido ni visto ninguna de las anteriores"){
      this.poll.p7 = 0;
    }

    await this.iaService.getPredict(this.poll).subscribe(res=>{
      this.pollService.postPoll(this.poll);
      this.poll=Object.values(res)[1];
      this.poll.date=new Date();
      this.poll.userId=localStorage.getItem("UserId");
     console.log(this.poll);
    });
  }

}
