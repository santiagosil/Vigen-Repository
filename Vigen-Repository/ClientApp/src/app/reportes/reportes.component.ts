import { Component, OnInit } from '@angular/core';
import { jsPDFOptions } from 'jspdf';
import {jsPDF} from  'jspdf';
import { User } from '../api/models';
import autoTable from 'jspdf-autotable';
import {ReportsService} from '../api/services/reports.service';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {
 
  constructor( private report: ReportsService) { }
  ejecutar(){
    var encabezado = ["id","Nombre"];
    var cuerpo = ["1","jeisson"];
    this.report.imprimir(encabezado,cuerpo,"primero",true);
  }
  ngOnInit(): void {
  }
  
}
