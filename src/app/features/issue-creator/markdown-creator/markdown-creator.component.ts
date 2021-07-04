import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-markdown-creator',
  templateUrl: './markdown-creator.component.html',
})
export class MarkdownCreatorComponent {
  @Input()
  formGroup!: FormGroup;

  get control(): FormControl {
    return this.formGroup.get('attributes')?.get('value') as FormControl;
  }
}
