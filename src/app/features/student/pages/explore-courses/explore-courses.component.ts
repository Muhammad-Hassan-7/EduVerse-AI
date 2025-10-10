
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { FiltersComponent } from '../../../../shared/components/filters/filters.component';
import { CourseCardComponent, Course } from '../../components/course-card/course-card.component';

@Component({
  selector: 'app-explore-courses',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    ButtonComponent,
    FiltersComponent,
    CourseCardComponent
  ],
  templateUrl: './explore-courses.component.html',
  styleUrl: './explore-courses.component.css'
})
export class ExploreCoursesComponent implements OnInit {
  
  profile = {
    name: 'Tayyaba Aly',
    initials: 'TA'
  };

  // Filter configuration
  filterConfig = {
    searchPlaceholder: 'Search ',
    dropdowns: [
      {
        key: 'category',
        label: 'Category',
        options: ['Web Development', 'Design', 'Data Science', 'Mobile Dev', 'Marketing', 'Cloud']
      },
      {
        key: 'level',
        label: 'Level',
        options: ['Beginner', 'Intermediate', 'Advanced']
      },
      {
        key: 'price',
        label: 'Price',
        options: ['Free', 'Paid']
      }
    ]
  };

  // Available courses for exploration
  availableCourses: Course[] = [
    {
      id: '7',
      title: 'Full Stack JavaScript Development',
      instructor: 'Prof. Tooba',
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=600&fit=crop',
      category: 'Web Development',
      level: 'Advanced',
      rating: 4.9,
      duration: '24h 00m',
      totalLessons: 85,
      price: 0,
      enrolledStudents: 12450,
      description: 'Master MERN stack development and build production-ready applications'
    },
    {
      id: '8',
      title: 'Graphic Design Mastery',
      instructor: 'Dr. Shumaila',
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop',
      category: 'Design',
      level: 'Beginner',
      rating: 4.7,
      duration: '10h 30m',
      totalLessons: 42,
      price: 49,
      enrolledStudents: 8750,
      description: 'Learn professional graphic design using Adobe Creative Suite'
    },
    {
      id: '9',
      title: 'Machine Learning A-Z',
      instructor: 'Dr. Nadia',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop',
      category: 'Data Science',
      level: 'Intermediate',
      rating: 4.8,
      duration: '30h 15m',
      totalLessons: 120,
      price: 89,
      enrolledStudents: 15200,
      description: 'Comprehensive ML course covering algorithms, implementation, and real projects'
    },
    {
      id: '10',
      title: 'iOS App Development with Swift',
      instructor: 'Dr. Rida',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      category: 'Mobile Dev',
      level: 'Intermediate',
      rating: 4.6,
      duration: '18h 45m',
      totalLessons: 65,
      price: 0,
      enrolledStudents: 9340,
      description: 'Build beautiful iOS apps from scratch using Swift and SwiftUI'
    },
    {
      id: '11',
      title: 'SEO & Content Marketing 2024',
      instructor: 'Prof. Aneeza',
      image: 'assets/images/UI_UX.jpeg',
      category: 'Marketing',
      level: 'Beginner',
      rating: 4.5,
      duration: '12h 20m',
      totalLessons: 48,
      price: 39,
      enrolledStudents: 11200,
      description: 'Master SEO strategies and content marketing to grow your online presence'
    },
    {
      id: '12',
      title: 'Docker & Kubernetes Complete Guide',
      instructor: 'Prof. Zoraiz',
      image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop',
      category: 'Cloud',
      level: 'Advanced',
      rating: 4.9,
      duration: '22h 30m',
      totalLessons: 95,
      price: 99,
      enrolledStudents: 18900,
      description: 'Deploy and manage containerized applications in production environments'
    }
  ];

  filteredCourses: Course[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.filteredCourses = [...this.availableCourses];
  }

  // Handle filter changes
  onFiltersChange(filters: { [key: string]: string }) {
    let filtered = [...this.availableCourses];

    // Apply search filter
    const searchQuery = filters['search'] || '';
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(c =>
        c.title.toLowerCase().includes(query) ||
        c.instructor.toLowerCase().includes(query) ||
        c.category.toLowerCase().includes(query) ||
        (c.description && c.description.toLowerCase().includes(query))
      );
    }

    // Apply category filter
    const category = filters['category'] || '';
    if (category) {
      filtered = filtered.filter(c => c.category === category);
    }

    // Apply level filter
    const level = filters['level'] || '';
    if (level) {
      filtered = filtered.filter(c => c.level === level);
    }

    // Apply price filter
    const price = filters['price'] || '';
    if (price) {
      if (price === 'Free') {
        filtered = filtered.filter(c => c.price === 0);
      } else if (price === 'Paid') {
        filtered = filtered.filter(c => (c.price || 0) > 0);
      }
    }

    this.filteredCourses = filtered;
  }

 onCourseClick(course: Course | null) {
  if (!course) {
    console.log('Request a custom course clicked');
    return;
  }
  console.log('Course details:', course.title);
}

  onEnrollClick(course: Course) {
    console.log('Enrolling in:', course.title);
    // Handle enrollment logic
    alert(`Enrolling in: ${course.title}`);
  }

  navigateToMyCourses() {
    this.router.navigate(['/student/courses']);
  }
}