import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Person} from "../app.component";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() public frameworks: Array<string>;
  @Output() addPerson = new EventEmitter<Person>();
  name: string;
  favoriteFramework: string;
  constructor() { }

  ngOnInit(): void {
  }

  add() {
    if (this.name && this.favoriteFramework) {
      this.addPerson.emit({
        name: this.name,
        framework: this.favoriteFramework
      })

      this.name = '';
      this.favoriteFramework = '';
    }
  }

}
