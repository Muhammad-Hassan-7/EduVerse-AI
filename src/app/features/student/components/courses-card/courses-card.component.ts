import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-courses-card',
  imports: [CommonModule],
  templateUrl: './courses-card.component.html',
  styleUrl: './courses-card.component.css',
})
export class CoursesCardComponent {
  recommendations: Course[] = [
    {
      title: 'AI-Powered Web Development',
      description:
        'Build intelligent web applications using modern AI frameworks.',
      image: 'assets/images/course1.png',
      instructor: 'Dr. Farah Khan',
      level: 'Intermediate',
    },
    {
      title: 'Advanced UI/UX Design',
      description:
        'Design beautiful, user-centric experiences with Figma & Adobe XD.',
      image: 'assets/images/course2.png',
      instructor: 'Sarah Malik',
      level: 'Advanced',
    },
    {
      title: 'Data Visualization with Python',
      description:
        'Turn raw data into interactive visual insights using Matplotlib & Plotly.',
      image: 'assets/images/course3.png',
      instructor: 'Ahmed Raza',
      level: 'Beginner',
    },
  ];
}

interface Course {
  title: string;
  description: string;
  image: string;
  instructor: string;
  level: string;
}
