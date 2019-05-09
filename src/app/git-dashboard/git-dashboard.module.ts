import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { SearchComponent } from './search/search.component';
import { GitDashboardComponent } from './git-dashboard.component';
import { GitApiService } from './git-api.service';

@NgModule({
  declarations: [
    SearchComponent,
    GitDashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    GitDashboardComponent
  ],
  providers: [GitApiService],
})
export class GitDashboardModule { }
