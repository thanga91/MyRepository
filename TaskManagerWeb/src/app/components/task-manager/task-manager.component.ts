import { Component, OnInit } from '@angular/core';
import { TaskManagerServiceService } from "../../services/task-manager-service.service";

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {

  taskList: any = [
    {
      taskName: 'Task 1',
      parentTaskName: 'Parent task',
      priority: 5,
      startDate: '01/06/19',
      endDate: '07/06/19',
    }
  ];
  initialTaskList: any = []
  search: any = {
    taskName: '',
    parentTaskName: '',
    priorityFrom: 0,
    priorityTo: 0,
    startDate: '',
    endDate: '',
  }

  defaultSearch: any = {
    taskName: '',
    parentTaskName: '',
    priorityFrom: 0,
    priorityTo: 0,
    startDate: '',
    endDate: '',
  }
  task: object = {}

  constructor(private taskManagerServiceService: TaskManagerServiceService) { }

  loadTaskList(){
    let taskListResponse = this.taskManagerServiceService.getAllTask();
    this.taskList = taskListResponse ? taskListResponse : this.taskList;
    this.initialTaskList = taskListResponse ? taskListResponse : this.taskList;
  }

  ngOnInit() {
    this.loadTaskList();   
  }

  editTask(task){
    this.task = task;
  }

  deleteTask(task){
    this.taskManagerServiceService.deleteTask(task.id);
    this.loadTaskList();
  }

  checkTaskNotExist(id, searchedTask){
    let notExist = true
    searchedTask.forEach(existingTask => {
      if(existingTask.id === id){
        notExist = false;
      }
    });
    return notExist
  }

  filterTaskList(){
    if(JSON.stringify(this.search) == JSON.stringify(this.defaultSearch)){
      this.taskList = this.initialTaskList
      return;
    }
    console.log(this.search)
    let searchedTask = [];
    var self = this;
    this.initialTaskList.forEach(task => {
      // Check Task Name
      if(self.search.taskName && task.taskName.toLowerCase().includes(self.search.taskName.toLowerCase())){
        if(self.checkTaskNotExist(task.id, searchedTask)){
          searchedTask.push(task);
        }
      }
      // Check Parent Task Name
      if(self.search.parentTaskName && task.parentTaskName.toLowerCase().includes(self.search.parentTaskName.toLowerCase())){
        if(self.checkTaskNotExist(task.id, searchedTask)){
          searchedTask.push(task);
        }
      }
      // Filter priority between priority from and to
      if((self.search.priorityFrom <= task.priority) && (task.priority <= self.search.priorityTo)){
        if(self.checkTaskNotExist(task.id, searchedTask)){
          searchedTask.push(task);
        }
      }
    });
    this.taskList = searchedTask;
  }
}
