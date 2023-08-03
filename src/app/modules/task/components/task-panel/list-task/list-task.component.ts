import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../../services/task.service';
import { Task } from '../../../model/Task';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DatePipe } from '@angular/common';
import { SweetAlertService } from 'src/app/services/sweet-alert.service';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {
  
  suscription:Subscription = new Subscription();
  
  taskList:Task[] = [];
  
  constructor(private taskService:TaskService,
              private router:Router,
              private swalService:SweetAlertService){}

  ngOnInit(): void {
    this.taskService.taskList$.subscribe(tasks => {
      this.taskList = tasks;
    });
  }

  findTask(task:Task) : Task|undefined {
    return this.taskList.find(t => t.id === task.id);
  }

  sendTaskData(task: Task) {
    this.taskService.sendTaskData(task);
    this.router.navigate(["task/task-detail"]);
  }

  inProgressTask(task:Task){
    const inProgressTask = this.findTask(task)
    if(inProgressTask!=null){
      inProgressTask.status = "In Progress"
    }
  }

  completeTask(task:Task){
    const completedTask = this.findTask(task)
    if(completedTask != null){
      completedTask.status = "Completed"
    }
  }

  deleteTask(task:Task){
    const index = this.taskList.findIndex(t => t.id === task.id);
    this.swalService.confirmDelete().then((result) => {
      if (result.isConfirmed) {
        if (index !== -1) {
          this.taskList.splice(index, 1);
        }
        this.taskService.saveTasksList(this.taskList)
      }
    });
    
  }

  handleSubmitTask(task:Task){
    task.id = this.taskList.length+1
    this.taskList.unshift(task)
    this.taskService.saveTasksList(this.taskList)
    this.swalService.showCreateSuccess()
  }

  getTaskStatusClass(task: Task): string {
    switch (task.status) {
      case 'Pending':
        return 'pending-task';
      case 'Completed':
        return 'completed-task';
      case 'In Progress':
        return 'in-progress-task';
      default:
        return '';
    }
  }

}
