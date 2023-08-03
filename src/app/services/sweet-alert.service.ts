import { Injectable } from '@angular/core';
import Swal, { SweetAlertResult } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

  constructor() { }

  confirmDelete(): Promise<SweetAlertResult> {
    return Swal.fire({
      title: '¿Delete Task?',
      text: 'There is no rollback',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete',
      cancelButtonText: 'I think no'
    });
  }

  showCreateSuccess(): void {
    Swal.fire({
      title: '¡Task registered!',
      text: 'Task has been registered successfully',
      icon: 'success',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Accept'
    });
  }

  
}
