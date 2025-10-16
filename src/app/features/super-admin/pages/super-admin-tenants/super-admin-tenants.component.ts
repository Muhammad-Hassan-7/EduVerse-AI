import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import {
  DataTableComponent,
  TableColumn,
} from '../../../../shared/components/data-table/data-table.component';
import { StatCardComponent } from '../../../../shared/components/stat-card/stat-card.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-super-admin-tenants',
  standalone: true,
  imports: [
    HeaderComponent,
    DataTableComponent,
    StatCardComponent,
    CommonModule,
  ],
  templateUrl: './super-admin-tenants.component.html',
  styleUrl: './super-admin-tenants.component.css',
})
export class SuperAdminTenantsComponent {
  stats: TenantStats[] = [
    {
      title: 'Total Organizations',
      value: 24,
      icon: 'fa-solid fa-building',
      bgColor: 'bg-blue-50',
      iconBgClass: 'bg-blue-100',
      iconColorClass: 'text-blue-600',
    },
    {
      title: 'Active Subscriptions',
      value: 18,
      icon: 'fa-solid fa-circle-check',
      bgColor: 'bg-green-50',
      iconBgClass: 'bg-green-100',
      iconColorClass: 'text-green-600',
    },
    {
      title: 'Total Courses',
      value: 342,
      icon: 'fa-solid fa-book',
      bgColor: 'bg-yellow-50',
      iconBgClass: 'bg-yellow-100',
      iconColorClass: 'text-yellow-600',
    },
    {
      title: 'Total Revenue',
      value: '$12,450',
      icon: 'fa-solid fa-dollar-sign',
      bgColor: 'bg-purple-50',
      iconBgClass: 'bg-purple-100',
      iconColorClass: 'text-purple-600',
    },
  ];

  columns: TableColumn[] = [
    { key: 'name', label: 'Name', type: 'text' },
    { key: 'email', label: 'Email', type: 'text' },
    { key: 'courses', label: 'Courses', type: 'text' },
    { key: 'teachers', label: 'Teachers', type: 'text' },
    { key: 'students', label: 'Students', type: 'text' },
    {
      key: 'subscription',
      label: 'Subscription',
      type: 'badge',
      badgeColors: {
        Paid: 'bg-green-100 text-green-800',
        Free: 'bg-yellow-100 text-yellow-800',
        Trial: 'bg-blue-100 text-blue-800',
        Expired: 'bg-red-100 text-red-800',
      },
    },
  ];

  tenants: any[] = [
    {
      id: 1,
      name: 'Innovate Inc.',
      email: 'contact@innovate.com',
      courses: 25,
      teachers: 18,
      students: 150,
      subscription: 'Paid',
    },
    {
      id: 2,
      name: 'Quantum Solutions',
      email: 'admin@quantum.com',
      courses: 42,
      teachers: 25,
      students: 220,
      subscription: 'Trial',
    },
    {
      id: 3,
      name: 'Synergy Corp',
      email: 'support@synergy.org',
      courses: 15,
      teachers: 5,
      students: 85,
      subscription: 'Expired',
    },
    {
      id: 4,
      name: 'Apex Enterprises',
      email: 'info@apexent.com',
      courses: 60,
      teachers: 35,
      students: 310,
      subscription: 'Paid',
    },
    {
      id: 5,
      name: 'Global Tech',
      email: 'contact@globaltech.io',
      courses: 18,
      teachers: 8,
      students: 95,
      subscription: 'Free',
    },
    {
      id: 6,
      name: 'NextGen Academy',
      email: 'admin@nextgen.edu',
      courses: 28,
      teachers: 12,
      students: 175,
      subscription: 'Trial',
    },
    {
      id: 7,
      name: 'TechHub Learning',
      email: 'support@techhub.com',
      courses: 35,
      teachers: 20,
      students: 200,
      subscription: 'Paid',
    },
    {
      id: 8,
      name: 'EduSphere',
      email: 'contact@edusphere.com',
      courses: 12,
      teachers: 6,
      students: 65,
      subscription: 'Expired',
    },
  ];

  currentPage: number = 1;
  pageSize: number = 5;
  totalItems: number = 0;

  constructor(private router: Router) {}

  ngOnInit() {
    this.totalItems = this.tenants.length;
  }

  onPageChange(page: number) {
    this.currentPage = page;
  }

  onActionClick(tenant: any) {
    console.log('Action clicked for tenant:', tenant);
    this.router.navigate(['/super-admin/tenants', tenant.id]);
  }

  onEdit(tenant: any) {
    console.log('Edit tenant:', tenant);
    this.router.navigate(['/super-admin/settings']);
  }

  onDelete(tenant: any) {
    console.log('Delete tenant:', tenant);
    if (confirm(`Are you sure you want to delete ${tenant.name}?`)) {
      this.tenants = this.tenants.filter((t) => t.id !== tenant.id);
      this.totalItems = this.tenants.length;
    }
  }
}

interface StatCard {
  title: string;
  value: string;
  icon: string;
  iconBgClass: string;
  iconColorClass: string;
}

interface TenantStats {
  title: string;
  value: number | string;
  icon: string;
  bgColor: string;
  iconBgClass: string;
  iconColorClass: string;
}

interface Tenant {
  id: number;
  name: string;
  email: string;
  courses: number;
  teachers: number;
  students: number;
  subscription: string;
}
