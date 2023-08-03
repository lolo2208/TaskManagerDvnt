import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from '../../../model/Task';
import { formatDate } from '@angular/common';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  
  @Output() taskSubmitted: EventEmitter<any> = new EventEmitter();

  fgTask!: FormGroup;

  statusList:string[] = ['Pending', 'In Progress', 'Completed']

  constructor(private fb:FormBuilder){
  }

  ngOnInit(): void {

    this.fgTask = this.fb.group({
      'title' : ['', Validators.required],
      'description' : ['', Validators.max(100)],
      'status': ['', Validators.required]
    })

  }

  submitTask(){
    let data = this.fgTask.getRawValue();
    const currentDate = new Date()
  
    const newTask: Task = {
      id: 0,
      title: data.title,
      description: data.description,
      dateReg: currentDate,
      status: data.status
    };

    this.taskSubmitted.emit(newTask);
    this.fgTask.reset();
  }

  

}
