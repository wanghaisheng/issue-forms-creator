import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TextareaSection } from '../../../models/textarea-section';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-textarea-preview',
  templateUrl: './textarea-preview.component.html',
  styleUrls: ['./textarea-preview.component.scss'],
})
export class TextareaPreviewComponent {
  @Input()
  formGroup!: FormGroup;

  @Output()
  scrollToError: EventEmitter<void> = new EventEmitter<void>();

  get section(): TextareaSection {
    return this.formGroup.value as TextareaSection;
  }
}
