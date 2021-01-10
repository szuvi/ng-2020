import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-formularz',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() public frameworks: Array<string>;
  @Output() newPerson = new EventEmitter<{ name: string, framework: string }>();

  name: string;
  favoriteFramework: string;

  constructor() { }

  ngOnInit(): void {
  }

  add() {
    if (this.name && this.favoriteFramework) {
      this.newPerson.emit({
        name: this.name,
        framework: this.favoriteFramework
      })


      this.name = '';
      this.favoriteFramework = '';
    }
  }

}
