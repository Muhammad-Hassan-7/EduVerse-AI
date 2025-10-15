import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentAssignmentModalComponent } from '../student-assignment-modal/student-assignment-modal.component';

@Component({
  selector: 'app-assignment-detail',
  standalone: true,
  imports: [CommonModule, StudentAssignmentModalComponent],
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css'],
})
export class AssignmentDetailComponent {
  @Input() assignment!: any;
  @Output() onViewSubmit = new EventEmitter<number>();
  @Output() onViewFeedback = new EventEmitter<number>();

  isModalOpen = false;

  handleViewSubmit() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  handleViewFeedback() {
    alert('You did a good effort.');
    this.onViewFeedback.emit(this.assignment.id);
  }

  handleAssignmentSubmit(event: any) {
    this.assignment.status = 'submitted';
    this.assignment.submittedDate = new Date().toLocaleDateString();
    console.log('Assignment submitted:', event);
    this.isModalOpen = false;
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
