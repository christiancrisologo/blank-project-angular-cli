import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component'; 
import { NavComponent } from './components/nav/nav.component'; 

import { AppService } from './services/app.service';
import { AlertModule } from 'ng2-bootstrap'; 
import {FlashMessagesModule } from "angular2-flash-messages";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, 
    NavComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AlertModule.forRoot(), 
    FlashMessagesModule
  ],
  providers: [AppService  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
