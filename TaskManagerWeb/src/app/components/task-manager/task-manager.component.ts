import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {

  taskList: any = [
    {
      task: 'Task 1',
      parent: 'Parent task',
      priority: 5,
      start: '01/06/19',
      end: '07/06/19',
    }
  ];
  addTaskToggle: boolean = false;
  task: object = {}
  constructor() { }

  ngOnInit() {
  }

  addTask(){
    this.addTaskToggle = !this.addTaskToggle;
  }

  editTask(task){
    this.task = task;
  }

  deleteTask(task){
    this.task = task;
  }

  closeAddTask(closeAddTask){
    this.addTaskToggle = !closeAddTask;
  }

  viewTask(){
    
  }

}
