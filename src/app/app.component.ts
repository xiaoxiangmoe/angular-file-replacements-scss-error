import { Component } from '@angular/core';
import { appColor } from './app-color';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'file-replacements-scss';
  appColor = appColor;
}
