import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/shared/models/employee';
import { EmployeeService } from '../../employee.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-employee-dialog',
  templateUrl: './add-employee-dialog.component.html',
  styleUrls: ['./add-employee-dialog.component.scss'],
})
export class AddEmployeeDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<AddEmployeeDialogComponent>,
    private fb: FormBuilder,
    public employeeService: EmployeeService,
    public snackbarService: SnackbarService
  ) {}

  loading: boolean = false;

  departmentOptions = ['IT', 'Finance', 'Mangement', 'HR', 'Sales'];
  experienceOptions = [
    'less than a year',
    'from 1-3 years',
    '3 years or above',
  ];

  form: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    department: ['', [Validators.required]],
    employmentDate: ['', [Validators.required]],
    salary: ['', [Validators.required]],
    experience: ['', [Validators.required]],
  });

  get name() {
    return this.form.get('name');
  }
  get department() {
    return this.form.get('department');
  }
  get employmentDate() {
    return this.form.get('employemntDate');
  }
  get salary() {
    return this.form.get('salary');
  }
  get experience() {
    return this.form.get('experience');
  }

  submit() {
    this.dialogRef.disableClose = true;
    this.loading = true;
    const employeeData: Employee = this.form.value;
    this.employeeService
      .addEmployee(employeeData)
      .then(() => {
        this.loading = false;
        this.snackbarService.show('Employee has been added succesfully');
        this.dialogRef.close();
      })
      .catch((e) => {
        console.log(e);
        this.loading = false;
        this.snackbarService.showGeneric();
      });
  }
}
