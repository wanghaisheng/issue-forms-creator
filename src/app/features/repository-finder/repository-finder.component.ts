import { Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RepositoryService } from '../../services/repository.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-repository-finder',
  templateUrl: './repository-finder.component.html',
  styleUrls: ['./repository-finder.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RepositoryFinderComponent implements OnDestroy {
  form: FormGroup = new FormGroup(
    {
      name: new FormControl(
        null,
        Validators.required,
        this.repositoryService.repositoryValidator(),
      ),
    },
    { updateOn: 'submit' },
  );

  // Todo : add check existing template names
  tooltipMessage = `
    load contributors for assignee list
    load existing labels
  `;

  destroy$: Subject<void> = new Subject<void>();

  constructor(private readonly repositoryService: RepositoryService) {}

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  reset(): void {
    this.form.reset();
    this.repositoryService.reset();
  }
}
