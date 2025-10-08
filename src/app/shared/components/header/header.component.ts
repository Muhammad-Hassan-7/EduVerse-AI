import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input() pageTitle: string = 'Admin Dashboard';
  @Input() notificationCount: number = 0;
  @Input() profile: Profile = {
    name: 'Admin Profile',
    initials: 'AP',
  };

  @Output() notificationClick = new EventEmitter<void>();
  @Output() profileClick = new EventEmitter<void>();
  @Output() logoutClick = new EventEmitter<void>();

  onNotificationClick(): void {
    this.notificationClick.emit();
  }

  onProfileClick(): void {
    this.profileClick.emit();
  }

  onLogoutClick(): void {
    this.logoutClick.emit();
  }
}

interface Profile {
  name: string;
  initials: string;
  avatar?: string;
}
