import { Component, NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { IconModule } from '../../../shared/icon.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {}

@NgModule({
  declarations: [HeaderComponent],
  imports: [IconModule, MatIconModule, MatButtonModule, RouterModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
