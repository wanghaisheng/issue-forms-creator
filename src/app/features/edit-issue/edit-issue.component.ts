import { Component } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { IssueForm } from '../../core/forms/issue.form';
import { FormArray, FormGroup } from '@angular/forms';
import { Meta } from '@angular/platform-browser';
import { YamlService } from '../../core/services/yaml.service';
import { Issue } from '../../core/models/issue';
import { PresetEnum } from '../../core/enums/preset.enum';
import { FormService } from '../../core/services/form.service';

@Component({
  selector: 'app-issue-form',
  templateUrl: './edit-issue.component.html',
  styleUrls: ['./edit-issue.component.scss'],
})
export class EditIssueComponent {
  form: IssueForm = new IssueForm();
  clipboardSuccess: boolean = false;
  clipboardError: boolean = false;
  scrollableItem!: { position: number };
  copyActivated: boolean = false;

  constructor(
    private readonly meta: Meta,
    private readonly yamlService: YamlService,
    private readonly formService: FormService,
  ) {
    meta.addTag({ name: 'description', content: 'unofficial Github Issue Forms generator' });
  }

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

  async copyToClipboard(): Promise<void> {
    this.copyActivated = true;
    if (this.form.invalid) {
      this.clipboardError = true;
      setTimeout(() => (this.clipboardError = false), 2000);
      return;
    }

    await this.yamlService.copyToClipboard(this.form.value);

    this.clipboardSuccess = true;
    setTimeout(() => (this.clipboardSuccess = false), 1000);
  }

  createNew(): void {
    this.form.resetForm();
  }

  createWithPreset(preset: PresetEnum): void {
    this.form.createPreset(preset);
    this.formService.populate();
  }

  loadYamlFile(issue: Issue): void {
    this.form.populate(issue);
  }

  scrollToError(index: number): void {
    this.scrollableItem = Object.assign({ position: index });
  }
}
