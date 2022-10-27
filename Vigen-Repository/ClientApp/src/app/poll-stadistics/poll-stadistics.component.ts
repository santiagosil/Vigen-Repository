import { Component, OnInit } from '@angular/core';
import { EstadisticasService } from '../api/MyServices/estadisticas.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-poll-stadistics',
  templateUrl: './poll-stadistics.component.html',
  styleUrls: ['./poll-stadistics.component.css']
})
export class PollStadisticsComponent implements OnInit {

  get single(): any {
    let x: any = this.stadistics.getPollStadistics;
    var object: any = {};
    for (let z in x) {
      object[z] = [];
      let labels: string[] = [];
      switch (z) {
        case 'genero':
          labels = ['Hombre', 'Mujer', 'No Binario'];
          break;
        case 'orientacionSexual':
          labels = ['Hetero', 'Homosexual', 'Bisexual', 'Pansexual', 'Asexual'];
          break;
        case 'municipio':
          labels=['Bogota', 'Facatativa', 'Madrid', 'Mosquera', 'Funza', 'Otro'];
          break;
        case 'sector':
          labels=['Urbano','Rural'];
          break;
        case 'nivelEducativo':
          labels=['Basica primaria', 'Basica Secundaria', 'Media', 'Tecnica, Tecnologica', 'Pregrado','Postgrado'];
          break;
        case 'estadoCivil':
          labels=['Soltero', 'Casado', 'Viudo','Union Libre'];
          break;
          case 'etnia':
          labels=['Ninguno','Comunidades Negras-Afrocolombianas', 'Pueblos Indígenas','Pueblo Rrom o Gitano','Raizales y Palenqueras- NARP', 'Otro'];
          break;
          case 'ingresos':
          labels=['No','Si'];
          break;
          case 'ocupacion':
          labels=['Desempleado', 'Estudiante', 'Empleado/a particular (Sector privado)', 'Empleado/a del Gobierno (Sector público)',
          'Empleado/a doméstico/a','Empleador/a', 'Trabajador/a por cuenta propia (Independiente)', 'Trabajador/a familiar sin remuneración'];
          break;
          case 'p7':
            labels=['Ninguna', 'Violencia Infantil', 'Violencia intrafamiliar',
              'Violencia Adulto Mayor', 'Violencia de Género'];
            break;
        default:
          labels=['No','Si'];
          break;
      }
      for (let y in x[z]) {
        object[z].push({ "name": z!='edad'?labels[Number(y)]:Number(y), "value": x[z][y] })
      }
    }
    return object;
  }

  constructor(private stadistics: EstadisticasService) {
  }

  ngOnInit(): void {
    this.stadistics.stadisticsOfPoll();
  }

}
