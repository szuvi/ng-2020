import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  maxAllowed = 16;
  current = 0;
  color: string;

  add() {
    if (this.current >= this.maxAllowed) {
      alert('The room is full');
    } else {
      this.current++;
      this._updateColors();
    }
  }

  remove() {
    this.current--;
    this._updateColors();
  }

  private _updateColors() {
    const seatsLeft = this.maxAllowed - this.current;

    if (seatsLeft > 3) {
      this.color = 'green';

    } else if (seatsLeft > 0) {
      this.color = 'orange';
    } else {
      this.color = 'red';
    }
  }
}
