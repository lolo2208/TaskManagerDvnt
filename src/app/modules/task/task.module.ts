import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskRoutingModule } from './task-routing.module';
import { CreateTaskComponent } from './components/task-panel/create-task/create-task.component';
import { ListTaskComponent } from './components/task-panel/list-task/list-task.component';
import { LayoutModule } from 'src/layout/layout.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewTaskComponent } from './components/task-panel/view-task/view-task.component';



@NgModule({
  declarations: [
    CreateTaskComponent,
    ListTaskComponent,
    ViewTaskComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    LayoutModule,
    ReactiveFormsModule
  ]
})
export class TaskModule { }
