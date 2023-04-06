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

removeTask(i:number){
  this.tasks.splice(i,1);
}

clearTasks(){
  
  this.tasks =[];
}
addTasks(mname:string,mdate:string){
  const task: Task =
    {
      name:mname,
      deadline:mdate,
      done:false}
  
  this.tasks.push(task);
}

}
