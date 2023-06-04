import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEmployeeDialogComponent } from './components/add-employee-dialog/add-employee-dialog.component';
import { Observable } from 'rxjs';
import { Employee } from '../shared/models/employee';
import { EmployeeService } from './employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    public employeeService: EmployeeService,
    private route: ActivatedRoute
  ) {}

  employees$: Observable<Employee[]>;

  filters: any = [];

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.filters = params;
      setTimeout(() => {
        this.employees$ = this.employeeService.getFiltered(this.filters);
      }, 0);
    });
  }

  openAddEmployeeDialog() {
    this.dialog.open(AddEmployeeDialogComponent, {
      width: '500px',
    });
  }
}
