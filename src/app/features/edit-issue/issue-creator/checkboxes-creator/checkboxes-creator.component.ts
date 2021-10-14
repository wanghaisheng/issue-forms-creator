import {
  Component,
  EventEmitter,
  Input,
  NgModule,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { ListOptionComponent, ListOptionModule } from '../list-option/list-option.component';

@Component({
  selector: 'app-checkboxes-creator',
  templateUrl: './checkboxes-creator.component.html',
  styleUrls: ['./checkboxes-creator.component.scss'],
})
export class CheckboxesCreatorComponent {
  @Input()
  formGroup!: FormGroup;

  @Output()
  addCheckbox: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  removeCheckbox: EventEmitter<number> = new EventEmitter<number>();

  @ViewChildren(ListOptionComponent)
  optionsComp!: QueryList<ListOptionComponent>;

  get optionsControls(): FormGroup[] {
    return (this.formGroup.get('attributes')?.get('options') as FormArray).controls as FormGroup[];
  }

  drop(event: CdkDragDrop<FormGroup[]>): void {
    this.moveItemInFormArray(
      this.formGroup.get('attributes')?.get('options') as FormArray,
      event.previousIndex,
      event.currentIndex,
    );
  }

  moveItemInFormArray(formArray: FormArray, fromIndex: number, toIndex: number): void {
    const dir = toIndex > fromIndex ? 1 : -1;

    const item = formArray.at(fromIndex);
    for (let i = fromIndex; i * dir < toIndex * dir; i = i + dir) {
      const current = formArray.at(i + dir);
      formArray.setControl(i, current);
    }
    formArray.setControl(toIndex, item);
  }

  addOption(): void {
    this.addCheckbox.emit();
    setTimeout(() => this.optionsComp.last.focus());
  }
}

@NgModule({
  declarations: [CheckboxesCreatorComponent],
  imports: [
    MatButtonModule,
    MatChipsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    DragDropModule,
    MatIconModule,
    MatCheckboxModule,
    CommonModule,
    ListOptionModule,
  ],
  exports: [CheckboxesCreatorComponent],
})
export class CheckboxesCreatorModule {}
