import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Data } from '@angular/router';
@Component({
  selector: 'app-record-user',
  templateUrl: './record-user.component.html',
  styleUrls: ['./record-user.component.css']
})
export class RecordUserComponent implements OnInit {
  showEmoji: boolean = false;
  title = 'test 1';
  contentEmoji = '';
  listData: Data[] = [];
  form: FormGroup = new FormGroup({});
  isCheck: any;


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      nomUser: ['', [Validators.required]],
      correoUser: ['', [Validators.required]],
      fechaNa: ['', [Validators.required]],
      telUser: ['', [Validators.required]],
      ocupaUser: ['', [Validators.required]],
      postUser: ['', [Validators.required]],
      ecivlUser: ['', [Validators.required]],
      idUser: ['', [Validators.required]],
    })
  }
  sendLogin(): void {
    this.isCheck = { user: 2 }
  }
}
