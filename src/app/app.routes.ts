import { Routes } from '@angular/router';
import { AdminDashboardComponent } from './features/admin/pages/admin-dashboard/admin-dashboard.component';
import { CoursesComponent } from './features/admin/pages/courses/courses.component';
import { SettingsComponent } from './features/admin/pages/settings/settings.component';
import { LoginComponent } from './features/auth/pages/login/login.component';
import { AdminSignupComponent } from './features/auth/pages/signups/admin-signup/admin-signup.component';
import { StudentSignupComponent } from './features/auth/pages/signups/student-signup/student-signup.component';
import { NotFoundComponent } from './features/not-found/not-found/not-found.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { LandingPageComponent } from './features/landing-page/landing-page.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { TeacherLayoutComponent } from './layouts/teacher-layout/teacher-layout.component';
import { TeacherDashboardComponent } from './features/teacher/pages/teacher-dashboard/teacher-dashboard.component';
import { TeacherCoursesComponent } from './features/teacher/pages/teacher-courses/teacher-courses.component';
import { TeacherSettingsComponent } from './features/teacher/pages/teacher-settings/teacher-settings.component';
import { TrackStudentComponent } from './features/teacher/pages/track-student/track-student.component';
import { GenerateAssignmentsComponent } from './features/teacher/pages/generate-assignments/generate-assignments.component';
import { TeachersComponent } from './features/admin/pages/teachers/teachers.component';
import { StudentsComponent } from './features/admin/pages/students/students.component';
import { StudentLayoutComponent } from './layouts/student-layout/student-layout.component';
import { StudentDashboardComponent } from './features/student/pages/student-dashboard/student-dashboard.component';
import { StudentCoursesComponent } from './features/student/pages/student-courses/student-courses.component';
import { StudentQuizzesComponent } from './features/student/pages/student-quizzes/student-quizzes.component';
import { StudentAssignmentsComponent } from './features/student/pages/student-assignments/student-assignments.component';
import { LeaderboardComponent } from './features/student/pages/leaderboard/leaderboard.component';
import { StudentSettingsComponent } from './features/student/pages/student-settings/student-settings.component';
import { QuizzesComponent } from './features/teacher/pages/quizzes/quizzes.component';
import { ExploreCoursesComponent } from './features/student/pages/explore-courses/explore-courses.component';
import { SuperadminDashboardComponent } from './features/super-admin/pages/super-admin-dashboard/super-admin-dashboard.component';
import { AiAssistantComponent } from './features/student/pages/ai-assistant/ai-assistant.component';
import { SuperAdminLayoutComponent } from './layouts/super-admin-layout/super-admin-layout.component';
import { SuperAdminTenantsComponent } from './features/super-admin/pages/super-admin-tenants/super-admin-tenants.component';
import { SuperAdminSettingsComponent } from './features/super-admin/pages/super-admin-settings/super-admin-settings.component';
import { SuperAdminTenantSettingsComponent } from './features/super-admin/pages/super-admin-tenant-settings/super-admin-tenant-settings.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'studentsignup', component: StudentSignupComponent },
      { path: 'adminsignup', component: AdminSignupComponent },
    ],
  },

  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'courses', component: CoursesComponent },
      { path: 'teachers', component: TeachersComponent },
      { path: 'students', component: StudentsComponent },
      { path: 'settings', component: SettingsComponent },
    ],
  },

  {
    path: 'teacher',
    component: TeacherLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: TeacherDashboardComponent },
      { path: 'courses', component: TeacherCoursesComponent },
      { path: 'quizzes', component: QuizzesComponent },
      { path: 'assignments', component: GenerateAssignmentsComponent },
      { path: 'trackstudent', component: TrackStudentComponent },
      { path: 'settings', component: TeacherSettingsComponent },
    ],
  },

  {
    path: 'student',
    component: StudentLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: StudentDashboardComponent },
      { path: 'courses', component: StudentCoursesComponent },
      { path: 'quizzes', component: StudentQuizzesComponent },
      { path: 'assignments', component: StudentAssignmentsComponent },
      { path: 'ai-assisstant', component: AiAssistantComponent },
      { path: 'leaderboard', component: LeaderboardComponent },
      { path: 'settings', component: StudentSettingsComponent },
      { path: 'explore-courses', component: ExploreCoursesComponent },
    ],
  },
  {
    path: 'super-admin',
    component: SuperAdminLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: SuperadminDashboardComponent },
      { path: 'tenants', component: SuperAdminTenantsComponent },
      { path: 'settings', component: SuperAdminSettingsComponent },
      { path: 'tenant-settings/:id', component: SuperAdminTenantSettingsComponent },
    ],
  },

  { path: '**', component: NotFoundComponent },
];
