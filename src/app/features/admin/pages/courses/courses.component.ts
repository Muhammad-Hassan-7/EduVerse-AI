import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { DataTableComponent, TableColumn } from '../../../../shared/components/data-table/data-table.component';
import { FiltersComponent } from '../../../../shared/components/filters/filters.component';
@Component({
  selector: 'app-courses',
  imports: [HeaderComponent, DataTableComponent, FiltersComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class CoursesComponent {
  currentPage = 1;   // track current page

  onPageChange(page: number) {
    this.currentPage = page;
    console.log('Page changed:', page);
    // You could also fetch new data from backend here if needed
  }

  courseColumns: TableColumn[] = [
    { key: 'title', label: 'Course Title', type: 'text' },
    { key: 'code', label: 'Code', type: 'text' },
    { key: 'instructor', label: 'Instructor', type: 'text' },
    { key: 'enrollment', label: 'Enrollment', type: 'text' }, // Added enrollment column
    {
      key: 'category',
      label: 'Category',
      type: 'badge',
      badgeColors: {
        'Core CS': 'bg-indigo-100 text-indigo-800',
        'CS Elective': 'bg-purple-100 text-purple-800',
        'Math/Foundational': 'bg-yellow-100 text-yellow-800',
        'Science': 'bg-cyan-100 text-cyan-800',
        'General Education': 'bg-pink-100 text-pink-800',
      },
    }, // Added category column
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
      "id": 1,
      "title": "Introduction to Programming",
      "code": "CS101",
      "instructor": "John Doe",
      "status": "Active",
      "category": "Core CS",
      "enrollment": 150
    },
    {
      "id": 2,
      "title": "Data Structures",
      "code": "CS201",
      "instructor": "Jane Smith",
      "status": "Upcoming",
      "category": "Core CS",
      "enrollment": 120
    },
    {
      "id": 3,
      "title": "Database Systems",
      "code": "CS301",
      "instructor": "Robert Brown",
      "status": "Inactive",
      "category": "Core CS",
      "enrollment": 95
    },
    {
      "id": 4,
      "title": "Operating Systems",
      "code": "CS401",
      "instructor": "Ali Khan",
      "status": "Completed",
      "category": "Core CS",
      "enrollment": 80
    },
    {
      "id": 5,
      "title": "Web Development Basics",
      "code": "CS501",
      "instructor": "Alice Green",
      "status": "Active",
      "category": "CS Elective",
      "enrollment": 95
    },
    {
      "id": 6,
      "title": "Algorithms Analysis",
      "code": "CS502",
      "instructor": "Michael Davis",
      "status": "Upcoming",
      "category": "CS Elective",
      "enrollment": 102
    },
    {
      "id": 7,
      "title": "Computer Networking",
      "code": "CS503",
      "instructor": "Emily Wilson",
      "status": "Inactive",
      "category": "CS Elective",
      "enrollment": 109
    },
    {
      "id": 8,
      "title": "Artificial Intelligence",
      "code": "CS504",
      "instructor": "David Clark",
      "status": "Completed",
      "category": "CS Elective",
      "enrollment": 116
    },
    {
      "id": 9,
      "title": "Machine Learning",
      "code": "CS505",
      "instructor": "Olivia Hall",
      "status": "Active",
      "category": "CS Elective",
      "enrollment": 123
    },
    {
      "id": 10,
      "title": "Software Engineering",
      "code": "CS506",
      "instructor": "Chris Baker",
      "status": "Upcoming",
      "category": "CS Elective",
      "enrollment": 130
    },
    {
      "id": 11,
      "title": "Cloud Computing",
      "code": "CS507",
      "instructor": "Sophia Moore",
      "status": "Inactive",
      "category": "CS Elective",
      "enrollment": 62
    },
    {
      "id": 12,
      "title": "Cyber Security",
      "code": "CS508",
      "instructor": "Mark King",
      "status": "Completed",
      "category": "CS Elective",
      "enrollment": 69
    },
    {
      "id": 13,
      "title": "Mobile App Development",
      "code": "CS509",
      "instructor": "Laura Adams",
      "status": "Active",
      "category": "CS Elective",
      "enrollment": 76
    },
    {
      "id": 14,
      "title": "Calculus I",
      "code": "CS510",
      "instructor": "Kevin Hill",
      "status": "Upcoming",
      "category": "Math/Foundational",
      "enrollment": 83
    },
    {
      "id": 15,
      "title": "Physics for Engineers",
      "code": "CS511",
      "instructor": "Mia Scott",
      "status": "Inactive",
      "category": "Science",
      "enrollment": 90
    },
    {
      "id": 16,
      "title": "Discrete Mathematics",
      "code": "CS512",
      "instructor": "George Taylor",
      "status": "Completed",
      "category": "Math/Foundational",
      "enrollment": 97
    },
    {
      "id": 17,
      "title": "Technical Writing",
      "code": "CS513",
      "instructor": "Anna Evans",
      "status": "Active",
      "category": "CS Elective",
      "enrollment": 104
    }
  ];

  onEditCourse(course: any) {
    console.log('Edit clicked for course:', course);
  }

  onDeleteCourse(course: any) {
    console.log('Delete clicked for course:', course);
  }

  filteredCourses = [...this.courses];

  onFiltersChange(filters: { [key: string]: string }) {
    this.currentPage = 1; // → when user changes filters, we should go back to page 1.
    this.filteredCourses = this.courses.filter(c => {
      const matchesSearch = !filters['search'] ||
        c.title.toLowerCase().includes(filters['search'].toLowerCase()) ||
        c.instructor.toLowerCase().includes(filters['search'].toLowerCase()) ||
        c.category.toLowerCase().includes(filters['search'].toLowerCase());

      const matchesStatus = !filters['status'] || c.status === filters['status'];

      return matchesSearch && matchesStatus;
    })
  }
}
