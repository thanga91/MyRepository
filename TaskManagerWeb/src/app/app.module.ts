import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskManagerComponent } from './components/task-manager/task-manager.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { SearchFilter } from './pipes/search-filter';

import { ApiServiceService } from './services/api-service.service'
import { TaskManagerServiceService } from './services/task-manager-service.service'

@NgModule({
  declarations: [
    AppComponent,
    TaskManagerComponent,
    AddTaskComponent,
    SearchFilter
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ApiServiceService,
    TaskManagerServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
