import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import localePl from '@angular/common/locales/pl';
import {LOCALE_ID, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localePl);


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [
    {provide: LOCALE_ID, useValue: 'pl-PL'}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
