import { Component, Injectable, OnInit } from '@angular/core';
import { jsPDFOptions } from 'jspdf';
import { jsPDF } from 'jspdf';
import { User } from '../../api/models';
import autoTable from 'jspdf-autotable';
import { JsonResult } from '../models/json-result';
import { TranslateService } from '@ngx-translate/core';
import {AppComponent} from '../../app.component'
import { Observable } from 'rxjs';
import { ThisReceiver } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ReportsService{

  constructor(public translate:TranslateService) { }

  imprimir(titulo: string, cuerpo: JsonResult) {

    var results=Object.values(cuerpo);
    var encabezado:string[]=[];
    Object.keys(results[0]).map((x)=>{
      this.translate.get("REPORTS."+x.toUpperCase()).subscribe(res=>{
        encabezado.push(res);
      });
    });
    var bodyContenct:string[][]=[];

    for(var x in results){
      bodyContenct.push(Object.values(results[x]));
    }
    
    const doc = new jsPDF({
      orientation: "landscape",
      unit: "px",
      format: 'letter'
    });
    doc.text(titulo, doc.internal.pageSize.width / 2, 25, { align: 'center' });
    autoTable(doc, {
      head: [encabezado],
      body:  bodyContenct
    })
    const hoy = new Date();
    doc.save(hoy.getDate() + hoy.getMonth() + hoy.getFullYear() + hoy.getTime() + '.pdf')

  }
}
