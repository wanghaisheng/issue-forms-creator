import { moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { Meta } from '@storybook/angular/types-6-0';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { TopLevelCreatorComponent, TopLevelCreatorModule } from './top-level-creator.component';

export default {
  title: 'Components/Issue Creator/Top Level',
  component: TopLevelCreatorComponent,
  decorators: [
    moduleMetadata({
      imports: [TopLevelCreatorModule, BrowserAnimationsModule],
      providers: [{ provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } }],
    }),
  ],
} as Meta;

export const pristine = () => ({
  props: {
    form: new FormGroup({
      name: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      title: new FormControl(null, Validators.required),
      body: new FormArray([]),
    }),
  },
});

const touchedForm = new FormGroup({
  name: new FormControl(null, Validators.required),
  description: new FormControl(null, Validators.required),
  title: new FormControl(null, Validators.required),
  body: new FormArray([]),
});
touchedForm.markAllAsTouched();

export const touched = () => ({
  props: {
    form: touchedForm,
  },
});

export const labels = () => ({
  props: {
    form: new FormGroup({
      name: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      title: new FormControl(null, Validators.required),
      labels: new FormControl(null),
      body: new FormArray([]),
    }),
  },
});

export const assignees = () => ({
  props: {
    form: new FormGroup({
      name: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      title: new FormControl(null, Validators.required),
      assignees: new FormControl(null),
      body: new FormArray([]),
    }),
  },
});

export const filled = () => ({
  props: {
    form: new FormGroup({
      name: new FormControl('Bug report', Validators.required),
      description: new FormControl('use this template to report bugs', Validators.required),
      title: new FormControl('[BUG]: ', Validators.required),
      labels: new FormControl(null),
      assignees: new FormControl(null),
      body: new FormArray([]),
    }),
  },
});