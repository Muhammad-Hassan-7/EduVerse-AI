// student-assignments.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import {
  AssignmentDetailComponent,
  AssignmentDetail,
} from '../../components/assignment-detail/assignment-detail.component';

type TabType = 'all' | 'pending' | 'submitted' | 'graded';

@Component({
  selector: 'app-student-assignments',
  standalone: true,
  imports: [CommonModule, HeaderComponent, AssignmentDetailComponent],
  templateUrl: './student-assignments.component.html',
  styleUrls: ['./student-assignments.component.css'],
})
export class StudentAssignmentsComponent implements OnInit {
  assignments: AssignmentDetail[] = [
    {
      id: 1,
      title: 'Final Essay',
      course: 'History of Art',
      dueDate: 'October 29, 2023',
      status: 'pending',
      description:
        'Write a comprehensive essay on the history of art movements from Renaissance to Modern Art. Your essay should be 2000-2500 words and include at least 5 references.',
      totalMarks: 100,
      passingMarks: 40,
      attachments: ['Essay_Guidelines.pdf', 'Reference_Material.zip'],
    },
    {
      id: 2,
      title: 'Problem Set 5',
      course: 'Advanced Mathematics',
      dueDate: 'November 5, 2023',
      status: 'pending',
      description:
        'Solve the following problems related to calculus and linear algebra. Show all your work and reasoning.',
      totalMarks: 50,
      passingMarks: 25,
      attachments: ['Problem_Set_5.pdf', 'Formulas_Sheet.pdf'],
    },
    {
      id: 3,
      title: 'Case Study Analysis',
      course: 'Intro to Marketing',
      dueDate: 'October 20, 2023',
      status: 'submitted',
      submittedDate: 'October 18, 2023',
      description:
        'Analyze the marketing strategy of a successful brand and provide recommendations for improvement.',
      totalMarks: 100,
      passingMarks: 50,
    },
    {
      id: 4,
      title: 'Character Design',
      course: 'Digital Illustration',
      dueDate: 'October 15, 2023',
      status: 'graded',
      submittedDate: 'October 14, 2023',
      grade: 'A-',
      feedback:
        'Excellent character design with strong personality. Good use of color theory.',
      description:
        'Create an original character design with front, side, and back views. Include color palette and personality description.',
      totalMarks: 100,
      passingMarks: 60,
    },
  ];

  filteredAssignments: AssignmentDetail[] = [];
  activeTab: TabType = 'all';
  tabs: { id: TabType; label: string }[] = [
    { id: 'all', label: 'All' },
    { id: 'pending', label: 'Pending' },
    { id: 'submitted', label: 'Submitted' },
    { id: 'graded', label: 'Graded' },
  ];

  ngOnInit() {
    this.filterAssignments();
  }

  filterAssignments() {
    if (this.activeTab === 'all') {
      this.filteredAssignments = this.assignments;
    } else {
      this.filteredAssignments = this.assignments.filter(
        (assignment) => assignment.status === this.activeTab
      );
    }
  }

  onTabChange(tab: TabType) {
    this.activeTab = tab;
    this.filterAssignments();
  }

  getTabClass(tabId: TabType): string {
    const baseClasses =
      'px-4 py-2 rounded-md text-sm font-medium transition-colors';
    if (this.activeTab === tabId) {
      return `${baseClasses} bg-blue-600 text-white`;
    } else {
      return `${baseClasses} text-gray-600 hover:text-gray-900`;
    }
  }

  handleViewSubmit(assignmentId: number) {
    console.log('View/Submit assignment:', assignmentId);
    // Open submission modal or navigate to submission page
    // You can implement modal opening logic here
  }

  handleViewFeedback(assignmentId: number) {
    console.log('View feedback for assignment:', assignmentId);
    // Open feedback modal
    // You can implement feedback modal logic here
  }
}
