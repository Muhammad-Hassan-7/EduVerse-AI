import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { StatCardComponent } from '../../../../shared/components/stat-card/stat-card.component';
import { NotificationsComponent } from '../../components/notifications/notifications.component';
import { ProgressSnapshotComponent } from '../../components/progress-snapshot/progress-snapshot.component';
import { ContinueLearningComponent } from '../../components/continue-learning/continue-learning.component';
import { CoursesCardComponent,Course} from '../../components/courses-card/courses-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-dashboard',
  imports: [
    CommonModule,
    HeaderComponent,
    StatCardComponent,
    NotificationsComponent,
    ProgressSnapshotComponent,
    ContinueLearningComponent,
    CoursesCardComponent,
  ],
  templateUrl: './student-dashboard.component.html',
  styleUrl: './student-dashboard.component.css',
})
export class StudentDashboardComponent {
  statsCards: StatCard[] = [
    {
      title: 'Courses Ennrolled',
      value: '05',
      icon: 'fas fa-graduation-cap',
      iconBgClass: 'bg-blue-100',
      iconColorClass: 'text-blue-600',
    },

    {
      title: 'Assignments Due',
      value: '03',
      icon: 'fas fa-book-open',
      iconBgClass: 'bg-purple-100',
      iconColorClass: 'text-purple-600',
    },
    {
      title: 'Pending Quizzes',
      value: '04',
      icon: 'fas fa-chalkboard-teacher',
      iconBgClass: 'bg-orange-100',
      iconColorClass: 'text-orange-600',
    },
  ];
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

interface StatCard {
  title: string;
  value: string;
  icon: string;
  iconBgClass: string;
  iconColorClass: string;
}
