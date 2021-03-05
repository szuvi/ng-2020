import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Player} from '../app.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Output() submit = new EventEmitter<Player>();

  constructor() { }

  ngOnInit(): void {

  }

  submitForm(form: FormGroup) {
    this.submit.emit(form.value);
  }

}
