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
  @Output('changeTab') changeTab = new EventEmitter();

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
    this.taskManagerServiceService.saveTask(this.newTask).subscribe(
      (response: [{}]) => {
        this.reset();
        this.changeTab.emit("view");
      }
    );
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
