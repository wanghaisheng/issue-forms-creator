import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { IconModule } from './shared/icon.module';
import { ErrorMessageComponent } from './shared/components/error-message/error-message.component';
import { MatIconModule } from '@angular/material/icon';
import { MarkedPipe } from './pipes/marked.pipe';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { RepositoryFinderComponent } from './features/repository-finder/repository-finder.component';
import { IssueFormComponent } from './features/issue-form/issue-form.component';
import { IssueCreatorComponent } from './features/issue-creator/issue-creator.component';
import { IssuePreviewComponent } from './features/issue-preview/issue-preview.component';
import { InputPreviewComponent } from './features/issue-preview/input-preview/input-preview.component';
import { InputCreatorComponent } from './features/issue-creator/input-creator/input-creator.component';
import { CheckboxesCreatorComponent } from './features/issue-creator/checkboxes-creator/checkboxes-creator.component';
import { CheckboxesPreviewComponent } from './features/issue-preview/checkboxes-preview/checkboxes-preview.component';
import { MarkdownPreviewComponent } from './features/issue-preview/markdown-preview/markdown-preview.component';
import { MarkdownCreatorComponent } from './features/issue-creator/markdown-creator/markdown-creator.component';
import { DropdownPreviewComponent } from './features/issue-preview/dropdown-preview/dropdown-preview.component';
import { DropdownCreatorComponent } from './features/issue-creator/dropdown-creator/dropdown-creator.component';
import { TextareaPreviewComponent } from './features/issue-preview/textarea-preview/textarea-preview.component';
import { TextareaCreatorComponent } from './features/issue-creator/textarea-creator/textarea-creator.component';
import { OptionPreviewComponent } from './features/issue-preview/option-preview/option-preview.component';
import { ListOptionComponent } from './features/issue-creator/list-option/list-option.component';
import { TopLevelPreviewComponent } from './features/issue-preview/top-level-preview/top-level-preview.component';
import { TopLevelCreatorComponent } from './features/issue-creator/top-level-creator/top-level-creator.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    ErrorMessageComponent,
    MarkedPipe,
    RepositoryFinderComponent,
    IssueFormComponent,
    IssueCreatorComponent,
    IssuePreviewComponent,
    InputPreviewComponent,
    InputCreatorComponent,
    CheckboxesCreatorComponent,
    CheckboxesPreviewComponent,
    MarkdownPreviewComponent,
    MarkdownCreatorComponent,
    DropdownPreviewComponent,
    DropdownCreatorComponent,
    TextareaPreviewComponent,
    TextareaCreatorComponent,
    OptionPreviewComponent,
    ListOptionComponent,
    TopLevelPreviewComponent,
    TopLevelCreatorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    IconModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    CommonModule,
    DragDropModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatChipsModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatExpansionModule,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
