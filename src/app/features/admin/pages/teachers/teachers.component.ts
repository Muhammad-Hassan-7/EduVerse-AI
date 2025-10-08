import { Component } from '@angular/core';
import { TableColumn, DataTableComponent } from '../../../../shared/components/data-table/data-table.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { CommonModule } from '@angular/common';
import { FiltersComponent } from '../../../../shared/components/filters/filters.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

@Component({
  selector: 'app-teachers',
  standalone: true,
  imports: [HeaderComponent, DataTableComponent, CommonModule, FiltersComponent, ButtonComponent],
  templateUrl: './teachers.component.html',
  styleUrl: './teachers.component.css'
})
export class TeachersComponent {
  currentPage = 1;   // track current page

  onPageChange(page: number) {
    this.currentPage = page;
    console.log('Page changed:', page);
    // You could also fetch new data from backend here if needed
  }


  teacherColumns: TableColumn[] = [
    { key: 'avatar', label: 'Teacher', type: 'avatar' },
    { key: 'courses', label: 'Courses', type: 'text' },
    { key: 'students', label: 'Students', type: 'text' },
    { key: 'role', label: 'Role', type: 'text' },
    {
      key: 'status',
      label: 'Status',
      type: 'badge',
      badgeColors: {
        Active: 'bg-green-100 text-green-800',
        Inactive: 'bg-red-100 text-red-800',
      },
    },
  ];

  teachers = [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john.doe@example.com",
      "courses": 12,
      "students": 345,
      "role": "Teacher",
      "status": "Active",
      "avatar": "JD"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "jane.smith@example.com",
      "courses": 8,
      "students": 210,
      "role": "Sub-Admin",
      "status": "Active",
      "avatar": "JS"
    },
    {
      "id": 3,
      "name": "Robert Brown",
      "email": "robert.brown@example.com",
      "courses": 15,
      "students": 450,
      "role": "Teacher",
      "status": "Inactive",
      "avatar": "RB"
    },
    {
      "id": 4,
      "name": "Alice Green",
      "email": "alice.green@example.com",
      "courses": 10,
      "students": 280,
      "role": "Teacher",
      "status": "Active",
      "avatar": "AG"
    },
    {
      "id": 5,
      "name": "Michael Davis",
      "email": "michael.davis@example.com",
      "courses": 7,
      "students": 190,
      "role": "Sub-Admin",
      "status": "Inactive",
      "avatar": "MD"
    },
    {
      "id": 6,
      "name": "Emily Wilson",
      "email": "emily.wilson@example.com",
      "courses": 14,
      "students": 420,
      "role": "Teacher",
      "status": "Active",
      "avatar": "EW"
    },
    {
      "id": 7,
      "name": "David Clark",
      "email": "david.clark@example.com",
      "courses": 9,
      "students": 250,
      "role": "Sub-Admin",
      "status": "Active",
      "avatar": "DC"
    },
    {
      "id": 8,
      "name": "Olivia Hall",
      "email": "olivia.hall@example.com",
      "courses": 11,
      "students": 280,
      "role": "Teacher",
      "status": "Inactive",
      "avatar": "OH"
    },
    {
      "id": 9,
      "name": "Chris Baker",
      "email": "chris.baker@example.com",
      "courses": 13,
      "students": 310,
      "role": "Sub-Admin",
      "status": "Active",
      "avatar": "CB"
    },
    {
      "id": 10,
      "name": "Sophia Moore",
      "email": "sophia.moore@example.com",
      "courses": 15,
      "students": 340,
      "role": "Teacher",
      "status": "Inactive",
      "avatar": "SM"
    },
    {
      "id": 11,
      "name": "Mark King",
      "email": "mark.king@example.com",
      "courses": 10,
      "students": 370,
      "role": "Sub-Admin",
      "status": "Active",
      "avatar": "MK"
    },
    {
      "id": 12,
      "name": "Laura Adams",
      "email": "laura.adams@example.com",
      "courses": 12,
      "students": 400,
      "role": "Teacher",
      "status": "Inactive",
      "avatar": "LA"
    },
    {
      "id": 13,
      "name": "Kevin Hill",
      "email": "kevin.hill@example.com",
      "courses": 14,
      "students": 430,
      "role": "Sub-Admin",
      "status": "Active",
      "avatar": "KH"
    },
    {
      "id": 14,
      "name": "Mia Scott",
      "email": "mia.scott@example.com",
      "courses": 9,
      "students": 260,
      "role": "Teacher",
      "status": "Inactive",
      "avatar": "MS"
    },
    {
      "id": 15,
      "name": "George Taylor",
      "email": "george.taylor@example.com",
      "courses": 11,
      "students": 290,
      "role": "Sub-Admin",
      "status": "Active",
      "avatar": "GT"
    },
    {
      "id": 16,
      "name": "Anna Evans",
      "email": "anna.evans@example.com",
      "courses": 13,
      "students": 320,
      "role": "Teacher",
      "status": "Inactive",
      "avatar": "AE"
    },
    {
      "id": 17,
      "name": "Peter Wright",
      "email": "peter.wright@example.com",
      "courses": 15,
      "students": 350,
      "role": "Sub-Admin",
      "status": "Active",
      "avatar": "PW"
    }
  ];

  onAddTeacher() {
    // will open a modal
    console.log('Add clicked');
  }

  onEditTeacher(teacher: any) {
    console.log('Edit clicked for:', teacher);
  }

  onDeleteTeacher(teacher: any) {
    console.log('Delete clicked for:', teacher);
  }

  filteredTeachers = [...this.teachers];

  onFiltersChange(filters: { [key: string]: string }) {
    this.currentPage = 1; // → when user changes filters, we should go back to page 1.
    this.filteredTeachers = this.teachers.filter(t => {
      const matchesSearch = !filters['search'] ||
        t.name.toLowerCase().includes(filters['search'].toLowerCase()) ||
        t.email.toLowerCase().includes(filters['search'].toLowerCase());

      const matchesStatus = !filters['status'] || t.status === filters['status'];

      return matchesSearch && matchesStatus;
    })
  }
}
