import { Meta, Story } from '@storybook/angular/types-6-0';
import { NewIssueComponent } from './new-issue.component';
import { moduleMetadata } from '@storybook/angular';
import { NewIssueModule } from './new-issue.module';

export default {
  title: 'Features/New Issue',
  component: NewIssueComponent,
  decorators: [
    moduleMetadata({
      imports: [NewIssueModule],
    }),
  ],
} as Meta;

const Template: Story<NewIssueComponent> = args => ({
  props: args,
});

export const newIssue = Template.bind({});
newIssue.args = {};
