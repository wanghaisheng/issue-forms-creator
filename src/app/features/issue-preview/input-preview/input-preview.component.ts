import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputSection } from '../../../models/input-section';

@Component({
  selector: 'app-input-preview',
  templateUrl: './input-preview.component.html',
  styleUrls: ['./input-preview.component.scss'],
})
export class InputPreviewComponent {
  @Input()
  formGroup!: FormGroup;

  @Output()
  scrollToError: EventEmitter<void> = new EventEmitter<void>();

  get section(): InputSection {
    return this.formGroup.value as InputSection;
  }
}
