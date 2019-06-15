import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskManagerServiceService } from "../../services/task-manager-service.service";
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Input('taskList') taskList;  
  @Output('changeTab') changeTab = new EventEmitter();
  @Input() action: string = 'Add';

  @Input() set task(value) {
    this.reset();
    if(value) {
      this.newTask = value;
    }    
  }

  get showResetButton() {
    return this.action === 'Add';
  }

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
    if(this.action === 'Add') {
      this.taskManagerServiceService.saveTask(this.newTask).subscribe(
        (response: [{}]) => {
          this.reset();
          this.changeTab.emit("view");
        }
      );
    } else {
      this.taskManagerServiceService.editTask(this.newTask).subscribe(
        (response: [{}]) => {
          this.reset();
          this.changeTab.emit("view");
        }
      );
    }
   
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
