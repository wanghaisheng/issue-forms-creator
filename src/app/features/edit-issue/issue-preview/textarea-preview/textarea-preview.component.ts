import { Component, EventEmitter, Input, NgModule, Output } from '@angular/core';
import { TextareaSection } from '../../../../core/models/textarea-section';
import { FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MarkedModule } from '../../../../shared/pipes/marked.pipe';
import { ErrorMessageModule } from '../../../../shared/components/error-message/error-message.component';

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

@NgModule({
  declarations: [TextareaPreviewComponent],
  imports: [CommonModule, MarkedModule, ErrorMessageModule],
  exports: [TextareaPreviewComponent],
})
export class TextareaPreviewModule {}
