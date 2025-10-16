

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { StatCardComponent } from '../../../../shared/components/stat-card/stat-card.component';
import { FiltersComponent } from '../../../../shared/components/filters/filters.component';
import { CourseCardComponent, Course } from '../../components/course-card/course-card.component';

@Component({
  selector: 'app-student-courses',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    HeaderComponent, 
    ButtonComponent, 
    StatCardComponent, 
    FiltersComponent,
    CourseCardComponent
  ],
  templateUrl: './student-courses.component.html',
  styleUrl: './student-courses.component.css'
})
export class StudentCoursesComponent implements OnInit {
  
  profile = {
    name: 'Tayyaba Aly',
    initials: 'TA'
  };

  // Filter configuration for the reusable component
  filterConfig = {
    searchPlaceholder: 'Search by course name or instructor...',
    dropdowns: [
      {
        key: 'status',
        label: 'Status',
        options: ['In Progress', 'Completed', 'Not Started']
      }
    ]
  };

  courses: Course[] = [
    {
      id: '1',
      title: 'Web Development Masterclass',
      instructor: 'Dr Eman Shahbaz',
     
      progress: 65,
      duration: '12h 30m',
      lessonsCompleted: 24,
      totalLessons: 42,
      category: 'Web Development',
      level: 'Intermediate',
      rating: 4.8,
      nextLesson: 'Building RESTful APIs',
      dueDate: 'Dec 15',
      image: 'assets/images/Web Development.jpeg',
    },
    {
      id: '2',
      title: 'UI/UX Design Fundamentals',
      instructor: 'Dr Ayesha Javaid',
     
      progress: 40,
      duration: '8h 15m',
      lessonsCompleted: 12,
      totalLessons: 30,
      category: 'Design',
      level: 'Beginner',
      rating: 4.9,
      nextLesson: 'Color Theory Basics',
      image: 'assets/images/UI_UX.jpeg',
      dueDate: 'Dec 15',
    },
    {
      id: '3',
      title: 'Data Science with Python',
      instructor: 'Dr Manahil Kamran',
      
      progress: 85,
      duration: '16h 45m',
      lessonsCompleted: 34,
      totalLessons: 40,
      category: 'Data Science',
      level: 'Advanced',
      rating: 4.7,
      nextLesson: 'Machine Learning Models',
      dueDate: 'Dec 20',
      image: 'assets/images/Data_Science.jpeg',
    },
    {
      id: '4',
      title: 'Mobile App Development',
      instructor: 'Dr Hassan',
      
      progress: 20,
      duration: '14h 00m',
      lessonsCompleted: 8,
      totalLessons: 40,
      category: 'Mobile Dev',
      level: 'Intermediate',
      rating: 4.6,
      nextLesson: 'React Native Basics',
      dueDate: 'Jan 5',
      image: 'assets/images/Mobile_Dev.jpeg',
    },
    {
      id: '5',
      title: 'Digital Marketing Strategy',
      instructor: 'Prof Maham',
      
      progress: 0,
      duration: '10h 30m',
      lessonsCompleted: 0,
      totalLessons: 35,
      category: 'Marketing',
      level: 'Beginner',
      rating: 4.5,
      nextLesson: 'Introduction to SEO',
      image: 'assets/images/Marketing.jpeg',
      dueDate: 'Dec 15',
    },
    {
      id: '6',
      title: 'Cloud Computing AWS',
      instructor: 'Prof Aruj Anwar',
      
      progress: 55,
      duration: '18h 20m',
      lessonsCompleted: 22,
      totalLessons: 40,
      category: 'Cloud',
      level: 'Advanced',
      rating: 4.9,
      nextLesson: 'EC2 Instance Management',
      image: 'assets/images/Cloud.jpeg',
      dueDate: 'Dec 15',
    }
  ];

 

  filteredCourses: Course[] = [];

  stats = {
    total: 0,
    inProgress: 0,
    completed: 0,
    hours: 0
  };

  constructor(private router: Router) {}

  ngOnInit() {
    this.calculateStats();
    this.filteredCourses = [...this.courses];
  }

  calculateStats() {
  this.stats.total = this.courses.length;
  this.stats.inProgress = this.courses.filter(c => (c.progress ?? 0) > 0 && (c.progress ?? 0) < 100).length;
  this.stats.completed = this.courses.filter(c => c.progress === 100).length;
  this.stats.hours = this.courses.reduce((acc, c) => {
    const hours = parseFloat((c.duration ?? '0h').split('h')[0]) || 0;
    return acc + hours;
  }, 0);
}


  // Handle filter changes from the filter component
  onFiltersChange(filters: { [key: string]: string }) {
    let filtered = [...this.courses];

    // Apply search filter
    const searchQuery = filters['search'] || '';
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(c =>
        c.title.toLowerCase().includes(query) ||
        c.instructor.toLowerCase().includes(query) ||
        c.category.toLowerCase().includes(query)
      );
    }

    // Apply status filter from dropdown
    const status = filters['status'] || '';
    if (status && status !== 'All') {
      switch(status) {
        case 'In Progress':
          filtered = filtered.filter(c => (c.progress ?? 0) > 0 && (c.progress ?? 0) < 100);
          break;
        case 'Completed':
          filtered = filtered.filter(c => c.progress === 100);
          break;
        case 'Not Started':
          filtered = filtered.filter(c => c.progress === 0);
          break;
      }
    }

    this.filteredCourses = filtered;
  }

  onCourseClick(course: Course) {
    console.log('Course clicked:', course.title);
  }

  navigateToExplore() {
    this.router.navigate(['/student/explore-courses']);
  }
}