import { Component } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';

@Component({
  selector: 'app-v15',
  standalone: true,
  imports: [Highlight, HighlightLineNumbers],
  templateUrl: './v15.component.html',
  styleUrl: './v15.component.scss',
})
export class V15Component {
  public example1 = `  const route = {
    path: 'dashboard',
    canActivate: [() => inject(authService).isAuthenticated()]
  };`;
}
