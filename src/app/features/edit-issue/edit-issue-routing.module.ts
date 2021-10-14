import { RouterModule, Routes } from '@angular/router';
import { EditIssueComponent } from './edit-issue.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: EditIssueComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditIssueRoutingModule {}
