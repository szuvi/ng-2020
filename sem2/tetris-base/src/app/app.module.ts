import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { GameComponent } from './game/game.component';
import {FormsModule} from '@angular/forms';
import {TetrisCoreModule} from 'ngx-tetris';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TetrisCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
