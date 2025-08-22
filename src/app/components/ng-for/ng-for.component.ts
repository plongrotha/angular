import { Component } from '@angular/core';
import { employee } from '../../../service/data/obj';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-ng-for',
  imports: [NgFor],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css',
})
export class NgForComponent {
  employees = employee;

  constructor() {
    this.employees = this.employees.map((emp) => {
      emp.firstname = emp.firstname.toUpperCase();
      emp.lastname = emp.lastname.toUpperCase();
      return emp;
    });
  }

  handleDelete(emp: { firstname: string; lastname: string; age: number }) {
    if (
      confirm(
        `Are you sure you want to delete this employee? ${emp.firstname} ${emp.lastname} `
      )
    ) {
      this.employees = this.employees.filter((e) => e !== emp);
    }
  }
}
