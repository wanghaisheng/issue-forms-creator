import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-list-option',
  templateUrl: './list-option.component.html',
  styleUrls: ['./list-option.component.scss'],
})
export class ListOptionComponent {
  @Input()
  form!: FormGroup;

  @Input()
  removable: boolean = false;

  @Output()
  delete: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  addOption: EventEmitter<void> = new EventEmitter<void>();

  @ViewChild('input', { read: ElementRef })
  input!: ElementRef;

  focus(): void {
    this.input.nativeElement.focus();
  }
}
