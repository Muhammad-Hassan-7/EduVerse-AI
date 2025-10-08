import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { ProfileFormComponent } from '../../../admin/components/profile-form/profile-form.component';
import { ChangePasswordComponent } from '../../../admin/components/change-password/change-password.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-settings',
  imports: [
    HeaderComponent,
    CommonModule,
    ChangePasswordComponent,
    ProfileFormComponent,
  ],
  templateUrl: './student-settings.component.html',
  styleUrl: './student-settings.component.css',
})
export class StudentSettingsComponent {}
