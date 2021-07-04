import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { IssueFormGroup } from '../../../forms/issue-form-group';
import { FormControl, FormGroup } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { RepositoryService } from '../../../services/repository.service';
import { GithubLabel } from '../../../models/github/github-label';
import { combineLatest, Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { GithubContributor } from '../../../models/github/github-contributor';

@Component({
  selector: 'app-top-level-creator',
  templateUrl: './top-level-creator.component.html',
  styleUrls: ['./top-level-creator.component.scss'],
})
export class TopLevelCreatorComponent implements OnInit, OnDestroy {
  @Input()
  form!: FormGroup;

  labelsControl: FormControl = new FormControl(null);
  assigneesControl: FormControl = new FormControl(null);

  labelsGithubControl: FormControl = new FormControl(null);
  contributorsGithubControl: FormControl = new FormControl(null);

  labels = new Set<string>();
  assignees = new Set<string>();

  labels$ = this.repositoryService.labels$;
  contributors$ = this.repositoryService.contributors$;
  filteredContributors$: Observable<GithubContributor[] | undefined> = combineLatest([
    this.contributorsGithubControl.valueChanges,
    this.contributors$,
  ]).pipe(
    map(([input, contributors]) => {
      const localAssignees = Array.from(this.assignees);
      const unusedContributors = contributors?.filter(
        contributor => !localAssignees.includes(contributor.login),
      );
      const filteredContributors = unusedContributors?.filter(contributor =>
        contributor.login.toLowerCase().includes(input),
      );
      return filteredContributors;
    }),
  );
  repository$ = this.repositoryService.repository$;
  destroy$: Subject<void> = new Subject<void>();
  separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(private readonly repositoryService: RepositoryService) {}

  ngOnInit() {
    this.labelsGithubControl.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((labels: GithubLabel[]) => {
        this.form.get('labels')?.setValue(labels.map(label => label.name));
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  addLabels(): void {
    (this.form as IssueFormGroup).addLabels();
  }

  addAssignees(): void {
    (this.form as IssueFormGroup).addAssignees();
  }

  addLabelFromInput(event: MatChipInputEvent): void {
    if (event.value) {
      this.labels.add(event.value);
      this.form.get('labels')?.setValue(Array.from(this.labels));
      event.chipInput!.clear();
    }
  }

  removeLabel(label: string): void {
    this.labels.delete(label);
  }

  addAssigneeFromInput(event: MatChipInputEvent): void {
    if (event.value) {
      console.log(event.value);
      this.assignees.add(event.value);
      this.form.get('assignees')?.setValue(Array.from(this.assignees));
      event.chipInput!.clear();
    }
  }

  removeAssignee(assignee: string): void {
    this.assignees.delete(assignee);
  }

  addGithubContributor(): void {
    this.assignees.add(this.contributorsGithubControl.value);
    this.form.get('assignees')?.setValue(Array.from(this.assignees));
    this.contributorsGithubControl.reset();
  }
}
