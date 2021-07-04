import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-top-level-preview',
  templateUrl: './top-level-preview.component.html',
  styleUrls: ['./top-level-preview.component.scss'],
})
export class TopLevelPreviewComponent {
  @Input()
  name: string = '';

  @Input()
  description: string = '';

  @Input()
  title: string = '';

  @Output()
  scrollToError: EventEmitter<void> = new EventEmitter<void>();
}
