import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Input('taskList') taskList;
  @Input('task') task;

  @Output('closeAddTask') closeAddTask = new EventEmitter();
  
  newTask = {
    task: "",
    parent: "",
    priority: 1
  }
  constructor() { }

  ngOnInit() {
    console.log("taskList", this.taskList)
    console.log("task", this.task)
    this.newTask = {
      task: "",
      parent: "",
      priority: 1
    }
  }

  saveTask(){
    console.log(this.newTask);
  }
  cancelTaskCreation(){
    this.closeAddTask.emit(true);
  } 
}
