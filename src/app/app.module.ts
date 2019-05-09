//Core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Custom Modules
import { GitDashboardModule } from './git-dashboard/git-dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Custom Modules
    GitDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
