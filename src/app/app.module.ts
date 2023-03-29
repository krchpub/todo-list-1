import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import localePl from '@angular/common/locales/pl';
import localeBn from '@angular/common/locales/bn';
import {LOCALE_ID, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localePl);
registerLocaleData(localeBn);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [
    {provide: LOCALE_ID, useValue: 'pl-PL'}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
