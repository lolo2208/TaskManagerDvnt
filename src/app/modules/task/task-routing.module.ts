import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTaskComponent } from './components/task-panel/list-task/list-task.component';
import { CreateTaskComponent } from './components/task-panel/create-task/create-task.component';
import { ViewTaskComponent } from './components/task-panel/view-task/view-task.component';


const routes: Routes = [
  {path:'', redirectTo:'task-list', pathMatch: 'full'},
  {path:'task-list', component:ListTaskComponent},
  {path: 'task-detail', component:ViewTaskComponent},
  {path: '**', redirectTo:'task-list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
