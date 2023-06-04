import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/shared/models/employee';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss'],
})
export class EmployeesListComponent implements OnInit {
  @Input() employeesData: Employee[];
  displayedColumns: string[] = [
    'name',
    'department',
    'employmentDate',
    'salary',
    'experience',
  ];

  ngOnInit(): void {
    console.log(this.employeesData);
  }
}
