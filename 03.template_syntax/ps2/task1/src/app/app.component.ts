import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public name = '';
  public familyName = ''

  public hi() {
    alert('Hello' + this.name + ' ' + this.familyName);
  }

  public bye() {
    alert('Bye bye' + this.name + ' ' + this.familyName);
    this.name = '';
    this.familyName = '';
  }
}
