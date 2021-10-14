import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditIssueComponent } from './edit-issue.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EditIssueModule } from './edit-issue.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconModule } from '../../shared/icon.module';

describe('EditIssueComponent', () => {
  let component: EditIssueComponent;
  let fixture: ComponentFixture<EditIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditIssueModule, HttpClientTestingModule, BrowserAnimationsModule, IconModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
