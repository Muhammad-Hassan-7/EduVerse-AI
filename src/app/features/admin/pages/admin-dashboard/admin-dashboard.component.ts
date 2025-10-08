import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatCardComponent } from '../../../../shared/components/stat-card/stat-card.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { DataTableComponent, TableColumn } from '../../../../shared/components/data-table/data-table.component';


@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    StatCardComponent,
    DataTableComponent
  ],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css',
})
export class AdminDashboardComponent {
  // stats
  statsCards: StatCard[] = [
    {
      title: 'Total Users',
      value: '12,456',
      icon: 'fas fa-users',
      iconBgClass: 'bg-blue-100',
      iconColorClass: 'text-blue-600',
    },
    {
      title: 'Active Courses',
      value: '89',
      icon: 'fas fa-graduation-cap',
      iconBgClass: 'bg-green-100',
      iconColorClass: 'text-green-600',
    },
    {
      title: 'Registered Courses',
      value: '1,230',
      icon: 'fas fa-book-open',
      iconBgClass: 'bg-purple-100',
      iconColorClass: 'text-purple-600',
    },
    {
      title: 'Total Teachers',
      value: '57',
      icon: 'fas fa-chalkboard-teacher',
      iconBgClass: 'bg-orange-100',
      iconColorClass: 'text-orange-600',
    },
  ];

  
  // teachers
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
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      courses: 12,
      students: 345,
      role: 'Teacher',
      status: 'Active',
      avatar: 'JD',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      courses: 8,
      students: 210,
      role: 'Sub-Admin',
      status: 'Active',
      avatar: 'JS',
    },
    {
      id: 3,
      name: 'Robert Brown',
      email: 'robert.brown@example.com',
      courses: 15,
      students: 450,
      role: 'Teacher',
      status: 'Inactive',
      avatar: 'RB',
    },
  ];

  // students
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
      id: 1,
      name: 'Ali Khan',
      email: 'ali.khan@example.com',
      class: '10th',
      rollNo: '1023',
      status: 'Enrolled',
      avatar: 'AK',
    },
    {
      id: 2,
      name: 'Sara Malik',
      email: 'sara.malik@example.com',
      class: '9th',
      rollNo: '1018',
      status: 'Graduated',
      avatar: 'SM',
    },
    {
      id: 3,
      name: 'Baldwin',
      email: 'baldwin@example.com',
      class: '12th',
      rollNo: '1012',
      status: 'Dropped',
      avatar: 'B',
    },
  ];

  // courses
  courseColumns: TableColumn[] = [
    { key: 'title', label: 'Course Title', type: 'text' },
    { key: 'code', label: 'Code', type: 'text' },
    { key: 'instructor', label: 'Instructor', type: 'text' },
    {
      key: 'status',
      label: 'Status',
      type: 'badge',
      badgeColors: {
        Active: 'bg-green-100 text-green-800',
        Inactive: 'bg-red-100 text-red-800',
        Upcoming: 'bg-blue-100 text-blue-800',
        Completed: 'bg-gray-100 text-gray-800',
      },
    },
  ];

  courses = [
    {
      id: 1,
      title: 'Introduction to Programming',
      code: 'CS101',
      instructor: 'John Doe',
      status: 'Active',
    },
    {
      id: 2,
      title: 'Data Structures',
      code: 'CS201',
      instructor: 'Jane Smith',
      status: 'Upcoming',
    },
    {
      id: 3,
      title: 'Database Systems',
      code: 'CS301',
      instructor: 'Robert Brown',
      status: 'Inactive',
    },
  ];
}

interface StatCard {
  title: string;
  value: string;
  icon: string;
  iconBgClass: string;
  iconColorClass: string;
}
