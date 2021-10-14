import { moduleMetadata } from '@storybook/angular';
import { Meta } from '@storybook/angular/types-6-0';
import { HeaderComponent, HeaderModule } from './header.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

export default {
  title: 'Core/Header',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [HeaderModule, HttpClientModule, RouterTestingModule],
    }),
  ],
} as Meta;

export const header = () => ({
  props: {},
});
