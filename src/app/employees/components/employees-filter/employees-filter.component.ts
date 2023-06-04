import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employees-filter',
  templateUrl: './employees-filter.component.html',
  styleUrls: ['./employees-filter.component.scss'],
})
export class EmployeesFilterComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}
  departmentOptions = ['IT', 'Finance', 'Mangement', 'HR', 'Sales'];
  experienceOptions = [
    'less than a year',
    'from 1-3 years',
    '3 years or above',
  ];
  filtersForm = {
    name: null,
    department: null,
    employmentDate: null,
    salary: null,
    experience: null,
  };

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.filtersForm = {
        ...this.filtersForm,
        ...params,
      };
      console.log(this.filtersForm);
    });
  }

  applyFilters() {
    let queryParamsFilters = new Object();
    for (const [key, value] of Object.entries(this.filtersForm)) {
      if (value) {
        queryParamsFilters[key] = value;
      }
    }
    if (queryParamsFilters) {
      this.router.navigate([], {
        queryParams: queryParamsFilters,
      });
    }
  }

  clearFilter() {
    for (const [key, value] of Object.entries(this.filtersForm)) {
      this.filtersForm[key] = '';
    }
    this.router.navigate([]);
  }
}
