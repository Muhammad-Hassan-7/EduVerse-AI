import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormsModule,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-create-quiz',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css'],
})
export class CreateQuizComponent implements OnInit {
  @Input() quiz: any = null;
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<any>();

  quizForm!: FormGroup;
  isEditMode = false;
  isDisabled = false;

  courses = ['Mathematics', 'Physics', 'Chemistry', 'Computer Science'];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();

    if (this.quiz) {
      this.isEditMode = true;
      this.populateFormWithQuizData(this.quiz);
    }
  }

  initForm(): void {
    this.quizForm = this.fb.group({
      id: [null],
      quizNo: ['', Validators.required],
      course: ['', Validators.required],
      dueDate: ['', Validators.required],
      description: [''],
      questions: this.fb.array([this.createQuestionGroup()]),
      status: ['Active'],
    });
  }

  createQuestionGroup(): FormGroup {
    return this.fb.group({
      statement: ['', Validators.required],
      options: this.fb.array(
        Array(4).fill('').map(() => this.fb.control('', Validators.required))
      ),
      correctAnswer: ['', Validators.required],
    });
  }

  get questions(): FormArray {
    return this.quizForm.get('questions') as FormArray;
  }

  getOptions(i: number): FormArray {
    return this.questions.at(i).get('options') as FormArray;
  }

  addQuestion(): void {
    this.questions.push(this.createQuestionGroup());
  }

  removeQuestion(index: number): void {
    this.questions.removeAt(index);
  }

  populateFormWithQuizData(quizData: any): void {
    this.quizForm.patchValue({
      id: quizData.id,
      quizNo: quizData.quizNo,
      course: quizData.course,
      dueDate: this.formatDate(quizData.dueDate),
      description: quizData.description,
      status: quizData.status,
    });

    const qArray = this.quizForm.get('questions') as FormArray;
    qArray.clear();

    quizData.questions.forEach((q: any) => {
      qArray.push(
        this.fb.group({
          statement: [q.statement, Validators.required],
          options: this.fb.array(
            q.options.map((opt: string) => this.fb.control(opt, Validators.required))
          ),
          correctAnswer: [q.correctAnswer, Validators.required],
        })
      );
    });

    if (quizData.status === 'Inactive') {
      this.quizForm.disable();
      this.isDisabled = true;
    } else {
      this.quizForm.enable();
      this.isDisabled = false;
    }
  }

  formatDate(date: any): string {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = ('0' + (d.getMonth() + 1)).slice(-2);
    const day = ('0' + d.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }

  closeModal(): void {
    this.close.emit();
  }

  saveQuiz(): void {
    if (this.quizForm.invalid) {
      alert('Please fill all required fields.');
      return;
    }
    this.save.emit(this.quizForm.getRawValue());
  }
}
