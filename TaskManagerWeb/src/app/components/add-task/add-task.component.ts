import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskManagerServiceService } from "../../services/task-manager-service.service";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Input('taskList') taskList;
  @Input('task') task;
  
  newTask = {
    taskName: '',
    parentId: 0,
    priority: 5,
    startDate: '',
    endDate: ''
  }
  constructor(private taskManagerServiceService: TaskManagerServiceService) { }

  ngOnInit() {
    console.log("taskList", this.taskList)
    console.log("task", this.task)
    
  }

  saveTask(){
    console.log(this.newTask);
    this.taskManagerServiceService.saveTask(this.newTask);
  }
  reset(){
    this.newTask = {
      taskName: '',
      parentId: 0,
      priority: 5,
      startDate: '',
      endDate: '',
    }
  } 
}
