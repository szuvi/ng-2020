import { Component } from '@angular/core';

enum WarningColor {
  RED = 'red',
  ORANGE = 'orange',
  GREEN = 'green'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // names = ['chrystian', 'emil', 'paulina', 'pawel'];

  public maxAllowed = 6;
  public current = 0;
  public color: WarningColor = WarningColor.GREEN;

  public addOne(): void {
    if (this.current >= this.maxAllowed) {
      alert('The room is full');

    } else {
      this.current++;
      this._updateColors();
    }
  }

  public removeOne(): void {
    if (this.current > 0) {
      this.current--;
      this._updateColors();
    }
  }

  private _updateColors(): void {
    const seatsLeft = this.maxAllowed - this.current;
    if (seatsLeft > 3) {
      this.color = WarningColor.GREEN;
    } else if (seatsLeft > 0) {
      this.color = WarningColor.ORANGE;

    } else {
      this.color = WarningColor.RED;
    }
  }

}
