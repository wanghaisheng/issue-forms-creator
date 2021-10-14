import { Component, EventEmitter, Input, NgModule, Output } from '@angular/core';
import { CheckboxesSection } from '../../../../core/models/checkboxes-section';
import { FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MarkedModule } from '../../../../shared/pipes/marked.pipe';
import { ErrorMessageModule } from '../../../../shared/components/error-message/error-message.component';

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

@NgModule({
  declarations: [CheckboxesPreviewComponent],
  imports: [CommonModule, MarkedModule, ErrorMessageModule],
  exports: [CheckboxesPreviewComponent],
})
export class CheckboxesPreviewModule {}
