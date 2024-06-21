import { Component } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';

@Component({
  selector: 'app-v16',
  standalone: true,
  imports: [Highlight, HighlightLineNumbers],
  templateUrl: './v16.component.html',
  styleUrl: './v16.component.scss',
})
export class V16Component {
  public example1 = `  Alt: <my-component-with-a-very-long-name-because-corporate-requirements [input1]="value1"></my-component-with-a-very-long-name-because-corporate-requirements>
  Neu: <my-component-with-a-very-long-name-because-corporate-requirements [input1]="value1" />
  `;
}
