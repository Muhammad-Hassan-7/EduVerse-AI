import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

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
  imports: [CommonModule, FormsModule, ButtonComponent, HeaderComponent],
  templateUrl: './generate-assignments.component.html',
  styleUrls: ['./generate-assignments.component.css']
})
export class GenerateAssignmentsComponent implements OnInit {
  activeTab: 'active' | 'completed' = 'active';
  showCreateModal = false;
  editingAssignmentId: number | null = null;
  
  // Header profile data
  teacherProfile = {
    name: 'Teacher Name',
    initials: 'TN',
    avatar: '' 
  };
  
  formData = {
    title: '',
    description: '',
    course: '',
    dueDate: '',
    dueTime: '',
    totalMarks: '',
    passingMarks: '',
    allowLateSubmission: false,
    attachments: [] as File[]
  };

  assignments: Assignment[] = [
   
  ];

  courses = [
    'Advanced Web Development',
    'Database Management Systems',
    'Frontend Development',
    'Backend Development',
    'Mobile App Development',
    'Web Technologies',
    'Database Systems'
  ];

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
    return new Date(dateString).toLocaleDateString();
  }

  handleFileUpload(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.formData.attachments = [...this.formData.attachments, ...Array.from(input.files)];
    }
  }

  removeAttachment(index: number) {
    this.formData.attachments = this.formData.attachments.filter((_, i) => i !== index);
  }

  handleSubmit() {
    if (this.editingAssignmentId) {
      // Update existing assignment
      const index = this.assignments.findIndex(a => a.id === this.editingAssignmentId);
      if (index !== -1) {
        this.assignments[index] = {
          ...this.assignments[index],
          title: this.formData.title,
          description: this.formData.description,
          course: this.formData.course,
          dueDate: this.formData.dueDate,
          dueTime: this.formData.dueTime,
          totalMarks: parseInt(this.formData.totalMarks),
          passingMarks: parseInt(this.formData.passingMarks),
          allowLateSubmission: this.formData.allowLateSubmission
        };
      }
    } else {
      // Create new assignment
      const newAssignment: Assignment = {
        id: Date.now(),
        title: this.formData.title,
        description: this.formData.description,
        course: this.formData.course,
        dueDate: this.formData.dueDate,
        dueTime: this.formData.dueTime,
        totalMarks: parseInt(this.formData.totalMarks),
        passingMarks: parseInt(this.formData.passingMarks),
        submitted: 0,
        totalStudents: 50,
        status: 'active',
        allowLateSubmission: this.formData.allowLateSubmission
      };
      this.assignments.unshift(newAssignment);
    }

    this.saveAssignments();
    this.showCreateModal = false;
    this.editingAssignmentId = null;
    this.resetForm();
  }

  resetForm() {
    this.formData = {
      title: '',
      description: '',
      course: '',
      dueDate: '',
      dueTime: '',
      totalMarks: '',
      passingMarks: '',
      allowLateSubmission: false,
      attachments: []
    };
    this.editingAssignmentId = null;
  }

  openCreateModal() {
    this.showCreateModal = true;
    this.editingAssignmentId = null;
    this.resetForm();
  }

  closeCreateModal() {
    this.showCreateModal = false;
    this.editingAssignmentId = null;
    this.resetForm();
  }

  viewAssignment(id: number) {
    console.log('View assignment:', id);
    //  Navigate to assignment detail page or open modal
  }

  editAssignment(id: number) {
    console.log('Edit assignment:', id);
    const assignment = this.assignments.find(a => a.id === id);
    
    if (assignment) {
      // Pre-fill form with assignment data
      this.formData = {
        title: assignment.title,
        description: assignment.description,
        course: assignment.course,
        dueDate: assignment.dueDate,
        dueTime: assignment.dueTime,
        totalMarks: assignment.totalMarks.toString(),
        passingMarks: assignment.passingMarks.toString(),
        allowLateSubmission: assignment.allowLateSubmission,
        attachments: []
      };
      
      // Open the modal
      this.showCreateModal = true;
      
      // Store the ID being edited so we can update instead of create
      this.editingAssignmentId = id;
    }
  }

  deleteAssignment(id: number) {
    if (confirm('Are you sure you want to delete this assignment?')) {
      this.assignments = this.assignments.filter(a => a.id !== id);
      this.saveAssignments();
      console.log('Assignment deleted:', id);
    }
  }

  toggleAssignmentStatus(id: number) {
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