import { Component } from '@angular/core';

interface Person {
  name: string;
  framework: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  maxAllowed = 16;
  favoriteFramework: string;
  name: string;
  peopleInTheRoom: Array<Person> = [];
  color: string;

  public frameworks: Array<string> = [
    'Angular',
    'React',
    'Vue'
  ]

  add() {
    if (this.peopleInTheRoom.length >= this.maxAllowed) {
      alert('The room is full');

    } else {
      this.peopleInTheRoom.push({
        name: this.name,
        framework: this.favoriteFramework
      });
      this.name = '';
      this.favoriteFramework = '';
      this._updateColors();
    }
  }

  remove(index) {
    this.peopleInTheRoom.splice(index, 1);
    this._updateColors();
  }

  edit(index) {
    const person = this.peopleInTheRoom[index];
    this.name = person.name;
    this.favoriteFramework = person.framework;

    this.remove(index);
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
