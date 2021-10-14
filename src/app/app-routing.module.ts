import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'edit',
    pathMatch: 'full',
  },
  {
    path: 'new',
    loadChildren: () => import('./features/new-issue/new-issue.module').then(m => m.NewIssueModule),
  },
  {
    path: 'edit',
    loadChildren: () =>
      import('./features/edit-issue/edit-issue.module').then(m => m.EditIssueModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
