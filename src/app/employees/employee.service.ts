import { Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  doc,
  setDoc,
} from '@angular/fire/firestore';

import { Observable, map, tap } from 'rxjs';

import { GlobalLoadingService } from '../shared/services/global-loading.service';
import { SnackbarService } from '../shared/services/snackbar.service';

import { Employee } from '../shared/models/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(
    private firestore: Firestore,
    private globalLoadingService: GlobalLoadingService,
    public snackbarService: SnackbarService
  ) {}

  addEmployee(employee: Employee) {
    return addDoc(collection(this.firestore, 'employees'), employee);
  }

  getEmployees() {
    this.globalLoadingService.start();
    return collectionData(collection(this.firestore, 'employees')).pipe(
      tap(() => this.globalLoadingService.stop())
    ) as Observable<Employee[]>;
  }

  getFiltered(filters) {
    return this.getEmployees().pipe(
      map((employees) => {
        if (!Object.keys(filters).length) return employees;
        const filteredEmployees = employees.filter((employee) => {
          if (
            filters.name &&
            !employee.name.toLowerCase().includes(filters.name.toLowerCase())
          ) {
            return false;
          }
          if (
            filters.department &&
            !(
              employee.department.toLowerCase() ==
              filters.department.toLowerCase()
            )
          ) {
            return false;
          }
          if (
            filters.employmentDate &&
            !(employee.employmentDate == filters.employmentDate)
          ) {
            return false;
          }
          if (filters.salary && !(employee.salary == filters.salary)) {
            return false;
          }
          if (
            filters.experience &&
            !(
              employee.experience.toLowerCase() ==
              filters.experience.toLowerCase()
            )
          ) {
            return false;
          }

          return true;
        });
        return filteredEmployees;
      })
    );
  }
}
