// // import { Component, Input, Output, EventEmitter } from '@angular/core';
// // import { CommonModule } from '@angular/common';
// // import { ButtonComponent } from '../../../../shared/components/button/button.component';

// // @Component({
// //   selector: 'app-assignment-detail',
// //   imports: [CommonModule, ButtonComponent],
// //   templateUrl: './assignment-detail.component.html',
// //   styleUrl: './assignment-detail.component.css',
// // })
// // export class AssignmentDetailComponent {
// //   @Input() assignment!: AssignmentDetail;
// //   @Output() onViewSubmit = new EventEmitter<number>();
// //   @Output() onViewFeedback = new EventEmitter<number>();

// //   get daysLeft(): number {
// //     const dueDate = new Date(this.assignment.dueDate);
// //     const today = new Date();
// //     const timeDiff = dueDate.getTime() - today.getTime();
// //     return Math.ceil(timeDiff / (1000 * 3600 * 24));
// //   }

// //   get statusColor(): string {
// //     switch (this.assignment.status) {
// //       case 'pending':
// //         return this.daysLeft <= 3 ? 'bg-red-500' : 'bg-yellow-500';
// //       case 'submitted':
// //         return 'bg-green-500';
// //       case 'graded':
// //         return 'bg-purple-500';
// //       default:
// //         return 'bg-gray-500';
// //     }
// //   }

// //   get statusText(): string {
// //     switch (this.assignment.status) {
// //       case 'pending':
// //         return 'Pending';
// //       case 'submitted':
// //         return 'Submitted';
// //       case 'graded':
// //         return 'Graded';
// //       default:
// //         return 'Unknown';
// //     }
// //   }

// //   get daysLeftText(): string {
// //     if (this.assignment.status !== 'pending') {
// //       return '';
// //     }

// //     if (this.daysLeft === 0) return 'Due Today';
// //     if (this.daysLeft === 1) return '1 day left';
// //     if (this.daysLeft > 1) return `${this.daysLeft} days left`;
// //     return 'Overdue';
// //   }

// //   get daysLeftColor(): string {
// //     if (this.assignment.status !== 'pending') {
// //       return 'text-gray-600';
// //     }

// //     if (this.daysLeft <= 0) return 'text-red-600';
// //     if (this.daysLeft <= 3) return 'text-orange-600';
// //     return 'text-green-600';
// //   }

// //   handleViewSubmit() {
// //     this.onViewSubmit.emit(this.assignment.id);
// //   }

// //   handleViewFeedback() {
// //     this.onViewFeedback.emit(this.assignment.id);
// //   }
// // }

// // export interface AssignmentDetail {
// //   id: number;
// //   title: string;
// //   course: string;
// //   dueDate: string;
// //   status: 'pending' | 'submitted' | 'graded';
// //   submittedDate?: string;
// //   grade?: string;
// //   feedback?: string;
// //   description?: string;
// //   totalMarks?: number;
// //   passingMarks?: number;
// //   attachments?: string[];
// // }

// // assignment-detail.component.ts
// import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { ButtonComponent } from '../../../../shared/components/button/button.component';
// import { HeaderComponent } from '../../../../shared/components/header/header.component';

// export interface AssignmentDetail {
//   id: number;
//   title: string;
//   course: string;
//   dueDate: string;
//   status: 'pending' | 'submitted' | 'graded';
//   submittedDate?: string;
//   grade?: string;
//   feedback?: string;
//   description?: string;
//   totalMarks?: number;
//   passingMarks?: number;
//   attachments?: any;
// }

// @Component({
//   selector: 'app-assignment-detail',
//   standalone: true,
//   imports: [CommonModule, ButtonComponent, HeaderComponent],
//   templateUrl: './assignment-detail.component.html',
//   styleUrls: ['./assignment-detail.component.css'],
// })
// export class AssignmentDetailComponent {
// onFileSelected($event: Event) {
// throw new Error('Method not implemented.');
// }
// removeFile() {
// throw new Error('Method not implemented.');
// }
// closeModal() {
// throw new Error('Method not implemented.');
// }
// selectedFile: any;
// requestExtension() {
// throw new Error('Method not implemented.');
// }
// viewGradeDetails() {
// throw new Error('Method not implemented.');
// }
// resubmitAssignment() {
// throw new Error('Method not implemented.');
// }
//   @Input() assignment!: AssignmentDetail;
//   @Output() onViewSubmit = new EventEmitter<number>();
//   @Output() onViewFeedback = new EventEmitter<number>();
//   statusText: any;

//   get daysLeft(): number {
//     const dueDate = new Date(this.assignment.dueDate);
//     const today = new Date();
//     const timeDiff = dueDate.getTime() - today.getTime();
//     return Math.ceil(timeDiff / (1000 * 3600 * 24));
//   }

//   get statusColor(): string {
//     switch (this.assignment.status) {
//       case 'pending':
//         return this.daysLeft <= 3
//           ? 'bg-red-50 text-red-700'
//           : 'bg-yellow-50 text-yellow-700';
//       case 'submitted':
//         return 'bg-blue-50 text-blue-700';
//       case 'graded':
//         return 'bg-green-50 text-green-700';
//       default:
//         return 'bg-gray-50 text-gray-700';
//     }
//   }

//   get statusIcon(): string {
//     switch (this.assignment.status) {
//       case 'pending':
//         return 'fa-clock';
//       case 'submitted':
//         return 'fa-check';
//       case 'graded':
//         return 'fa-star';
//       default:
//         return 'fa-file';
//     }
//   }

//   get daysLeftText(): string {
//     if (this.assignment.status !== 'pending') return '';
//     if (this.daysLeft === 0) return 'Due Today';
//     if (this.daysLeft === 1) return '1 day left';
//     if (this.daysLeft > 1) return `${this.daysLeft} days left`;
//     return 'Overdue';
//   }

//   handleViewSubmit() {
//     this.onViewSubmit.emit(this.assignment.id);
//   }

//   handleViewFeedback() {
//     this.onViewFeedback.emit(this.assignment.id);
//   }
// }

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { StudentAssignmentModalComponent } from '../student-assignment-modal/student-assignment-modal.component';

export interface AssignmentDetail {
  id: number;
  title: string;
  course: string;
  dueDate: string;
  status: 'pending' | 'submitted' | 'graded';
  submittedDate?: string;
  grade?: string;
  feedback?: string;
  description?: string;
  totalMarks?: number;
  passingMarks?: number;
  attachments?: any;
}

@Component({
  selector: 'app-assignment-detail',
  standalone: true,
  imports: [CommonModule, ButtonComponent, StudentAssignmentModalComponent],
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css'],
})
export class AssignmentDetailComponent {
  @Input() assignment!: AssignmentDetail;
  @Output() onViewSubmit = new EventEmitter<number>();
  @Output() onViewFeedback = new EventEmitter<number>();

  isModalOpen = false;
  statusText: any;

  handleViewSubmit() {
    console.log('Opening modal...');
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  handleViewFeedback() {
    alert('You did a god effort.');
    this.onViewFeedback.emit(this.assignment.id);
  }

  get daysLeft(): number {
    const dueDate = new Date(this.assignment.dueDate);
    const today = new Date();
    const timeDiff = dueDate.getTime() - today.getTime();
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
  }

  get daysLeftText(): string {
    if (this.assignment.status !== 'pending') return '';
    if (this.daysLeft === 0) return 'Due Today';
    if (this.daysLeft === 1) return '1 day left';
    if (this.daysLeft > 1) return `${this.daysLeft} days left`;
    return 'Overdue';
  }
}
