import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DataTableComponent, TableColumn } from '../../../../shared/components/data-table/data-table.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { FiltersComponent } from '../../../../shared/components/filters/filters.component';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [HeaderComponent, DataTableComponent, CommonModule, FiltersComponent],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  currentPage = 1;   // track current page

  onPageChange(page: number) {
    this.currentPage = page;
    console.log('Page changed:', page);
    // You could also fetch new data from backend here if needed
  }

  studentColumns: TableColumn[] = [
    { key: 'avatar', label: 'Student', type: 'avatar' },
    { key: 'class', label: 'Class', type: 'text' },
    { key: 'rollNo', label: 'Roll No', type: 'text' },
    {
      key: 'status',
      label: 'Status',
      type: 'badge',
      badgeColors: {
        Enrolled: 'bg-green-100 text-green-800',
        Graduated: 'bg-blue-100 text-blue-800',
        Dropped: 'bg-red-100 text-red-800',
      },
    },
  ];

  students = [
    {
      "id": 1,
      "name": "Ali Khan",
      "email": "ali.khan@example.com",
      "class": "10th",
      "rollNo": "1023",
      "status": "Enrolled",
      "avatar": "AK"
    },
    {
      "id": 2,
      "name": "Sara Malik",
      "email": "sara.malik@example.com",
      "class": "9th",
      "rollNo": "1018",
      "status": "Graduated",
      "avatar": "SM"
    },
    {
      "id": 3,
      "name": "Baldwin",
      "email": "baldwin@example.com",
      "class": "12th",
      "rollNo": "1012",
      "status": "Dropped",
      "avatar": "B"
    },
    {
      "id": 4,
      "name": "Omar Ahmed",
      "email": "omar.ahmed@example.com",
      "class": "11th",
      "rollNo": "1024",
      "status": "Enrolled",
      "avatar": "OA"
    },
    {
      "id": 5,
      "name": "Noor Ali",
      "email": "noor.ali@example.com",
      "class": "8th",
      "rollNo": "1025",
      "status": "Graduated",
      "avatar": "NA"
    },
    {
      "id": 6,
      "name": "Faisal Hussain",
      "email": "faisal.hussain@example.com",
      "class": "10th",
      "rollNo": "1026",
      "status": "Dropped",
      "avatar": "FH"
    },
    {
      "id": 7,
      "name": "Hina Tariq",
      "email": "hina.tariq@example.com",
      "class": "9th",
      "rollNo": "1027",
      "status": "Suspended",
      "avatar": "HT"
    },
    {
      "id": 8,
      "name": "Zain Raza",
      "email": "zain.raza@example.com",
      "class": "12th",
      "rollNo": "1028",
      "status": "Enrolled",
      "avatar": "ZR"
    },
    {
      "id": 9,
      "name": "Ayesha Latif",
      "email": "ayesha.latif@example.com",
      "class": "11th",
      "rollNo": "1029",
      "status": "Graduated",
      "avatar": "AL"
    },
    {
      "id": 10,
      "name": "Bilal Ghani",
      "email": "bilal.ghani@example.com",
      "class": "8th",
      "rollNo": "1030",
      "status": "Dropped",
      "avatar": "BG"
    },
    {
      "id": 11,
      "name": "Sana Zafar",
      "email": "sana.zafar@example.com",
      "class": "10th",
      "rollNo": "1031",
      "status": "Suspended",
      "avatar": "SZ"
    },
    {
      "id": 12,
      "name": "Kamran Iqbal",
      "email": "kamran.iqbal@example.com",
      "class": "9th",
      "rollNo": "1032",
      "status": "Enrolled",
      "avatar": "KI"
    },
    {
      "id": 13,
      "name": "Maria Aslam",
      "email": "maria.aslam@example.com",
      "class": "12th",
      "rollNo": "1033",
      "status": "Graduated",
      "avatar": "MA"
    },
    {
      "id": 14,
      "name": "Javed Sheikh",
      "email": "javed.sheikh@example.com",
      "class": "11th",
      "rollNo": "1034",
      "status": "Dropped",
      "avatar": "JS"
    },
    {
      "id": 15,
      "name": "Laila Butt",
      "email": "laila.butt@example.com",
      "class": "8th",
      "rollNo": "1035",
      "status": "Suspended",
      "avatar": "LB"
    },
    {
      "id": 16,
      "name": "Usman Qureshi",
      "email": "usman.qureshi@example.com",
      "class": "10th",
      "rollNo": "1036",
      "status": "Enrolled",
      "avatar": "UQ"
    },
    {
      "id": 17,
      "name": "Rabia Malik",
      "email": "rabia.malik@example.com",
      "class": "9th",
      "rollNo": "1037",
      "status": "Graduated",
      "avatar": "RM"
    }
  ];

  onEditStudent(student: any) {
    console.log('Edit clicked for:', student);
  }

  onDeleteStudent(student: any) {
    console.log('Delete clicked for:', student);
  }

  filteredStudents = [...this.students];

  onFiltersChange(filters: { [key: string]: string }) {
    this.currentPage = 1; // → when user changes filters, we should go back to page 1.
    this.filteredStudents = this.students.filter(s => {
      const matchesSearch = !filters['search'] ||
        s.name.toLowerCase().includes(filters['search'].toLocaleLowerCase()) ||
        s.email.toLowerCase().includes(filters['search'].toLocaleLowerCase());

      const matchesStatus = !filters['status'] || s.status === filters['status'];

      return matchesSearch && matchesStatus;
    })
  }
}
