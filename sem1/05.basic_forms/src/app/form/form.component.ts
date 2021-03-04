import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Person} from "../app.component";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() public frameworks: Array<string>;
  @Output() addPerson = new EventEmitter<Person>();
  @Input() name: string;
  @Input() favoriteFramework: string;
  constructor() { }

  ngOnInit(): void {
  }

  add(form: FormGroup) {
    const name = form.value.name;
    const framework = form.value.favoriteFramework;
    if (this._validate(name, framework)) {
      this._addPerson(name, framework);
      form.reset();
    }
  }

  private _validate(name, framework): boolean {
    return name && framework;
  }

  private _addPerson(name, framework) {
    this.addPerson.emit({
      name: name,
      framework: framework
    })
  }



}
