import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AppComponent } from './app.component';
import {ROUTE_NAMES} from "./const/route.names.const.js'";


const routes: Routes = [
 
  {path:'',component:HomeComponent},
  {path:ROUTE_NAMES.HOME.substr(1),component:HomeComponent}
  
];
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule { }

