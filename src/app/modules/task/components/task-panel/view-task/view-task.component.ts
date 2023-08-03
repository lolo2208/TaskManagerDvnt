import { Component, OnDestroy, OnInit } from '@angular/core';
import { Task } from '../../../model/Task';
import { TaskService } from '../../../services/task.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit, OnDestroy {
  
  suscription:Subscription = new Subscription();
  selectedTask: Task | null = null;

  cardColor:string = ""

  constructor(private taskService:TaskService,
              private router:Router){}

  ngOnInit(): void {
    this.suscription = this.taskService.taskData$.subscribe(task => {
      this.selectedTask = task;
      if(this.selectedTask){
        this.cardColor = this.getStatusColorClass(this.selectedTask)
      }
    });

  }

  backToList(){
    this.router.navigate(['task/task-list'])
  }

  ngOnDestroy(): void {
    this.suscription.unsubscribe()
  }

  
  getStatusColorClass(task: Task): string{

    switch(task.status){
      case "Completed" : 
        return "green-card";
      case "In Progress" : 
        return "orange-card";
      default : 
        return "";
    }

  }

}
