import { RouterModule, Routes } from '@angular/router';
import { NewIssueComponent } from './new-issue.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: NewIssueComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewIssueRoutingModule {}
