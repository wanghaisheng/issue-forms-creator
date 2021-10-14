import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditIssueComponent } from './edit-issue.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { IssueCreatorModule } from './issue-creator/issue-creator.component';
import { IssuePreviewModule } from './issue-preview/issue-preview.component';
import { HeaderModule } from '../../core/components/header/header.component';
import { RepositoryFinderModule } from '../repository-finder/repository-finder.component';
import { EditIssueRoutingModule } from './edit-issue-routing.module';

@NgModule({
  declarations: [EditIssueComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    IssueCreatorModule,
    IssuePreviewModule,
    HeaderModule,
    RepositoryFinderModule,
    EditIssueRoutingModule,
  ],
})
export class EditIssueModule {}
