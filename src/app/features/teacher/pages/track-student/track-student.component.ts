import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-track-student',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './track-student.component.html',
  styleUrls: ['./track-student.component.css'],
})
export class TrackStudentComponent {
  students = [
    {
      name: 'John Doe',
      email: 'john.doe@example.com',
      course: 'Introduction to Algebra',
      progress: 85,
      grade: 'A',
    },
    {
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      course: 'World History',
      progress: 45,
      grade: 'C+',
    },
    {
      name: 'Mike Johnson',
      email: 'mike.johnson@example.com',
      course: 'Physics 101',
      progress: 100,
      grade: 'A-',
    },
    {
      name: 'Emily Davis',
      email: 'emily.davis@example.com',
      course: 'Introduction to Algebra',
      progress: 20,
      grade: 'F',
    },
  ];

  getProgressColor(progress: number): string {
    if (progress >= 80) return 'bg-green-500';
    if (progress >= 50) return 'bg-yellow-400';
    return 'bg-red-500';
  }

  onFilter(): void {
    console.log('Filter clicked');
  }
}
