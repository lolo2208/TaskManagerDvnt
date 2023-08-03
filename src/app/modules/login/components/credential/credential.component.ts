import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-credential',
  templateUrl: './credential.component.html',
  styleUrls: ['./credential.component.css']
})
export class CredentialComponent implements OnInit{
  
  constructor(private router:Router){

  }

  ngOnInit(): void {
    
  }

  goToTasks() {
    this.router.navigate(['task/task-list'])
  }

}
