import { Component, Injectable, OnInit } from '@angular/core';
import { jsPDFOptions } from 'jspdf';
import {jsPDF} from  'jspdf';
import { User } from '../../api/models';
import autoTable from 'jspdf-autotable';

@Injectable({
  providedIn: 'root'
})
export class ReportsService{
  
  constructor() { }
  /*ejecutar(){
    var encabezado = ["id","Nombre"];
    var cuerpo = ["1","jeisson"];
    this.imprimir(encabezado,cuerpo,"primero",true);
  }*/
  
  imprimir(encabezado: string[], cuerpo:Array<any>, titulo:string, guardar?:boolean){
    //var titles;
    //titles = Object.keys(res); 
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: 'letter'
    });
    doc.text(titulo, doc.internal.pageSize.width /2, 25, {align: 'center'});
    autoTable(doc,{
      head:  [encabezado],
      body:
          cuerpo
      ,
    })
    if(guardar) {
      const hoy = new Date();
      doc.save(hoy.getDate() + hoy.getMonth() + hoy.getFullYear() + hoy.getTime() + '.pdf')
    } else {
      
    }
  }
}
