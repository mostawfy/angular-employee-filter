export interface Employee {
  name: string;
  department: 'IT' | 'Finance' | 'Mangement' | 'HR' | 'Sales';
  employmentDate: Date;
  salary: number;
  experience: 'less than a year' | 'from 1-3 years' | '3 years or above';
}
