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
  task: object = {}
  constructor() { }

  ngOnInit() {
  }

  editTask(task){
    this.task = task;
  }

  deleteTask(task){
    this.task = task;
  }
  viewTask(){

  }

}
