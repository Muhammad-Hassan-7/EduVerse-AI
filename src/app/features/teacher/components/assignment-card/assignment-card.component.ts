import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from "../../../../shared/components/button/button.component";

@Component({
  selector: 'app-assignment-card',
  imports: [CommonModule, ButtonComponent],
  templateUrl: './assignment-card.component.html',
  styleUrl: './assignment-card.component.css',
})
export class AssignmentCardComponent {
  @Input() assignment: any;
  @Output() onView = new EventEmitter<number>();
  @Output() onEdit = new EventEmitter<number>();
  @Output() onDelete = new EventEmitter<number>();
  @Output() onToggleStatus = new EventEmitter<number>();

  getSubmissionPercentage(a: any): number {
    return Math.round((a.submitted / a.totalStudents) * 100);
  }
}
