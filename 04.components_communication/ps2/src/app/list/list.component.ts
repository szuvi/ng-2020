import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {Person} from "../app.component";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() people: Array<Person>;
  @Input() frameworks: Array<string>;

  @Output() remove = new EventEmitter<number>();
  @Output() clearList = new EventEmitter<void>();
  @Output() edit = new EventEmitter<number>();

  public frameworkFilter = 'all';

  constructor() { }

  ngOnInit(): void {
  }

  public delete(index) {
    this.remove.emit(index);
  }

  public clear() {
    this.clearList.emit();
  }


}
