import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
} from '@angular/forms';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { ModalShellComponent } from '../../../../shared/components/modal-shell/modal-shell.component';

@Component({
  selector: 'app-assignment-modal',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonComponent,
    ModalShellComponent,
  ],
  templateUrl: './assignment-modal.component.html',
  styleUrls: ['./assignment-modal.component.css'],
})
export class AssignmentModalComponent implements OnInit, OnChanges {
  @Input() show = false;
  @Input() formData: any = {}; // 🔹 Two-way data-like behavior
  @Input() editingAssignmentId: number | null = null;
  @Input() courses: string[] = [];

  @Output() onClose = new EventEmitter<void>();
  @Output() onSubmit = new EventEmitter<any>();

  assignmentForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // 🔹 Rebuild form when editing data changes
    if (changes['formData'] && this.assignmentForm) {
      this.assignmentForm.patchValue(this.formData);
    }
  }

  private buildForm() {
    this.assignmentForm = this.fb.group({
      title: [this.formData.title || '', Validators.required],
      course: [this.formData.course || '', Validators.required],
      description: [this.formData.description || '', Validators.required],
      dueDate: [this.formData.dueDate || '', Validators.required],
      dueTime: [this.formData.dueTime || '', Validators.required],
      totalMarks: [
        this.formData.totalMarks || null,
        [Validators.required, Validators.min(1), Validators.max(100)],
      ],
      passingMarks: [
        this.formData.passingMarks || null,
        [
          Validators.required,
          Validators.min(1),
          Validators.max(100),
          this.passingMarksValidator.bind(this),
        ],
      ],
      attachments: this.fb.array([]),
      allowLateSubmission: [this.formData.allowLateSubmission || false],
    });
  }

  passingMarksValidator(control: any) {
    const total = this.assignmentForm?.get('totalMarks')?.value;
    if (control.value > total) {
      return { passingGreaterThanTotal: true };
    }
    return null;
  }

  get attachments(): FormArray {
    return this.assignmentForm.get('attachments') as FormArray;
  }

  handleFileUpload(event: any) {
    const files = Array.from(event.target.files);
    files.forEach((file) => this.attachments.push(this.fb.control(file)));
  }

  removeAttachment(index: number) {
    this.attachments.removeAt(index);
  }

  submitForm() {
    if (this.assignmentForm.invalid) {
      this.assignmentForm.markAllAsTouched();
      return;
    }

    // Emit the form value to the parent
    this.onSubmit.emit(this.assignmentForm.value);
  }

  closeModal() {
    this.onClose.emit();
  }
}
