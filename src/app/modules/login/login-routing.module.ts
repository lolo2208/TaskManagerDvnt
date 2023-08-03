import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CredentialComponent } from './components/credential/credential.component';

const routes: Routes = [
  {path:'', redirectTo:'credential', pathMatch:'full'},
  {path:'credential', component:CredentialComponent},
  {path: '**', redirectTo:'credential', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
