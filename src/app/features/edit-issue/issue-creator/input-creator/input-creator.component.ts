import { Component, Input, NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-creator',
  templateUrl: './input-creator.component.html',
})
export class InputCreatorComponent {
  @Input()
  formGroup!: FormGroup;
}

@NgModule({
  declarations: [InputCreatorComponent],
  imports: [
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  exports: [InputCreatorComponent],
})
export class InputCreatorModule {}
