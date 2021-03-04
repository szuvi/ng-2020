import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public name: string;
  public familyName: string;

  public sayHello(): void {
    alert('Hello ' + this.name + ' ' + this.familyName);
  }

  public sayBye(): void {
    alert('Bye bye ' + this.name + ' ' + this.familyName);
    this.name = '';
    this.familyName = '';
  }

}
