import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MarkdownSection } from '../../../models/markdown-section';

@Component({
  selector: 'app-markdown-preview',
  templateUrl: './markdown-preview.component.html',
})
export class MarkdownPreviewComponent {
  @Input()
  formGroup!: FormGroup;

  get section(): MarkdownSection {
    return this.formGroup.value as MarkdownSection;
  }
}
