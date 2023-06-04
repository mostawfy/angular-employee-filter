import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';

import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { EmployeesFilterComponent } from './components/employees-filter/employees-filter.component';
import { AddEmployeeDialogComponent } from './components/add-employee-dialog/add-employee-dialog.component';
import { EmployeesComponent } from './employees.component';
import { TimestampToDatePipe } from '../shared/pipes/timestamp-to-date.pipe';

const MaterialModules = [
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatSelectModule,
  MatNativeDateModule,
  MatButtonModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatCardModule,
  MatExpansionModule,
];

@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeesListComponent,
    EmployeesFilterComponent,
    AddEmployeeDialogComponent,
    TimestampToDatePipe,
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, ...MaterialModules],
  providers: [DatePipe, TimestampToDatePipe],
})
export class EmployeesModule {}
