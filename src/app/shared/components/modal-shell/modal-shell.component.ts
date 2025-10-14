import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-shell',
  imports: [CommonModule],
  templateUrl: './modal-shell.component.html',
  styleUrl: './modal-shell.component.css',
})
export class ModalShellComponent {
  @Input() show = false;
  @Input() title = '';
  @Output() close = new EventEmitter<void>();

  onOverlayClick(event: MouseEvent) {
    this.close.emit();
  }
}
