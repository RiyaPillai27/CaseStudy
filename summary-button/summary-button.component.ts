// summary-button.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-summary-button',
  templateUrl: './summary-button.component.html',
  styleUrls: ['./summary-button.component.css']
})
export class SummaryButtonComponent {
  @Input() profileId: number = 0;
  @Output() summaryClick = new EventEmitter<number>();

  constructor() { }

  onClick(): void {
    this.summaryClick.emit(this.profileId);
  }
}
