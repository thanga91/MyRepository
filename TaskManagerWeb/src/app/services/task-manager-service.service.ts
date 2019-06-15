import { Injectable } from '@angular/core';
import { ApiServiceService } from "./api-service.service";
@Injectable({
  providedIn: 'root'
})
export class TaskManagerServiceService {

  constructor(private apiServiceService: ApiServiceService) { }

  private readonly taskManagerUrl: string = "taskmanager";

  getAllTask(){
    return this.apiServiceService.GET(this.taskManagerUrl);
  }

  saveTask(task){
    return this.apiServiceService.POST(this.taskManagerUrl, task);
  }

  editTask(task){
    return this.apiServiceService.PUT(this.taskManagerUrl, task);
  }

  deleteTask(id){
    return this.apiServiceService.DELETE(this.taskManagerUrl, id);
  }
}
