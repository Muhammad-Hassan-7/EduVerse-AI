import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { StatCardComponent } from '../../../../shared/components/stat-card/stat-card.component';
import {
  DataTableComponent,
  TableColumn,
} from '../../../../shared/components/data-table/data-table.component';
import { StudentEnrollmentChartComponent } from '../../components/student-enrollment-chart/student-enrollment-chart.component';

@Component({
  selector: 'app-teacher-dashboard',
  imports: [
    CommonModule,
    HeaderComponent,
    StatCardComponent,
    DataTableComponent,
    StudentEnrollmentChartComponent,
  ],
  templateUrl: './teacher-dashboard.component.html',
  styleUrl: './teacher-dashboard.component.css',
})
export class TeacherDashboardComponent {
  teacherProfile = {
    name: 'Teacher Name',
    initials: 'TN',
    avatar: '',
  };

  constructor(private router: Router) {}

  quickLinks = [
    {
      title: 'Create Course',
      icon: 'fa fa-plus',
      action: () => this.onCreateCourse(),
    },
    {
      title: 'Create Quizzes',
      icon: 'fa fa-edit',
      action: () => this.onGenerateQuiz(),
    },
    {
      title: 'Create Assignment ',
      icon: 'fa-solid fa-file-circle-plus',
      action: () => this.onGenerateAssignment(),
    },
    
  ];

  onCreateCourse() {
    this.router.navigate(['/teacher/courses']);
  }
   
  onGenerateAssignment() {
    this.router.navigate(['/teacher/assignments']);
  }
  onGenerateQuiz() {
    this.router.navigate(['/teacher/quizzes']);
  }

  statsCards: StatCard[] = [
    {
      title: 'Courses',
      value: '12',
      icon: 'fas fa-book',
      iconBgClass: 'bg-indigo-100',
      iconColorClass: 'text-indigo-600',
    },
    {
      title: 'Students',
      value: '240',
      icon: 'fas fa-users',
      iconBgClass: 'bg-green-100',
      iconColorClass: 'text-green-600',
    },
    {
      title: 'Assignments',
      value: '36',
      icon: 'fas fa-file-alt',
      iconBgClass: 'bg-orange-100',
      iconColorClass: 'text-orange-600',
    },
    {
      title: 'Awaiting Grading',
      value: '8',
      icon: 'fas fa-tasks',
      iconBgClass: 'bg-red-100',
      iconColorClass: 'text-red-600',
    },
  ];

  courseColumns: TableColumn[] = [
    { key: 'name', label: 'Course Name', type: 'text' },
    { key: 'id', label: 'Course ID', type: 'text' },
    { key: 'duration', label: 'Duration', type: 'text' },
    { key: 'students', label: 'Entrolled Students', type: 'text' },
  ];

  courses = [
    {
      name: 'Introduction to Algebra',
      id: 'MATH101',
      duration: '12 Weeks',
      students: '25',
    },
    {
      name: 'World History: Ancient Civilizations',
      id: 'HIST201',
      duration: '10 Weeks',
      students: '22',
    },
    {
      name: 'Introduction to Python Programming',
      id: 'CS101',
      duration: '15 Weeks',
      students: '30',
    },
  ];

  onViewCourse(row: any) {
    console.log('View clicked for course:', row);
  }

  onViewAllCourses() {
    this.router.navigate(['/teacher/courses']);
  }
}

interface StatCard {
  title: string;
  value: string;
  icon: string;
  iconBgClass: string;
  iconColorClass: string;
}
