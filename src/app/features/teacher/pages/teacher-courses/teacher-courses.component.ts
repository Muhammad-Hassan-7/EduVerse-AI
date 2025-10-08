import { Component } from '@angular/core';
import {
  DataTableComponent,
  TableColumn,
} from '../../../../shared/components/data-table/data-table.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { GenerateCoursesComponent } from '../generate-courses/generate-courses.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teacher-courses',
  imports: [
    HeaderComponent,
    DataTableComponent,
    ButtonComponent,
    GenerateCoursesComponent,
    CommonModule,
  ], // Add CreateCourseComponent here
  templateUrl: './teacher-courses.component.html',
  styleUrl: './teacher-courses.component.css',
})

// OR keep your current interface and update the data structure
export class TeacherCoursesComponent {
  columns: TableColumn[] = [
    { key: 'name', label: 'Course Name', type: 'text' },
    { key: 'id', label: 'Course ID', type: 'text' },
    { key: 'duration', label: 'Duration', type: 'text' },
  ];

  showCreateCourse: boolean = false;

  courses = [
    { name: 'Introduction to Algebra', id: 'MATH101', duration: '12 Weeks' },
    {
      name: 'World History: Ancient Civilizations',
      id: 'HIST201',
      duration: '10 Weeks',
    },
    {
      name: 'Introduction to Python Programming',
      id: 'CS101',
      duration: '15 Weeks',
    },
    { name: 'Chemistry Fundamentals', id: 'CHEM101', duration: '12 Weeks' },
  ];

  onCourseCreated(courseData: any): void {
    // Fix: Create object that matches your data structure
    const newCourse = {
      name: courseData.title,
      id: this.generateCourseId(courseData.category),
      duration: '12 Weeks', // You can make this dynamic based on your form
    };

    this.courses = [...this.courses, newCourse];
    this.showCreateCourse = false;
  }

  onCancelCreate(): void {
    this.showCreateCourse = false;
  }

  onEdit(course: Course): void {
    console.log('Edit course:', course);
  }

  onDelete(course: Course): void {
    this.courses = this.courses.filter((c) => c.id !== course.id);
  }

  onAddCourse(): void {
    this.showCreateCourse = true;
  }

  // Helper method to generate course ID
  private generateCourseId(category: string): string {
    const prefix = category.substring(0, 4).toUpperCase();
    const number = (this.courses.length + 101).toString();
    return prefix + number;
  }
}

interface Course {
  name: string;
  id: string;
  duration: string;
}
