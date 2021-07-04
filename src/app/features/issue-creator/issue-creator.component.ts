import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { MatAccordion, MatExpansionPanel } from '@angular/material/expansion';
import { IssueFormGroup } from '../../forms/issue-form-group';
import { FormArray, FormGroup } from '@angular/forms';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-issue-creator',
  templateUrl: './issue-creator.component.html',
  styleUrls: ['./issue-creator.component.scss'],
})
export class IssueCreatorComponent implements AfterViewInit {
  @Input()
  form: IssueFormGroup = new IssueFormGroup();

  @Input()
  set scrollableItem(scrollable: { position: number }) {
    setTimeout(() => {
      this.panelsRef.get(scrollable?.position)?.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start',
      });
      this.panels.get(scrollable?.position)?.open();
    }, 500);
  }

  @ViewChild('headerPanel') headerPanel!: MatExpansionPanel;
  @ViewChild('sectionsAccordion') sectionsAccordion!: MatAccordion;
  @ViewChildren(MatExpansionPanel) panels!: QueryList<MatExpansionPanel>;
  @ViewChildren(MatExpansionPanel, { read: ElementRef }) panelsRef!: QueryList<ElementRef>;

  ngAfterViewInit() {
    setTimeout(() => this.headerPanel.open());
  }

  get controls(): FormGroup[] {
    return (this.form.get('body') as FormArray).controls as FormGroup[];
  }

  get isTopInvalid(): boolean {
    return (
      !!this.form.get('name')?.invalid ||
      !!this.form.get('description')?.invalid ||
      !!this.form.get('title')?.invalid
    );
  }

  addMarkdown(): void {
    this.form.addMarkdown();
    this.updateVisibility();
  }

  addTextarea(): void {
    this.form.addTextarea();
    this.updateVisibility();
  }

  addInput(): void {
    this.form.addInput();
    this.updateVisibility();
  }

  addDropdown(): void {
    this.form.addDropdown();
    this.updateVisibility();
  }

  addCheckboxes(): void {
    this.form.addCheckboxes();
    this.updateVisibility();
  }

  addCheckboxOption(index: number): void {
    this.form.addCheckboxOption(index);
  }

  removeCheckboxOption(indexCheckBox: number, indexSection: number): void {
    this.form.removeCheckboxOption(indexCheckBox, indexSection);
  }

  deleteControl(index: number): void {
    this.form.deleteControl(index);
  }

  updateVisibility(): void {
    this.headerPanel.close();
    setTimeout(() => this.panels.last.open());
    setTimeout(
      () =>
        this.panelsRef.last.nativeElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'start',
        }),
      500,
    );
  }

  closeAllPanels(): void {
    this.headerPanel.close();
    this.sectionsAccordion.closeAll();
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
}
