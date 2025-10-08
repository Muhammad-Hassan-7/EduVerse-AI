import { Component } from '@angular/core';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-teacher-layout',
  imports: [SidebarComponent, RouterOutlet, CommonModule],
  templateUrl: './teacher-layout.component.html',
  styleUrl: './teacher-layout.component.css',
})
export class TeacherLayoutComponent {
  isSidebarOpen = true;
}
