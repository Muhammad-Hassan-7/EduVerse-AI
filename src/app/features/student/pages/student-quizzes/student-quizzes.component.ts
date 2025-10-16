import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { QuizTakingModalComponent } from '../../components/quiz-taking-modal/quiz-taking-modal.component';

@Component({
  selector: 'app-student-quizzes',
  standalone: true,
  imports: [CommonModule, HeaderComponent, QuizTakingModalComponent],
  templateUrl: './student-quizzes.component.html',
  styleUrls: ['./student-quizzes.component.css'],
})
export class StudentQuizzesComponent implements OnInit {
  quizzes: any[] = [];
  showModal = false;
  selectedQuiz: any = null;
  viewOnly = false;
  today = new Date();

  ngOnInit(): void {
    this.quizzes = [
      {
        id: 1,
        quizNo: '01',
        course: 'Mathematics',
        dueDate: new Date('2025-10-05'), // past date → should be disabled
        description: 'Basic algebra questions',
        questions: [
          { statement: 'What is 2 + 2?', options: ['1', '2', '3', '4'], correctAnswer: '4' },
          { statement: 'What is 2 + 3?', options: ['2', '3', '4', '5'], correctAnswer: '5' },
          { statement: 'What is 2 + 4?', options: ['3', '4', '5', '6'], correctAnswer: '6' },
        ],
      },
      {
        id: 2,
        quizNo: '02',
        course: 'Mathematics',
        dueDate: new Date('2025-12-25'),
        description: 'Basic algebra questions',
        questions: [
          { statement: 'What is 2 + 2?', options: ['1', '2', '3', '4'], correctAnswer: '4' },
          { statement: 'What is 2 + 3?', options: ['2', '3', '4', '5'], correctAnswer: '5' },
          { statement: 'What is 2 + 4?', options: ['3', '4', '5', '6'], correctAnswer: '6' },
        ],
      },
      {
        id: 3,
        quizNo: '01',
        course: 'Physics',
        dueDate: new Date('2025-12-27'),
        description: 'Basic questions',
        questions: [
          { statement: 'What is 2 + 2?', options: ['1', '2', '3', '4'], correctAnswer: '4' },
          { statement: 'What is 2 + 3?', options: ['2', '3', '4', '5'], correctAnswer: '5' },
          { statement: 'What is 2 + 4?', options: ['3', '4', '5', '6'], correctAnswer: '6' },
        ],
      },
    ];
  }

  isDuePassed(quiz: any): boolean {
    return new Date(quiz.dueDate) < this.today;
  }

  openQuiz(quiz: any): void {
    if (this.isDuePassed(quiz)) {
      alert('Due date has passed. You cannot attempt this quiz.');
      quiz.status = 'Completed';
      quiz.score = 0;
      quiz.totalQuestions = quiz.questions.length;
      return;
    }

    this.selectedQuiz = quiz;
    this.viewOnly = quiz.status === 'Completed';
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
    this.selectedQuiz = null;
  }

  completeQuiz(quizResult: any): void {
    const idx = this.quizzes.findIndex(q => q.id === quizResult.id);
    if (idx > -1) {
      this.quizzes[idx] = {
        ...this.quizzes[idx],
        ...quizResult,
        status: 'Completed',
      };
    }

    this.closeModal();
  }
}
