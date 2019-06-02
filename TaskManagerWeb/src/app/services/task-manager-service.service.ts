import { Injectable } from '@angular/core';
import { ApiServiceService } from "./api-service.service";
@Injectable({
  providedIn: 'root'
})
export class TaskManagerServiceService {

  constructor(private apiServiceService: ApiServiceService) { }

  private readonly taskManagerUrl: string = "taskmanager";

  getAllTask(){
    this.apiServiceService.GET(this.taskManagerUrl).subscribe(
      (response: [{}]) => {
        return response;       
      }
    );
  }

  saveTask(task){
    this.apiServiceService.POST(this.taskManagerUrl, task).subscribe(
      (response: [{}]) => {
        return response;       
      }
    );
  }

  deleteTask(id){
    this.apiServiceService.DELETE(this.taskManagerUrl, id).subscribe(
      (response: [{}]) => {
        return response;       
      }
    );
  }
}
