import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Data } from '@angular/router';
import {latlong} from '../map/map.component';

@Component({
  selector: 'app-record-org',
  templateUrl: './record-org.component.html',
  styleUrls: ['./record-org.component.css']
})
export class RecordOrgComponent implements OnInit {
  showEmoji: boolean = false;
  title = 'test 1';
  contentEmoji = '';
  listData: Data[] = [];
  form: FormGroup = new FormGroup({});
  isCheck: any;
  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      nomOrg: ['', [Validators.required]],
      nitOrg: ['', [Validators.required]],
      ubiOrg: ['', [Validators.required]],
      telOrg: ['', [Validators.required]],
    })
  }
  sendLogin():void{
    this.isCheck = { user:1 }
    console.error(latlong);
  }
}
