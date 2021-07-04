import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-issue-preview',
  templateUrl: './issue-preview.component.html',
  styleUrls: ['./issue-preview.component.scss'],
})
export class IssuePreviewComponent {
  copyActivated = false;

  @Input()
  form!: FormGroup;

  @Input()
  clipboardSuccess: boolean = false;

  @Input()
  clipboardError: boolean = false;

  @Output()
  copyToClipboard: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  scrollToError: EventEmitter<number> = new EventEmitter<number>();

  get controls(): FormGroup[] {
    return (this.form.get('body') as FormArray).controls as FormGroup[];
  }

  drop(event: CdkDragDrop<string[]>): void {
    this.moveItemInFormArray(
      this.form.get('body') as FormArray,
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

  get errorsList(): { message: string }[] {
    let errorList = [];
    if (this.form.get('body')?.getError('duplicateIds')) {
      errorList.push(this.form.get('body')?.getError('duplicateIds'));
    }

    if (this.form.get('body')?.getError('onlyMarkdownSections')) {
      errorList.push(this.form.get('body')?.getError('onlyMarkdownSections'));
    }

    return errorList;
  }
}
