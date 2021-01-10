import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {Person} from "../app.component";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() people: Array<Person>;
  @Output() clearList = new EventEmitter<void>();
  @Output() removeAtIndex = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  clear() {
    this.clearList.emit();
  }

  remove(index) {
    this.removeAtIndex.emit(index);
  }

}
