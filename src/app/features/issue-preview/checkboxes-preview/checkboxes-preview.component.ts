import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CheckboxesSection } from '../../../models/checkboxes-section';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkboxes-preview',
  templateUrl: './checkboxes-preview.component.html',
  styleUrls: ['./checkboxes-preview.component.scss'],
})
export class CheckboxesPreviewComponent {
  @Input() formGroup!: FormGroup;

  @Output()
  scrollToError: EventEmitter<void> = new EventEmitter<void>();

  get section(): CheckboxesSection {
    return this.formGroup.value as CheckboxesSection;
  }
}
