import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NewIssueComponent } from './new-issue.component';
import { NewIssueRoutingModule } from './new-issue-routing.module';
import { IconModule } from '../../shared/icon.module';

@NgModule({
  declarations: [NewIssueComponent],
  imports: [MatButtonModule, MatIconModule, NewIssueRoutingModule, IconModule],
  exports: [NewIssueComponent],
})
export class NewIssueModule {}
