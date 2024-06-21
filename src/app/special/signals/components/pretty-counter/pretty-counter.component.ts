import { Component, input, output } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-pretty-counter',
  standalone: true,
  imports: [MatProgressBarModule],
  templateUrl: './pretty-counter.component.html',
  styleUrl: './pretty-counter.component.scss',
})
export class PrettyCounterComponent {
  public readonly counter = input.required<number, number>({ transform: (num) => num * 5 });
  public readonly onClick = output();
}
