import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  maxAllowed = 16;
  name: string;
  peopleInTheRoom: Array<string> = [];
  color: string;

  add() {
    if (this.peopleInTheRoom.length >= this.maxAllowed) {
      alert('The room is full');

    } else {
      this.peopleInTheRoom.push(this.name);
      this.name = '';
      this._updateColors();
    }
  }

  remove(index) {
    this.peopleInTheRoom.splice(index, 1);
    this._updateColors();
  }

  clear() {
    this.peopleInTheRoom = [];
    this._updateColors();
  }

  private _updateColors() {
    const seatsLeft = this.maxAllowed - this.peopleInTheRoom.length;

    if (seatsLeft > 3) {
      this.color = 'green';

    } else if (seatsLeft > 0) {
      this.color = 'orange';
    } else {
      this.color = 'red';
    }
  }
}
