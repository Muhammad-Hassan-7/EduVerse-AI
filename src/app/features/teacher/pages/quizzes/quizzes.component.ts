import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { CreateQuizComponent } from '../../components/create-quiz/create-quiz.component';

@Component({
  selector: 'app-quizzes',
  standalone: true,
  imports: [CommonModule, CreateQuizComponent, HeaderComponent],
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {
  quizzes: any[] = [];
  showModal = false;
  selectedQuiz: any = null;

  ngOnInit(): void {
    this.quizzes = [
      {
        id: 1,
        quizNo: '01',
        course: 'Mathematics',
        dueDate: new Date('2025-10-12'),
        description: 'Basic algebra questions',
        questions: [
          {
            statement: 'What is 2 + 2?',
            options: ['1', '2', '3', '4'],
            correctAnswer: '4',
          },
        ],
        status: 'Active',
      },
      {
        id: 2,
        quizNo: '02',
        course: 'Physics',
        dueDate: new Date('2025-10-01'),
        description: 'Laws of motion',
        questions: [
          {
            statement: 'Who proposed the three laws of motion?',
            options: ['Einstein', 'Newton', 'Tesla', 'Maxwell'],
            correctAnswer: 'Newton',
          },
        ],
        status: 'Inactive',
      },
    ];

    this.updateQuizStatus();
  }

  openModal(quiz?: any) {
    this.selectedQuiz = quiz ? { ...quiz } : null;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.selectedQuiz = null;
  }

  addOrUpdateQuiz(quizData: any) {
    if (quizData.id) {
      const idx = this.quizzes.findIndex(q => q.id === quizData.id);
      if (idx > -1) this.quizzes[idx] = quizData;
    } else {
      quizData.id = this.quizzes.length + 1;
      quizData.quizNo = quizData.id.toString().padStart(2, '0');
      this.quizzes.push(quizData);
    }

    this.updateQuizStatus();
    this.closeModal();
  }

  updateQuizStatus() {
    const today = new Date();
    this.quizzes.forEach(q => {
      if (new Date(q.dueDate) < today) q.status = 'Inactive';
      else q.status = 'Active';
    });
  }
}
