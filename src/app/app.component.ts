import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Lista zadań';
  happy = false;
  get Footer(): string {
    return '2020 © Lista zadań,All rights reserved.';
  }

  getPerson() {
    return {
      imie: 'Jan',
      nazwisko: 'Nowak',
    };
  }
}
