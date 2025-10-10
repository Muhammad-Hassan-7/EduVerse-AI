import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { StatCardComponent } from '../../../../shared/components/stat-card/stat-card.component';

import { CreateAssignmentComponent } from '../../components/create-assignment/create-assignment.component';

interface Assignment {
  id: number;
  title: string;
  course: string;
  description: string;
  dueDate: string;
  dueTime: string;
  totalMarks: number;
  passingMarks: number;
  submitted: number;
  totalStudents: number;
  status: 'active' | 'completed';
  allowLateSubmission: boolean;
}

@Component({
  selector: 'app-generate-assignments',
  standalone: true,
  imports: [CommonModule, ButtonComponent, HeaderComponent, CreateAssignmentComponent,StatCardComponent],
  templateUrl: './generate-assignments.component.html',
  styleUrls: ['./generate-assignments.component.css']
})
export class GenerateAssignmentsComponent implements OnInit {
  activeTab: 'active' | 'completed' = 'active';
  showCreateModal = false;
  selectedAssignment: any = null;
  
  teacherProfile = {
    name: 'Teacher Name',
    initials: 'TN',
    avatar: '' 
  };

  assignments: Assignment[] = [];

  ngOnInit() {
    this.loadAssignments();
  }

  loadAssignments() {
    const stored = localStorage.getItem('teacher-assignments');
    if (stored) {
      this.assignments = JSON.parse(stored);
    }
  }

  saveAssignments() {
    localStorage.setItem('teacher-assignments', JSON.stringify(this.assignments));
  }

  get filteredAssignments() {
    return this.assignments.filter(a => a.status === this.activeTab);
  }

  get activeCount() {
    return this.assignments.filter(a => a.status === 'active').length;
  }

  get completedCount() {
    return this.assignments.filter(a => a.status === 'completed').length;
  }

  get totalAssignmentsCount() {
    return this.assignments.length;
  }

  get totalSubmissionsCount() {
    return this.assignments.reduce((total, assignment) => total + assignment.submitted, 0);
  }

  getSubmissionPercentage(assignment: Assignment): number {
    if (assignment.totalStudents === 0) return 0;
    return Math.round((assignment.submitted / assignment.totalStudents) * 100);
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return 'Invalid Date';
    }
    return date.toLocaleDateString();
  }

  openModal(assignment?: Assignment) {
    this.selectedAssignment = assignment ? { ...assignment } : null;
    this.showCreateModal = true;
  }

  closeModal() {
    this.showCreateModal = false;
    this.selectedAssignment = null;
  }

  addOrUpdateAssignment(assignmentData: any) {
    if (assignmentData.id && this.assignments.some(a => a.id === assignmentData.id)) {
      // Update existing
      const idx = this.assignments.findIndex(a => a.id === assignmentData.id);
      if (idx > -1) {
        this.assignments[idx] = assignmentData;
      }
    } else {
      // Add new
      this.assignments.unshift(assignmentData);
    }

    this.saveAssignments();
    this.closeModal();
  }

  deleteAssignment(id: number, event: Event) {
    event.stopPropagation();
    if (confirm('Are you sure you want to delete this assignment?')) {
      this.assignments = this.assignments.filter(a => a.id !== id);
      this.saveAssignments();
    }
  }

  toggleAssignmentStatus(id: number, event: Event) {
    event.stopPropagation();
    const assignment = this.assignments.find(a => a.id === id);
    if (assignment) {
      assignment.status = assignment.status === 'active' ? 'completed' : 'active';
      this.saveAssignments();
    }
  }

  onProfileClick() {
    console.log('Profile clicked');
  }
}