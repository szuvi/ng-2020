import {Component} from '@angular/core';

enum STATES {
  INTRO,
  GAME
}

export interface Player {
  name: string;
  email: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public states = STATES;
  public appState = STATES.INTRO;

  public player: Player;


  public onFormSubmit(playerData) {
    this.player = playerData;
    this.appState = STATES.GAME;
  }

  public onGameClosed() {
    this.appState = STATES.INTRO;
  }
}
