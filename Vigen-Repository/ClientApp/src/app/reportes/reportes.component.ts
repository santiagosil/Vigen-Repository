import { Component, OnInit } from '@angular/core';
import { jsPDFOptions } from 'jspdf';
import {jsPDF} from  'jspdf';
import { User } from '../api/models';
import autoTable from 'jspdf-autotable';
import {ReporteService} from '../api/services/reporte.service';
import {ReportsService} from '../api/MyServices/report.service'

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {
 
  constructor( private report: ReporteService, private reports:ReportsService) { }
  ejecutar(){
    this.report.apiReportePruebaGet$Json().subscribe(res => {
      this.reports.imprimir("primero",res);
    })
  }
  ngOnInit(): void {
  }
  
}
