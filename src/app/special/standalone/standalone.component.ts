import { Component } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';

@Component({
  selector: 'app-standalone',
  standalone: true,
  imports: [Highlight, HighlightLineNumbers],
  templateUrl: './standalone.component.html',
  styleUrl: './standalone.component.scss',
})
export class StandaloneComponent {
  public example1 = `  @Component({
    selector: 'app-example',
    standalone: true,
    imports: [MatButtonModule, MatTabsModule, JsonPipe],
    providers: [...],
    templateUrl: './example.component.html',
    styleUrl: './example.component.scss',
  })
  export class ExampleComponent {}`;
}
