import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', loadChildren: ()=>import('./modules/login/login.module').then(m=>m.LoginModule)},
  {path: 'task', loadChildren: ()=>import('./modules/task/task.module').then(m=>m.TaskModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
