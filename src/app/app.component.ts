import { Component, Inject, LOCALE_ID } from '@angular/core';
import {Task} from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
conf: {[key:string]:string | Date} = null;

tasks: Task[] = [];


numb= 9.890328590;
lista= ['cholera','dupa','kurcze','psia krew'];

  translate = {
    zima: 'winter',
    wiosna: 'spring',
    lato: 'summer'
  };

  get Footer(): string {
    return '© Lista zadań,All rights reserved.';
  };

  getDate(): Date {
    return new Date();
  };

  getPerson() {
    return {
      imie: 'Jan',
      nazwisko: 'Nowak',
    };
  };





constructor(@Inject(LOCALE_ID) private localeId: string){
  setTimeout(() => {
    this.conf = {
      title: 'Lista zadań',
      happy: false,
      date: new Date(),
    };
  }, 1500);

  console.log('Locale:', this.localeId);
}


showAlert(){
  alert("Uwaga, uwaga! Nie klikaj na ten przycisk!");
}

clearTasks(){
  this.tasks =[];
}
addTasks(){
  this.tasks =[
    {
      name:'Silownia',
      deadline:'2020-01-20',
      done:false},
    {
      name:'Nauka',
      deadline:'2020-01-22',
      done:true},
    {
      name:'Wyjazd do Turcji',
      deadline:'2020-02-20',
      done:false},
  ];
}
}
