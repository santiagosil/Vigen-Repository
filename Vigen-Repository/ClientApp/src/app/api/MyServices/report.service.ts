import { Component, Injectable, OnInit } from '@angular/core';
import { jsPDFOptions } from 'jspdf';
import { jsPDF } from 'jspdf';
import { User } from '../../api/models';
import autoTable from 'jspdf-autotable';
import { JsonResult } from '../models/json-result';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor() { }

  imprimir(titulo: string, cuerpo: JsonResult) {

    var results=Object.values(cuerpo);

    var bodyContenct:string[][]=[];

    for(var x in results){
      bodyContenct.push(Object.values(results[x]));
    }
    console.log(bodyContenct);

    const doc = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: 'letter'
    });
    doc.text(titulo, doc.internal.pageSize.width / 2, 25, { align: 'center' });
    autoTable(doc, {
      head: [Object.keys(results[0])],
      body:  bodyContenct
    })
    const hoy = new Date();
    doc.save(hoy.getDate() + hoy.getMonth() + hoy.getFullYear() + hoy.getTime() + '.pdf')

  }
}
