import { Component, OnInit } from '@angular/core';
import { Oganization } from '../api/models';
import { OganizationsService } from '../api/services';

@Component({
  selector: 'app-record-org',
  templateUrl: './record-org.component.html',
  styleUrls: ['./record-org.component.css']
})
export class RecordOrgComponent implements OnInit {

  public organizacion: Oganization = {
    name: "",
    nit:"",
    phone:"",
    range: 0,
    tel:"",
    ubication:""
  }

  constructor(private api: OganizationsService) { }

  ngOnInit(): void {
  }
  public send() {
    if (this.organizacion.name === "" || this.organizacion.nit === ""
    || this.organizacion.phone === "") 
    {
      console.log("Faltan algunos campos obligatorios por llenar");
      return;
    }else{
      this.api.apiOganizationsPost$Json ({ body: this.organizacion })
        .subscribe(res => {
          console.log(res+"");
        });
    }
  }
}
