import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../model/Task';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  private taskList: Task[] = [];

  private taskListSubject = new BehaviorSubject<Task[]>(this.taskList);
  private taskSended = new BehaviorSubject<Task | null>(null);
  
  taskData$ = this.taskSended.asObservable();
  taskList$ = this.taskListSubject.asObservable();

  constructor(private http : HttpClient) {
    this.loadTaskList()
  }

  listTasks(): Observable<Task[]> {
    return this.http.get<Task[]>('./assets/data/TaskList.json');
  }

  private loadTaskList() {
    this.listTasks().subscribe(tasks => {
      this.taskList = tasks;
      this.taskListSubject.next(this.taskList);
    });
  }

  sendTaskData(task: Task) {
    this.taskSended.next(task);
  }

  saveTasksList(tasks: Task[]){
    this.taskListSubject.next(tasks)
  }

}
