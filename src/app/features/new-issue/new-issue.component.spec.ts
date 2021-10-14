import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewIssueComponent } from './new-issue.component';
import { NewIssueModule } from './new-issue.module';

describe('NewIssueComponent', () => {
  let component: NewIssueComponent;
  let fixture: ComponentFixture<NewIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewIssueModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
