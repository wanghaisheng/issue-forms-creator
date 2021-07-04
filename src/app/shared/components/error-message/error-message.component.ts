import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
})
export class ErrorMessageComponent {
  @Input()
  errorMessage = 'missing label';

  @Input()
  hasLink: boolean = true;

  @Output()
  scrollToError: EventEmitter<void> = new EventEmitter<void>();
}
