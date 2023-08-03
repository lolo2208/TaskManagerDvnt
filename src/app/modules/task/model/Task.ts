export class Task {

    id: number;
    title: string;
    description: string;
    dateReg: Date;
    status: string;
  
    constructor() {
      this.id = 0;
      this.title = '';
      this.description = '';
      this.dateReg = new Date();
      this.status = 'Pending'
    }
  }