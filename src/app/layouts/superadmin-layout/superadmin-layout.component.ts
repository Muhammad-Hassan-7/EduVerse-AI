import { Component } from '@angular/core';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-superadmin-layout',
  imports: [SidebarComponent, CommonModule, RouterOutlet],
  templateUrl: './superadmin-layout.component.html',
  styleUrl: './superadmin-layout.component.css',
})
export class SuperAdminLayoutComponent {
  isSidebarOpen = true;
}

