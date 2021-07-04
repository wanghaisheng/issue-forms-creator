import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-creator',
  templateUrl: './input-creator.component.html',
})
export class InputCreatorComponent {
  @Input()
  formGroup!: FormGroup;
}
