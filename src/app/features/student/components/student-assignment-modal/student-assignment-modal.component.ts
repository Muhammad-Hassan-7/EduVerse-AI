import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalShellComponent } from '../../../../shared/components/modal-shell/modal-shell.component';

@Component({
  selector: 'app-student-assignment-modal',
  standalone: true,
  imports: [CommonModule, ModalShellComponent],
  templateUrl: './student-assignment-modal.component.html',
  styleUrl: './student-assignment-modal.component.css',
})
export class StudentAssignmentModalComponent {
  @Input() show = false;
  @Input() assignment: any;
  @Output() onClose = new EventEmitter<void>();
  @Output() onSubmit = new EventEmitter<any>();

  selectedFile: File | null = null;

  // handle file select
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  // remove file
  removeFile() {
    this.selectedFile = null;
  }

  // submit assignment
  submitAssignment() {
    if (this.selectedFile) {
      this.onSubmit.emit({
        file: this.selectedFile,
        assignmentId: this.assignment.id,
      });
      this.closeModal();
    }
  }

  // close modal + reset
  closeModal() {
    this.onClose.emit();
    this.selectedFile = null;
  }

  // validation getter
  get isFormValid(): boolean {
    return !!this.selectedFile;
  }
}
