import { Component } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';

@Component({
  selector: 'app-v17',
  standalone: true,
  imports: [Highlight, HighlightLineNumbers],
  templateUrl: './v17.component.html',
  styleUrl: './v17.component.scss',
})
export class V17Component {
  public example1 = `  <!-- alte Syntax -->
  <div *ngIf="loggedIn; else anonymousUser">
    The user is logged in
  </div>
  <ng-template #anonymousUser>
    The user is not logged in
  </ng-template>

  <!-- neue Syntax -->
  @if (loggedIn) {
    The user is logged in
  } @else {
    The user is not logged in
  }
  `;
}
