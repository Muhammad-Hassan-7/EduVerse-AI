import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ButtonComponent } from '../button/button.component';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

interface MenuItem {
  icon: string;
  label: string;
  path: string;
  active?: boolean;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnChanges {
  @Input() role: 'admin' | 'teacher' | 'student' = 'admin';
  @Output() toggleSidebar = new EventEmitter<boolean>();

  constructor(private router: Router) {}
  isOpen: boolean = true;
  menuItems: MenuItem[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['role']) {
      this.setMenuItems();
    }
  }

  private setMenuItems() {
    if (this.role === 'admin') {
      this.menuItems = [
        {
          icon: 'fa-solid fa-chart-pie',
          label: 'Dashboard',
          path: 'dashboard',
        },
        { icon: 'fa-solid fa-users', label: 'Teachers', path: 'teachers' },
        { icon: 'fa-solid fa-users', label: 'Students', path: 'students' },
        { icon: 'fa-solid fa-book', label: 'Courses', path: 'courses' },
        { icon: 'fa-solid fa-cog', label: 'Settings', path: 'settings' },
      ];
    } else if (this.role === 'teacher') {
      this.menuItems = [
        {
          icon: 'fa-solid fa-chart-pie',
          label: 'Dashboard',
          path: 'dashboard',
        },
        { icon: 'fa-solid fa-book', label: 'My Courses', path: 'courses' },
        { icon: 'fa-solid fa-question', label: 'Quizzes', path: 'quizzes' },
        { icon: 'fa-solid fa-file', label: 'Assignments', path: 'assignments' },
        {
          icon: 'fa-solid fa-user',
          label: 'Track Student',
          path: 'trackstudent',
        },
        { icon: 'fa-solid fa-cog', label: 'Settings', path: 'settings' },
      ];
    } else if (this.role === 'student') {
      this.menuItems = [
        {
          icon: 'fa-solid fa-chart-pie',
          label: 'Dashboard',
          path: 'dashboard',
        },
        { icon: 'fa-solid fa-book', label: 'My Courses', path: 'courses' },
        { icon: 'fa-solid fa-question', label: 'Quizzes', path: 'quizzes' },
        { icon: 'fa-solid fa-file', label: 'Assignments', path: 'assignments' },
         { icon: 'fa-solid fa-robot', label: 'Ai Assistant', path: 'ai-assisstant' },

        {
          icon: 'fa-solid fa-user',
          label: 'Leaderboard',
          path: 'leaderboard',
        },
        { icon: 'fa-solid fa-cog', label: 'Settings', path: 'settings' },
      ];
    } else {
      this.menuItems = [];
    }
  }

  toggle() {
    this.isOpen = !this.isOpen;
    this.toggleSidebar.emit(this.isOpen);
  }

  logout() {
    localStorage.removeItem('token');
    sessionStorage.clear();

    this.router.navigate(['/login']);
  }
}
