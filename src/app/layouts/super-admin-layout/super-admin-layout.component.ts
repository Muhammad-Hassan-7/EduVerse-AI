import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-super-admin-layout',
  imports: [CommonModule, SidebarComponent, RouterOutlet],
  templateUrl: './super-admin-layout.component.html',
  styleUrl: './super-admin-layout.component.css',
})
export class SuperAdminLayoutComponent {
  isSidebarOpen = true;
}
