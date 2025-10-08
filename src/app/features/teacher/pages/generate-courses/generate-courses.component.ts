import { Component, EventEmitter, Output } from '@angular/core';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-generate-courses',
  imports: [
    HeaderComponent,
    ButtonComponent,
    ReactiveFormsModule,
    FormsModule,
    NgIf,
    NgFor,
  ],
  templateUrl: './generate-courses.component.html',
  styleUrl: './generate-courses.component.css',
})
export class GenerateCoursesComponent {
  @Output() courseCreated = new EventEmitter<any>();
  @Output() cancelled = new EventEmitter<void>();

  courseForm: FormGroup;
  isSubmitting = false;
  uploadedFiles: File[] = [];
  isDragging = false; // Initialize properly

  categories = [
    'Mathematics',
    'Science',
    'History',
    'Language',
    'Arts',
    'Technology',
    'Business',
    'Other',
  ];

  constructor(private fb: FormBuilder) {
    this.courseForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      category: ['', Validators.required],
      description: [''],
    });
  }

  onFileSelected(event: any): void {
    const files: FileList = event.target.files;
    if (files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        this.uploadedFiles.push(files[i]);
      }
    }
  }

  onFileDrop(event: DragEvent): void {
    event.preventDefault();
    this.isDragging = false;
    const files = event.dataTransfer?.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        this.uploadedFiles.push(files[i]);
      }
    }
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    this.isDragging = true;
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    this.isDragging = false;
  }

  removeFile(index: number): void {
    this.uploadedFiles.splice(index, 1);
  }

  onSubmit(): void {
    if (this.courseForm.valid) {
      this.isSubmitting = true;

      setTimeout(() => {
        const courseData = {
          ...this.courseForm.value,
          files: this.uploadedFiles,
          createdAt: new Date(),
        };

        this.courseCreated.emit(courseData);
        this.isSubmitting = false;
      }, 1000);
    } else {
      Object.keys(this.courseForm.controls).forEach((key) => {
        this.courseForm.get(key)?.markAsTouched();
      });
    }
  }

  onCancel(): void {
    this.cancelled.emit();
  }

  get title() {
    return this.courseForm.get('title');
  }
  get category() {
    return this.courseForm.get('category');
  }
}
