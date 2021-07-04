import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DropdownSection } from '../../../models/dropdown-section';

@Component({
  selector: 'app-dropdown-preview',
  templateUrl: './dropdown-preview.component.html',
})
export class DropdownPreviewComponent {
  @Input()
  formGroup!: FormGroup;

  @Output()
  scrollToError: EventEmitter<void> = new EventEmitter<void>();

  get section(): DropdownSection {
    return this.formGroup.value as DropdownSection;
  }
}
