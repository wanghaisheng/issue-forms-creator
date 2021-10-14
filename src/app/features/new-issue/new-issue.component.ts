import { Component, EventEmitter, Output } from '@angular/core';
import { YamlService } from '../../core/services/yaml.service';
import { Issue } from '../../core/models/issue';
import { PresetEnum } from '../../core/enums/preset.enum';

@Component({
  selector: 'app-template-selection',
  templateUrl: './new-issue.component.html',
  styleUrls: ['./new-issue.component.scss'],
})
export class NewIssueComponent {
  PresetEnum = PresetEnum;

  @Output() createNew: EventEmitter<void> = new EventEmitter<void>();
  @Output() createWithContent: EventEmitter<Issue> = new EventEmitter<Issue>();
  @Output() createWithPreset: EventEmitter<PresetEnum> = new EventEmitter<PresetEnum>();

  constructor(private readonly yamlService: YamlService) {}

  loadYamlFile(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0] as File;
    if (file.type === 'application/x-yaml') {
      this.yamlService.parseYamlFile(file).subscribe(value => this.createWithContent.emit(value));
    } else {
      // TODO: error
    }
  }

  async loadYamlContent(): Promise<void> {
    const clipboard = await navigator.clipboard.readText();
    const parsed = this.yamlService.parseYamlContent(clipboard);
    this.createWithContent.emit(parsed);
  }
}
