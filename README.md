# Angular Developer PB 2020/21

---
## Lectures
### 1. Angular as a framework
[presentation](https://edu.chrum.it/js_dev_ng/lecture_1.html) | [pdf](https://edu.chrum.it/js_dev_ng/pdfs/Angular_developer.lecture_1.pdf) 

### 2. Typescript for angular developer
[presentation](https://edu.chrum.it/js_dev_ng/lecture_2.html) | [pdf](https://edu.chrum.it/js_dev_ng/pdfs/Angular_developer.lecture_2.pdf)

### 3. Template syntax
[presentation](https://edu.chrum.it/js_dev_ng/lecture_3.html) | [pdf](https://edu.chrum.it/js_dev_ng/pdfs/Angular_developer.lecture_3.pdf)

### 4. Components communication, pipes
[presentation](https://edu.chrum.it/js_dev_ng/lecture_4.html) | [pdf](https://edu.chrum.it/js_dev_ng/pdfs/Angular_developer.lecture_4.pdf) | [example](https://stackblitz.com/edit/angular-components-communication-and-pipe)

### 5. Basic forms, template reference variables
[presentation](https://edu.chrum.it/js_dev_ng/lecture_5.html) | [pdf](https://edu.chrum.it/js_dev_ng/pdfs/Angular_developer.lecture_5.pdf) | [example](https://stackblitz.com/edit/angular-age-verification-form)

---
## Project

### Overview
Two pages
- Intro page with intro text and player form
- Game page

### Intro page specification

- some quick introductory text
- form with two inputs
    - player name
    - player email
- start game button
- upon clicking 'start' we check name and email and notify player whats wrong
- if name and email are fine then store this data and move to the game page

### Game page specification
**basic version**
- there should be a button 'exit game' which will move player to intro page
- there should be nice, personalized welcome message (with player name)
- integrate [ngx-tetris](https://www.npmjs.com/package/ngx-tetris) library
- big indication of the game status (ready, started, paused...)
- we need points counting mechanism (each cleared line counts)
- display current amount of points
- display time spent wile playing  

**extra points version should additionally have:**
- there should be a 'gameplay history' with all actions and each entry should have
    - timestamp
    - action name (player started the game, paused, line cleared...)
- gameplay history should be
    - filterable by event type (ie. show only 'line cleared' events)
    - sortable by timestamp (latest first or oldest first)
       


---     
## Authors

[Chrystian Ruminowicz](http://chrum.it)

## Licence

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
