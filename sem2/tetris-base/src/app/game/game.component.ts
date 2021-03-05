import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Player} from '../app.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  @Input() playerData: Player;
  @Output() close = new EventEmitter();
  public points = 0;


  constructor() { }

  ngOnInit(): void {
  }

  onLineCleared() {
    this.points++;
  }

  closeGame() {
    this.close.emit();
  }

}
