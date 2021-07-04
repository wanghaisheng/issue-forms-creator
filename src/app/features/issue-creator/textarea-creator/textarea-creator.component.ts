import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-textarea-creator',
  templateUrl: './textarea-creator.component.html',
})
export class TextareaCreatorComponent {
  @Input()
  formGroup!: FormGroup;
}
