import { Component, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { FormArray, FormGroup } from '@angular/forms';
import { ListOptionComponent } from '../list-option/list-option.component';

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
